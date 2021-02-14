const title = gsap.timeline();
const titleOut = gsap.timeline();
var titleOn = false;

const btn = document.getElementById('close-title').addEventListener('click', () => {
    titleOn ? title.play() : titleOut.play();
    titleOn = !titleOn;
    console.log('titleOn: ', titleOn)
});

// Outro tranition for the title
titleOut
    .to('.title-name', { duration: .3, x: -60, ease: 'bounce.out' })
    .to('.title-name', { duration: .4, rotation: 90, transformOrigin: "left", ease: 'bounce.out' }, '-=.2')
    .to('.title-name', { duration: .3, opacity: 0, ease: 'power1.inOut' }, '-=.2')
    .to('.hl4', { duration: .3, x: -360, ease: 'bounce.out' }, '-=.4')
    .to('.hl4', { duration: .4, rotation: 90, transformOrigin: "left", ease: 'bounce.out' }, '-=.4')
    .to('.hl4', { duration: .3, opacity: 0, ease: 'power1.inOut' }, '-=.2')
    .to('.hl3', { duration: .3, x: -260, ease: 'bounce.out' }, '-=.6')
    .to('.hl3', { duration: .4, rotation: 90, transformOrigin: "left", ease: 'bounce.out' }, '-=.4')
    .to('.hl3', { duration: .3, opacity: 0, ease: 'power1.inOut' }, '-=.2')
    .to('.hl2', { duration: .3, x: -160, ease: 'bounce.out' }, '-=.8')
    .to('.hl2', { duration: .4, rotation: 90, transformOrigin: "left", ease: 'bounce.out' }, '-=.4')
    .to('.hl2', { duration: .3, opacity: 0, ease: 'power1.inOut' }, '-=.2')
    .to('.hl1', { duration: .3, x: -60, ease: 'bounce.out' }, '-=1')
    .to('.hl1', { duration: .4, rotation: 90, transformOrigin: "left", ease: 'bounce.out' }, '-=.4')
    .to('.hl1', { duration: .3, opacity: 0, ease: 'power1.inOut', }, '-=.2')
titleOut.pause();

// intro tranition for the title
title
    .from('.bogs', { duration: 1, x: 100, y: 100, opacity: 0, ease: 'power2.out' })
    .from('.title-name', { duration: .5, x: 500, opacity: 0, ease: 'back.in' }, '-=.5')
    .to('.title-name', { duration: .2, rotation: -7, scaleX: .96, transformOrigin: "left", ease: 'back.inOut' }, '-=.08')
    .to('.title-name', { duration: .2, rotation: 5, scaleX: 1.01, transformOrigin: "left", ease: 'power2.inOut' })
    .to('.title-name', { duration: .1, rotation: 0, scaleX: 1, transformOrigin: "left", ease: 'power2.in' })
    .from('.hl', { duration: .6, opacity: 0, scaleY: 0, transformOrigin: "left", ease: 'power1.out', stagger: .1, })