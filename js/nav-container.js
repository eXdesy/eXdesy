/* IMAGE SCROLLER */
window.addEventListener('load', () => {
  const photo = document.querySelector('.home-photo');
  const aboutMe = document.querySelector('.aboutMe');

  if (photo && aboutMe) {
		const photoTop = photo.getBoundingClientRect().top + window.scrollY;
		const aboutMeTop = aboutMe.getBoundingClientRect().top + window.scrollY;

    gsap.to(photo, {
      y: () => {
        const aboutMeHeight = aboutMe.offsetHeight;
        const targetY = (aboutMeTop + aboutMeHeight / 2) - photoTop - photo.offsetHeight / 2.6;
        return targetY;
      },
      ease: 'none',
      scrollTrigger: {
        trigger: '.home',
        start: 'top top',
        endTrigger: aboutMe,
        end: 'top top',
				scrub: 1,
				invalidateOnRefresh: true,
			}
    });
  }
});

/* NAV MENU */
const menuToggle = $('#navMenuWrapperToggle');
const bar = menuToggle.find('.nav-menu-wrapper-toggle-bar');
const barTop = menuToggle.find('.nav-menu-wrapper-toggle-bar.top');
const barMiddle = menuToggle.find('.nav-menu-wrapper-toggle-bar.middle');
const barBottom = menuToggle.find('.nav-menu-wrapper-toggle-bar.bottom');

const navMenuContent = $('.nav-menu-content')
const navMenuContentList = navMenuContent.find('.nav-menu-content-list li')

const navMenuContentOverlay = document.querySelector('.nav-menu-content-overlay')

const tl = gsap.timeline({ paused: true, reversed: true });
tl
	// Немного сужает верхнюю и нижнюю линии
	.to([barTop, barBottom], { width: '30px', ease: 'power2.out' }, 0)
	// Поворачивает всю иконку меню на 90° и убирает фон
	.to(menuToggle, { rotate: 90, backgroundColor: 'transparent', ease: 'power2.out' }, 0.1)
	// Верхняя линия поворачивается на 45° и двигается в центр — часть крестика
	.to(barTop, { rotate: 45, y: 0, ease: 'power2.out' }, 0.1)
	// Средняя линия просто исчезает — чтобы освободить место для крестика
	.to(barMiddle, { opacity: 0, ease: 'power2.out' }, 0.1)
	// Нижняя линия поворачивается на -45° — вторая часть крестика
	.to(barBottom, { rotate: -45, y: 0, ease: 'power2.out' }, 0.1)
	// Задаётся чёрный цвет для всех линий
	.to(bar, { backgroundColor: 'var(--black-color)', ease: 'power2.out' }, 0.1)
	
	// Отображается всё меню: делается видимым, активным, с чёрным текстом
  .to(navMenuContent, {
    opacity: 1,
    visibility: 'visible',
    pointerEvents: 'auto',
    color: 'var(--black-color)',
    ease: 'power2.out'
  }, 0.3)
	// Элементы списка меню появляются с поочерёдной анимацией (stagger).
	.to(navMenuContentList, {
		opacity: 1,
		y: 0,
		stagger: 0.1,
		ease: "power3.out"
	}, 0.4)

	// Показывается затемнённый фон, и добавляются классы на <body> для ограничения прокрутки
	.to(navMenuContentOverlay, {
		opacity: 1,
		onStart: () => {
			document.body.classList.add('nav-menu-content-overlay-scroll');
			document.body.classList.add('overlay-open');
		},
		ease: 'power2.out'
	}, 0.1)
;

// Когда меню закрывается, удаляются классы у <body>, чтобы снова разрешить прокрутку
tl.eventCallback("onReverseComplete", () => {
	document.body.classList.remove('nav-menu-content-overlay-scroll');
	document.body.classList.remove('overlay-open');
});
// При клике на бургер: если анимация в начальном состоянии — запускаем, иначе — обратно
menuToggle.on('click', () => {
  tl.reversed() ? tl.play() : tl.reverse();
});
// При клике на ссылку в меню — закрываем меню
$('.nav-menu-content-list li a, .nav-menu-wrapper-button').on('click', () => {
  if (!tl.reversed()) {
    tl.reverse();
  }
});

/* THEME CHANGER */
const themeToggleBtn = document.getElementById("temaToggle");
let isDark = true;
themeToggleBtn.addEventListener("click", () => {
  const root = document.documentElement;
  if (isDark) {
		document.body.style.backgroundImage = "url('img/bgWhite.jpg')";
		root.style.setProperty('--white-color', '#2d2d2d');
    root.style.setProperty('--black-color', '#e7e7e0');
    root.style.setProperty('--invert-color', 'brightness(0) invert(0)');
    themeToggleBtn.textContent = '🌙';
  } else {
		document.body.style.backgroundImage = "url('img/bgBlack.jpg')";
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

document.getElementById("talkForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = this.email.value.trim();
  const messageInput = this.message.value.trim();

  const subject = encodeURIComponent("LETS TALK ;)");
  const body = encodeURIComponent(`Email: ${emailInput}\n\nMessage:\n${messageInput}`);
  const to = "exdesy.design@email.com";

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
