import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

export const reveal = () => {
  const t1 = gsap.timeline({
    onComplete: () => {
      console.log("completed");
    },
  });
  t1.to(".follow", {
    width: "100%",
    duration: 2.5,
    delay: 1,
    ease: Expo.easeInOut,
  })
    .to("hide", {
      opacity: 0,
      duration: 0.3,
    })
    .to(".hide", {
      display: "none",
      duration: 0.3,
    })
    .to(".follow", {
      height: "100%",
      delay: 0.5,
      ease: Expo.easeInOut,
    })
    .to(".contentQuote", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 0.7,
    })
    .to(".title-lines", {
      display: "block",
      duration: 0.1,
    })
    .to(".title-lines", {
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: Expo.easeInOut,
    })
    .to(".appContainer", {
      x: window.innerWidth,
      delay: 1.5,
      ease: "power1.inOut",
      onComplete: () => gsap.set(".appContainer", { display: "none" }),
    });
};
