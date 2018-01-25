"use strict";

const $ = require('jquery');
const hamburgerInit = require('./modules/hamburger');
const welcome = require('./modules/welcome');
const googleMap = require('./modules/map');
const skills = require('./modules/skills');
const fillSlider = require('./modules/slider');
const transition = require('./modules/transition');
const blurInit = require('./modules/blur');
const parallax = require('./modules/parallax');
const parallaxIntro = require('./modules/parallax-intro');
const preloaderInit = require('./modules/preloader');
const articlesAnimate = require('./modules/articles');
const adminTabs = require('./modules/admin');
const closeMessage = require('./modules/close');
const formSubmit = require('./modules/form');

if (document.images.length > 0) {
    preloaderInit();
    
} else {
    document.getElementById('js-preloader').classList.add('done');
	document.body.style.overflow = 'auto';
}

if (document.getElementsByClassName('js-hamburger').length > 0) {
    hamburgerInit();
}

/*if (document.getElementsByClassName('map').length > 0) {
    googleMap();
}*/

if (document.getElementsByClassName('js-slider').length > 0) {
    fillSlider();
}

if (document.getElementsByClassName('js-circle').length > 0) {
    skills();
}

if (document.getElementsByClassName('js-hero-btn').length > 0) {
    transition();
}

if (document.getElementsByClassName('js-blur-bg').length > 0) {
    blurInit();
}

if (document.getElementsByClassName('js-bg-hero').length > 0) {
    parallax();
}

if (document.getElementsByClassName('js-parallax').length > 0) {
    parallaxIntro();
}

if (document.getElementsByClassName('js-article').length > 0) {
    articlesAnimate();
}

if (document.getElementsByClassName('js-tab').length > 0) {
    adminTabs();
}

if (document.getElementsByClassName('js-contact-status').length > 0) {
    closeMessage();
}

if (document.getElementsByClassName('js-form').length > 0) {
    formSubmit();
}

