// modules
import loadListener from './modules/load-listener.js';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll.js';
import animationEndListener from './modules/animation-end-listener.js';
import typographyAnimations from './modules/typography-animations.js';

// init modules
loadListener();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
animationEndListener();
typographyAnimations();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
