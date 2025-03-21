"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function HowItWorks() {
  const [activeSection, setActiveSection] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const triggerPoint = useRef<HTMLDivElement>(null);

  const sections = [
    {
      title: "Link up, offline",
      description:
        "Stay in the loop with friends without being glued to your phone.",
      phoneImage: "/images/wavv_screen_01.png",
    },
    {
      title: "Send out your wave",
      description: "Wave is your social signal to coordinate with friends.",
      phoneImage: "/images/wavv_screen_02.png",
    },
    {
      title: "Customize Status",
      description: "Broadcast plan, when, and who you want to notify.",
      phoneImage: "/images/wavv_screen_03.png",
    },
    {
      title: "See who's coming",
      description:
        "Switch your Signal on to indicate you're free to hang out today.",
      phoneImage: "/images/wavv_screen_04.png",
    },
    {
      title: "See friends' waves",
      description:
        "Get a live overview of which friends are free and what they're planning today.",
      phoneImage: "/images/wavv_screen_05.png",
    },
  ];
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (triggerPoint.current && phoneContainerRef.current) {
            const trigger = triggerPoint.current.getBoundingClientRect();
            const lastSection = sectionRefs.current[sections.length - 1];
            const lastSectionRect = lastSection?.getBoundingClientRect();

            const shouldLock = trigger.top <= 0;
            const shouldUnlock =
              (lastSectionRect?.bottom ?? 0) <= window.innerHeight;

            if (!shouldUnlock && isLocked !== shouldLock) {
              setIsLocked(shouldLock);
            } else if (shouldUnlock) {
              setIsLocked(false);
            }
          }

          // Determine which section is active
          const viewportMiddle = window.scrollY + window.innerHeight / 2;
          let newActiveSection = 0;

          sectionRefs.current.forEach((section, index) => {
            if (section) {
              const rect = section.getBoundingClientRect();
              const absoluteTop = window.pageYOffset + rect.top;
              const absoluteBottom = absoluteTop + rect.height;

              if (
                viewportMiddle >= absoluteTop &&
                viewportMiddle < absoluteBottom
              ) {
                newActiveSection = index;
              }
            }
          });

          if (activeSection !== newActiveSection) {
            setActiveSection(newActiveSection);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLocked, activeSection, sections.length]);

  return (
    <section className="relative bg-black">
      {/* Trigger point for locking */}
      <div ref={triggerPoint} className="absolute h-1 w-full" />

      {/* Phone Container */}
      <div
        ref={phoneContainerRef}
        className={`lg:block hidden w-[280px] transition-transform duration-300 ease-out
          ${
            isLocked
              ? "fixed top-1/2 -translate-y-1/2"
              : "absolute top-[50vh] -translate-y-1/2"
          }`}
        style={{
          right: isLocked ? "calc(40% - 280px)" : "calc(40% - 280px)",
        }}
      >
        <div className="relative w-[324.38px] h-[702px] rounded-[33.27px] overflow-hidden shadow-2xl">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeSection === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={section.phoneImage}
                alt={section.title}
                className="w-full h-full object-cover"
                width={324.38}
                height={702}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto">
        <div className="lg:w-[35%] lg:ml-[20%]">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen flex items-center p-8"
            >
              <div className="space-y-2">
                <div className="flex flex-col gap-5 leading-7 text-white">
                  <h2 className="text-5xl font-anton tracking-tight">
                    {section.title}
                  </h2>
                  <p className="font-mono text-lg">{section.description}</p>
                </div>

                {/* Mobile-only image */}
                <div className="lg:hidden mt-8 pt-16">
                  <div className="rounded-[40px] overflow-hidden w-[280px] mx-auto">
                    <Image
                      src={section.phoneImage}
                      alt={section.title}
                      className="w-full"
                      width={280}
                      height={580}
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
