"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import { Container } from "@/components/layout/Container";
import { demoTasks, steps } from "@/components/home/home-data";
import { cn } from "@/lib/cn";

type StepKey = "record" | "review" | "run";

const stepKeys: StepKey[] = ["record", "review", "run"];

export function ProductDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeStep, setActiveStep] = useState<StepKey>("record");
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeTask = demoTasks[activeTaskIndex];
  const activeVideo = activeTask.videos[activeStep];
  const activeStepIndex = stepKeys.findIndex((step) => step === activeStep);

  function startDemo() {
    setHasStarted(true);
    setActiveStep("record");
    setProgress(0);
  }

  function selectStep(step: StepKey) {
    setActiveStep(step);
    setProgress(0);
  }

  function selectTask(index: number) {
    setActiveTaskIndex(index);
    setActiveStep("record");
    setProgress(0);
  }

  function updateProgress() {
    const video = videoRef.current;

    if (!video || !video.duration) {
      return;
    }

    setProgress(video.currentTime / video.duration);
  }

  function handleVideoEnded() {
    if (activeStepIndex < stepKeys.length - 1) {
      setActiveStep(stepKeys[activeStepIndex + 1]);
      setProgress(0);
      return;
    }

    setProgress(1);
  }

  return (
    <section className="bg-white pb-24 pt-12">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[44px] font-medium leading-tight tracking-normal text-[#3c3c3f] sm:text-[52px]">
            Built for high performance
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[19px] leading-7 text-[#7b7b86]">
            Ripplica allows you to automate any browser based workflow in three easy
            steps. Say bye to repititive work with your team of Ripplica agents.
          </p>
        </div>

        <div
          id="demo"
          className="mx-auto mt-10 grid max-w-5xl scroll-mt-[110px] gap-4 md:grid-cols-3"
        >
          {steps.map((step, index) => {
            const stepKey = stepKeys[index];
            const isActive = activeStep === stepKey;

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => selectStep(stepKey)}
                className={cn(
                  "min-h-[112px] rounded-lg border border-[#e6e6e6] bg-white p-5 text-left shadow-[0_8px_22px_rgba(0,0,0,0.02)] transition hover:border-[#9a9a9a]",
                  isActive && "border-[#333]",
                )}
              >
                <div className="flex min-h-10 items-start justify-between gap-4">
                  {isActive ? (
                    <p className="max-w-[300px] text-[16px] leading-6 text-[#696970]">
                      {step.description}
                    </p>
                  ) : (
                    <Image
                      src={step.image}
                      alt=""
                      width={90}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  )}
                </div>
                {isActive && (
                  <progress
                    className="demo-progress mt-6 block max-w-[280px]"
                    value={hasStarted ? progress : 0}
                    max={1}
                    aria-label={`${step.title} video progress`}
                  />
                )}
                <h3 className="mt-2 text-[24px] font-semibold tracking-normal text-black">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 max-w-[860px] overflow-hidden rounded-[3px] bg-[#f6f6f6] shadow-[0_22px_55px_rgba(0,0,0,0.18)]">
          {hasStarted ? (
            <video
              key={`${activeTask.label}-${activeStep}`}
              ref={videoRef}
              src={activeVideo}
              className="aspect-[16/9] w-full bg-white object-cover"
              autoPlay
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={() => setProgress(0)}
              onTimeUpdate={updateProgress}
              onEnded={handleVideoEnded}
            />
          ) : (
            <>
              <Image
                src="/assets/hero/video-placeholder.png"
                alt="Ripplica product video preview"
                width={860}
                height={484}
                className="aspect-[16/9] w-full object-cover"
              />
              <button
                type="button"
                onClick={startDemo}
                className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full border border-[#2e2e2e] bg-[#ffda67] px-8 py-3 text-[18px] font-medium text-black shadow-[5px_6px_0_rgba(0,0,0,0.35)] transition hover:-translate-y-[52%]"
              >
                <Play size={18} fill="currentColor" aria-hidden />
                Watch Ripplica in Action
              </button>
            </>
          )}
        </div>

        <div className="mx-auto mt-9 flex max-w-[860px] flex-wrap justify-center rounded-full bg-[#efefef] p-1">
          {demoTasks.map((task, index) => (
            <button
              key={task.label}
              type="button"
              onClick={() => selectTask(index)}
              className={cn(
                "min-h-11 flex-1 rounded-full px-5 text-[16px] font-semibold text-[#666] transition sm:min-w-[190px]",
                index === activeTaskIndex && "bg-white text-black shadow-sm",
              )}
            >
              {task.label}
            </button>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-[18px] leading-7 text-[#85858e]">
          {activeTask.description}
        </p>
      </Container>
    </section>
  );
}
