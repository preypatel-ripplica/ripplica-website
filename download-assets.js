#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const axios = require("axios");

const harFile = process.argv[2];
const ASSETS_DIR = path.join(process.cwd(), "assets");
const URLS_FILE = path.join(process.cwd(), "urls.txt");
const IMAGE_PREFIX = "https://framerusercontent.com/images/";
const MAX_RETRIES = 2;

if (!harFile) {
  console.log("Usage: node download-assets.js framer.com.har");
  process.exit(1);
}

function readHar(filePath) {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(absolutePath, "utf8");
  return JSON.parse(content);
}

function stripQueryParams(url) {
  return url.split("?")[0].split("#")[0];
}

function isFramerImageUrl(url) {
  return typeof url === "string" && url.startsWith(IMAGE_PREFIX);
}

function collectImageUrls(har) {
  const entries = har && har.log && Array.isArray(har.log.entries)
    ? har.log.entries
    : [];
  const originalUrls = [];
  const cleanUrls = new Set();

  for (const entry of entries) {
    const requestUrl = entry && entry.request && entry.request.url;

    if (!isFramerImageUrl(requestUrl)) {
      continue;
    }

    originalUrls.push(requestUrl);
    cleanUrls.add(stripQueryParams(requestUrl));
  }

  return {
    originalUrls,
    cleanUrls: Array.from(cleanUrls),
  };
}

function sanitizeFilename(filename) {
  return filename
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
    .trim();
}

function getFilenameFromUrl(url, index) {
  const cleanUrl = stripQueryParams(url);
  const parts = cleanUrl.split("/");
  const filename = sanitizeFilename(parts[parts.length - 1] || "");

  return filename || `framer-image-${index}`;
}

function getUniqueFilePath(filename) {
  const parsed = path.parse(filename);
  let candidate = path.join(ASSETS_DIR, filename);
  let suffix = 1;

  while (fs.existsSync(candidate)) {
    candidate = path.join(ASSETS_DIR, `${parsed.name}-${suffix}${parsed.ext}`);
    suffix += 1;
  }

  return candidate;
}

async function downloadWithRetries(url, destinationPath) {
  let lastError;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const response = await axios({
        method: "GET",
        url,
        responseType: "arraybuffer",
        timeout: 30000,
      });

      fs.writeFileSync(destinationPath, response.data);
      return;
    } catch (error) {
      lastError = error;

      if (fs.existsSync(destinationPath)) {
        fs.unlinkSync(destinationPath);
      }
    }
  }

  throw lastError;
}

async function main() {
  const har = readHar(harFile);
  const { originalUrls, cleanUrls } = collectImageUrls(har);

  fs.mkdirSync(ASSETS_DIR, { recursive: true });
  fs.writeFileSync(URLS_FILE, originalUrls.join("\n"), "utf8");

  let downloaded = 0;
  let failed = 0;

  console.log(`Found ${cleanUrls.length} unique image URL(s).`);
  console.log(`Saved ${originalUrls.length} original image URL(s) to urls.txt.`);

  for (let index = 0; index < cleanUrls.length; index += 1) {
    const url = cleanUrls[index];
    const filename = getFilenameFromUrl(url, index + 1);
    const destinationPath = getUniqueFilePath(filename);
    const progress = `[${index + 1}/${cleanUrls.length}]`;

    process.stdout.write(`${progress} Downloading ${path.basename(destinationPath)} ... `);

    try {
      await downloadWithRetries(url, destinationPath);
      downloaded += 1;
      console.log("done");
    } catch (error) {
      failed += 1;
      console.log(`failed (${error.message})`);
    }
  }

  console.log("");
  console.log("Summary");
  console.log(`Unique image URLs: ${cleanUrls.length}`);
  console.log(`Original image URLs saved: ${originalUrls.length}`);
  console.log(`Successfully downloaded: ${downloaded}`);
  console.log(`Failed downloads: ${failed}`);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
