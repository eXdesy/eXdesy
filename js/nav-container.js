/* IMAGE SCROLLER */
window.addEventListener('load', () => {
  const photo = document.querySelector('.home-photo');
  const aboutMe = document.querySelector('.aboutMe');
  if (photo && aboutMe) {
    gsap.to(photo, {
      y: () => {
        const photoTop = photo.getBoundingClientRect().top + window.scrollY;
        const aboutMeTop = aboutMe.getBoundingClientRect().top + window.scrollY;
        const aboutMeHeight = aboutMe.offsetHeight;
        // Центр блока aboutMe минус текущая позиция фото и половина высоты фото
        const targetY = (aboutMeTop + aboutMeHeight / 2) - photoTop - photo.offsetHeight / 2.6;
        return targetY;
      },
      ease: 'none',
      scrollTrigger: {
        trigger: '.home',
        start: 'top top',
        endTrigger: aboutMe,
        end: 'top top',
        scrub: true,
      }
    });
  }
});

/* NAV MENU */
const menuToggle = $('#navMenuWrapperToggle');
const barTop = menuToggle.find('.nav-menu-wrapper-toggle-bar.top');
const barMiddle = menuToggle.find('.nav-menu-wrapper-toggle-bar.middle');
const barBottom = menuToggle.find('.nav-menu-wrapper-toggle-bar.bottom');
const bar = menuToggle.find('.nav-menu-wrapper-toggle-bar');
const overlay = document.querySelector('.nav-menu-content-overlay')

const tl = gsap.timeline({ paused: true, reversed: true });
tl
  .to([barTop, barBottom], {
    duration: 0.2,
    width: '30px',
    ease: 'power2.inOut'
  }, 0)
	.to(menuToggle, {
    duration: 0.3,
    rotate: 90,
		backgroundColor: 'transparent',
    ease: 'power2.inOut'
  }, 0.1)
  .to(barTop, {
    duration: 0.3,
    rotate: 45,
    y: 0,
    ease: 'power2.inOut'
  }, 0.1)
  .to(barMiddle, {
    duration: 0.3,
    opacity: 0,
    ease: 'power2.inOut'
  }, 0.1)
  .to(barBottom, {
    duration: 0.3,
    rotate: -45,
    y: 0,
    ease: 'power2.inOut'
  }, 0.1)
  .to(bar, {
    duration: 0.3,
    backgroundColor: 'var(--black-color)',
    ease: 'power2.out'
  }, 0.1)
	.to(overlay, {
		duration: 0.5,
		opacity: 1,
		onStart: () => {
			document.body.classList.add('nav-menu-content-overlay-scroll');
			document.body.classList.add('overlay-open');
		},
		ease: 'power2.out'
	}, 0.1)
	
  .to('.nav-menu-content', {
    duration: 0.4,
    opacity: 1,
    visibility: 'visible',
    pointerEvents: 'auto',
    color: 'var(--black-color)',
    ease: 'power2.out'
  }, 0.3)
	.to(".nav-menu-content-list li", {
		opacity: 1,
		y: 0,
		stagger: 0.1,
		duration: 0.6,
		ease: "power3.out"
	}, 0.4)
;

tl.eventCallback("onReverseComplete", () => {
	document.body.classList.remove('nav-menu-content-overlay-scroll');
	document.body.classList.remove('overlay-open');
});
menuToggle.on('click', () => {
  tl.reversed() ? tl.play() : tl.reverse();
});
$('.nav-menu-content-list li a').on('click', () => {
  if (!tl.reversed()) {
    tl.reverse();
  }
});

const themeToggleBtn = document.getElementById("temaToggle");
let isDark = true;
themeToggleBtn.addEventListener("click", () => {
  const root = document.documentElement;
  if (isDark) {
		document.body.style.backgroundImage = "url('img/bgWhite.png')";
		root.style.setProperty('--white-color', '#2d2d2d');
    root.style.setProperty('--black-color', '#e7e7e0');
    root.style.setProperty('--invert-color', 'brightness(0) invert(0)');
    themeToggleBtn.textContent = '🌙';
  } else {
		document.body.style.backgroundImage = "url('img/bg.png')";
		root.style.setProperty('--white-color', '#e7e7e0');
    root.style.setProperty('--black-color', '#2d2d2d');
    root.style.setProperty('--invert-color', 'brightness(0) invert(1)');
    themeToggleBtn.textContent = '☀️';
  }
  isDark = !isDark;
});

function scrollToTalk() {
  const el = document.getElementById('talk');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
