'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function HowItWorks() {
  const [activeSection, setActiveSection] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const triggerPoint = useRef<HTMLDivElement>(null);
  
  const sections = [
    {
      title: "Send Out Your Wave",
      description: "Wave is your social signal to coordinate with friends.",
      phoneImage: "/images/wavv_screen_01.png"
    },
    {
      title: "Signal Availability",
      description: "Switch your Signal on to indicate you're free to hang out today.",
      phoneImage: "/images/wavv_screen_02.png"
    },
    {
      title: "Customize Signal",
      description: "Signal what you plan to do, when you plan to do it, and who should see it.",
      phoneImage: "/images/wavv_screen_03.png"
    },
    {
      title: "See Friend's Signals",
      description: "Get a live overview of which friends are free and what they're planning today.",
      phoneImage: "/images/wavv_screen_04.png"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (triggerPoint.current && phoneContainerRef.current) {
        const trigger = triggerPoint.current.getBoundingClientRect();
        const shouldLock = trigger.top <= 0;
        
        if (isLocked !== shouldLock) {
          setIsLocked(shouldLock);
        }
      }

      // Calculate which section is visible
      const viewportMiddle = window.scrollY + (window.innerHeight / 2);
      let newActiveSection = 0;
      
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const absoluteTop = window.pageYOffset + rect.top;
          const absoluteBottom = absoluteTop + rect.height;

          if (viewportMiddle >= absoluteTop && viewportMiddle < absoluteBottom) {
            newActiveSection = index;
          }
        }
      });

      if (activeSection !== newActiveSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLocked, activeSection]);

  return (
    <section className="relative bg-black">
      {/* Trigger point for locking */}
      <div ref={triggerPoint} className="absolute h-1 w-full" />

      {/* Phone Container */}
      <div 
        ref={phoneContainerRef}
        className={`lg:block hidden w-[280px] transition-transform duration-300 ease-out
          ${isLocked 
            ? 'fixed top-1/2 -translate-y-1/2' 
            : 'absolute top-[50vh] -translate-y-1/2'
          }`}
        style={{
          right: isLocked ? 'calc(40% - 280px)' : 'calc(40% - 280px)'
        }}
      >
        <div className="relative w-[280px] h-[580px] rounded-[40px] overflow-hidden shadow-2xl">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeSection === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={section.phoneImage}
                alt={section.title}
                className="w-full h-full object-cover"
                width={280}
                height={580}
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
              ref={el => { sectionRefs.current[index] = el }}
              className="min-h-screen flex items-center p-8"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-medium text-white tracking-tight">
                  {section.title}
                </h2>
                <p className="text-white font-mono leading-relaxed">
                  {section.description}
                </p>
                
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