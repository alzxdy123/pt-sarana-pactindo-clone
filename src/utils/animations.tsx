import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: any,
  animationProps: any,
  scrollProps: any
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      // toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animFromBottomToTop = (
  target: any,
  duration: any = 0.8,
  stagger: any = 0.3
) => {
  gsap.fromTo(
    target,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: duration,
      ease: "power2.inOut",
      stagger: stagger,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animFromTopToBottom = (
  target: any,
  duration: any = 0.8,
  stagger: any = 0.3
) => {
  gsap.fromTo(
    target,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: duration,
      ease: "power2.inOut",
      stagger: stagger,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animateWithGsapTimeline = (
  timeline: any,
  rotationRef: any,
  rotationState: any,
  firstTarget: any,
  secondTarget: any,
  animationProps: any
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
