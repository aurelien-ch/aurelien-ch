export default {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        parallax: { enable: true, force: 80, smooth: 10 },
      },
    },
    modes: {
      bubble: { distance: 100, duration: 2, opacity: 1, size: 2, speed: 3 },
      grab: { distance: 400, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 400, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    move: {
      size: true,
      attract: { enable: false, rotate: { x: 600, y: 600 } },
      enable: true,
      random: true,
      speed: 0.6,
      straight: false,
    },
    number: { density: { enable: true }, value: 60 },
    opacity: {
      value: 0.3,
    },
    size: {
      value: 1,
    },
  },
  retina_detect: true,
};
