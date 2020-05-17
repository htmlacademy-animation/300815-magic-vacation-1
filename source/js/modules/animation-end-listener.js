export default () => {
  let animatedElement = document.querySelector(`.js-animation-end-listener`);
  let rulesLink = document.querySelector(`.js-rules-link`);

  animatedElement.addEventListener(`animationend`, function () {
    rulesLink.classList.add(`animate`);
  });

  rulesLink.addEventListener(`animationend`, function () {
    rulesLink.classList.remove(`animate`);
  });
};
