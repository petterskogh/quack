export const updateViewportHeightVariable = () => {
  setViewportHeightCSSVariable();
  window.addEventListener('resize', setViewportHeightCSSVariable);
}

const setViewportHeightCSSVariable = () => {
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};