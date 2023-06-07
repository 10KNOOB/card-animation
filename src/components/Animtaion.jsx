export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const popUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const rotatePopUpBounce = {
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0,
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
      scale: 0.5,
    },
  },
};

//on scroll animation spring popUp animation
export const popUpSpring = {
  offscreen: {
    scale: 0.5,
  },
  onscreen: {
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0,
      damping: 5,
      stiffness: 200,
      restDelta: 0.001,
    },
  },
};

//on scroll animation fadeUp animation

export const fadeUpSpring = {
  offscreen: {
    opacity: 0,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0,
      damping: 5,
      stiffness: 200,
      restDelta: 0.001,
    },
  },
};

//on scroll animation rotatePopUpBounce animation

export const rotatePopUpBounceSpring = {
  offscreen: {
    opacity: 0,
    scale: 1,
    rotate: 360,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0,
      damping: 5,
      stiffness: 200,
      restDelta: 0.001,
    },
  },
};

// on scroll spring bounce down animation
export const bounceDownSpring = {
  offscreen: {
    y: -60,
  },
  onscreen: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0,
      damping: 5,
      stiffness: 200,
      restDelta: 0.001,
    },
  },
};

// on scroll fadeup animation

export const fadeUpScroll = {
  offscreen: {
    opacity: 0,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
