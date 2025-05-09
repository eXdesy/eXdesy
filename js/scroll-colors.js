let items;
let scrollerScrub;
let dimmerScrub;
let chromaEntry;
let chromaExit;

/* SCROLL COLORS */
document.documentElement.dataset.snap = true;
document.documentElement.dataset.animate = true;
const startHue = gsap.utils.random(0, 100, 1);
const endHue = gsap.utils.random(900, 1000, 1);

if (!CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
  gsap.registerPlugin(ScrollTrigger);
  items = gsap.utils.toArray('.scroll ul li');
  scrollArea = document.querySelector('.scroll');

	gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });
  document.documentElement.style.setProperty('--start', startHue);
  document.documentElement.style.setProperty('--hue', startHue);
  document.documentElement.style.setProperty('--end', endHue);

  const dimmer = gsap.timeline()
    .to(items.slice(1), {
      opacity: 1,
      stagger: 0.5,
    })
    .to(
      items.slice(0, items.length - 1),
      {
        opacity: 0.2,
        stagger: 0.5,
      },
      0
    );

  dimmerScrub = ScrollTrigger.create({
    trigger: scrollArea,
    start: 'top center',
    end: 'bottom center',
    animation: dimmer,
    scrub: 0.2,
  });

  const scroller = gsap.timeline().fromTo(
    scrollArea,
    { '--hue': config.start },
    { '--hue': config.end, ease: 'none' }
  );

  scrollerScrub = ScrollTrigger.create({
    trigger: scrollArea,
    start: 'top center',
    end: 'bottom center',
    animation: scroller,
    scrub: 0.2,
  });

  chromaEntry = gsap.fromTo(
    scrollArea,
    { '--chroma': 0 },
    {
      '--chroma': 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: scrollArea,
        start: 'top center+=40',
        end: 'top center',
        scrub: 0.2,
      },
    }
  );

  chromaExit = gsap.fromTo(
    scrollArea,
    { '--chroma': 0.3 },
    {
      '--chroma': 0,
      ease: 'none',
      scrollTrigger: {
        trigger: scrollArea,
        start: 'bottom center',
        end: 'bottom center-=40',
        scrub: 0.2,
      },
    }
  );
}