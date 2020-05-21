import AccentTypographyBuild from './accent-typography-build';

export default () => {
  const animationTopScreenTextLine = new AccentTypographyBuild(`.js-intro-title`, 500, `active`, `transform`);
  const animationTopScreenDate = new AccentTypographyBuild(`.js-intro-date`, 500, `active`, `transform`);
  setTimeout(() => {
    animationTopScreenTextLine.runAnimation();
  }, 500);

  setTimeout(() => {
    animationTopScreenDate.runAnimation();
  }, 1500);
};
