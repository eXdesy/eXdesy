/* ABOUT ME CONTAINER LOADER */
async function loadAboutMeFromXML(url) {
	const response = await fetch(url);
	const xmlText = await response.text();
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(xmlText, "application/xml");
	const aboutMe = xmlDoc.querySelectorAll("about");

	aboutMe.forEach(about => {
		const description1 = about.querySelector("description1").textContent;
		const description2 = about.querySelector("description2").textContent;
		const description3 = about.querySelector("description3").textContent;
		createAboutMeBlock(description1, description2, description3);
	});
}
function createAboutMeBlock(description1, description2, description3) {
	/* aboutMe-content
	<div class="aboutMe-content">
		<p>TEXT 1</p>
		<p>TEXT 2</p>
		<p>TEXT 3</p>
	</div>
	*/
	let aboutMeContentDiv = document.querySelector(".aboutMe-content");
	const p1 = document.createElement("p");
	p1.textContent = description1;
	const p2 = document.createElement("p");
	p2.textContent = description2;
	const p3 = document.createElement("p");
	p3.textContent = description3;

	aboutMeContentDiv.appendChild(p1);
	aboutMeContentDiv.appendChild(p2);
	aboutMeContentDiv.appendChild(p3);
}
loadAboutMeFromXML("xml/aboutMe.xml");

/* LOGO SCLIDER */
function createLogoSlider() {
	const footer = document.querySelector(".logos");
	const slider = document.createElement("div");
	slider.className = "logos-slider";
	const track = document.createElement("div");
	track.className = "logos-track";
	const logos = [
		"angular.svg",
		"docker.svg",
		"flutterio.svg",
		"adobe.svg",
		"figma.svg",
		"java.svg",
		"javascript.svg",
		"mysql.svg",
		"nodejs.svg",
		"python.svg",
		"sqlite.svg",
		"unity.svg",
		"git.svg",
		"github.svg"
	];
	
	const fullLogos = [...logos, ...logos];
	fullLogos.forEach(file => {
		const img = document.createElement("img");
		img.src = "img/logo/" + file;
		img.alt = file.replace(/\..+$/, "");
		track.appendChild(img);
	});
	slider.appendChild(track);
	footer.appendChild(slider);
}
createLogoSlider();

/* AWARDS CONTAINER LOADER */
async function loadAwardsStudiesFromXML(url) {
	const response = await fetch(url);
	const xmlText = await response.text();
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(xmlText, "application/xml");
	const awardsStudies = xmlDoc.querySelectorAll("awardStudie");

	awardsStudies.forEach(awardStudie => {
		const title = awardStudie.querySelector("title").textContent;
		const description = awardStudie.querySelector("description").textContent;
		const link = awardStudie.querySelector("link").textContent;
		createAwardsStudiesBlock(title, description, link);
	});
}
function createAwardsStudiesBlock(title, description, link) {
	/* awards-content
	<div class="awards-content">
		<div class="awards-content-description">
			<div class="awards-content-description-text">
				<h2>TITLE</h2>
				<p>DESCRIPTION</p>
			</div>
			<a href="" class="awards-content-description-button">↗</a>
		</div>
	</div>
	*/
	let worksContentDiv = document.querySelector(".awards-content");
	const textDiv = document.createElement("div");
	textDiv.className = "awards-content-description";
	const descDiv = document.createElement("div");
	descDiv.className = "awards-content-description-text";
	const h2 = document.createElement("h2");
	h2.textContent = title;
	const p = document.createElement("p");
	p.textContent = description;
	const button = document.createElement("button");
	button.className = "awards-content-description-button";
	button.textContent = "↗";
	button.onclick = () => {
		window.open(link);
	};

	descDiv.appendChild(h2);
	descDiv.appendChild(p);
	textDiv.appendChild(descDiv);
	textDiv.appendChild(button);
	worksContentDiv.appendChild(textDiv);
}
loadAwardsStudiesFromXML("xml/awardsStudies.xml");

/* WORK CONTAINER LOADER */
async function loadWorksFromXML(url) {
	const response = await fetch(url);
	const xmlText = await response.text();
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(xmlText, "application/xml");
	const works = xmlDoc.querySelectorAll("work");

	works.forEach(work => {
		const title = work.querySelector("title").textContent;
		const description = work.querySelector("description").textContent;
		const link = work.querySelector("link").textContent;
		const photo = work.querySelector("photo").textContent;
		createWorkBlock(title, description, link, photo);
	});
}
function createWorkBlock(title, description, link, photo) {
	/* works-content
	<div class="works-content">
		<div class=-works-content-photo"></div>
		<div class="works-content-description">
			<div class="works-content-description-text">
				<h2>TITLE</h2>
				<p>DESCRIPTION</p>
			</div>
			<button class="works-content-description-button">→</button>
		</div>
	</div>
	*/
	let worksContentDiv = document.querySelector(".works-content");
	const photoDiv = document.createElement("div");
	photoDiv.className = "works-content-photo";
	if (photo) {
		photoDiv.style.backgroundImage = `url('${photo}')`;
	}
	const textDiv = document.createElement("div");
	textDiv.className = "works-content-description";
	const descDiv = document.createElement("div");
	descDiv.className = "works-content-description-text";
	const h2 = document.createElement("h2");
	h2.textContent = title;
	const p = document.createElement("p");
	p.textContent = description;
	const button = document.createElement("button");
	button.className = "works-content-description-button";
	button.textContent = "↗";
	button.onclick = () => {
		window.open(link);
	};

	descDiv.appendChild(h2);
	descDiv.appendChild(p);
	textDiv.appendChild(descDiv);
	textDiv.appendChild(button);
	worksContentDiv.appendChild(photoDiv);
	worksContentDiv.appendChild(textDiv);
}
loadWorksFromXML("xml/works.xml");

/* INSIGHTS CONTAINER LOADER */
async function loadInsightsFromXML(url) {
	const response = await fetch(url);
	const xmlText = await response.text();
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(xmlText, "application/xml");
	const insights = xmlDoc.querySelectorAll("insight");

	insights.forEach(insight => {
		const title = insight.querySelector("title").textContent;
		const description = insight.querySelector("description").textContent;
		const link = insight.querySelector("link").textContent;
		const photo = insight.querySelector("photo").textContent;
		createInsightsBlock(title, description, link, photo);
	});
}
function createInsightsBlock(title, description, link, photo) {
	/* insights-content
	<div class="insights-content">
		<div class="insights-content-description">
			<div class="insights-content-description-photo"></div>
			<div class="insights-content-description-text">
				<h2>TITLE</h2>
				<p>DESCRIPTION</p>
			</div>
		</div>
	</div>
	*/
	let insightsContentDiv = document.querySelector(".insights-content");
	const descDiv = document.createElement("div");
	descDiv.className = "insights-content-description";
	const photoDiv = document.createElement("div");
	photoDiv.className = "insights-content-description-photo";
	if (photo) {
		photoDiv.style.backgroundImage = `url('${photo}')`;
	}
	const textDiv = document.createElement("div");
	textDiv.className = "insights-content-description-text";
	const h2 = document.createElement("h2");
	h2.textContent = title;
	const p = document.createElement("p");
	p.textContent = description;
	
	textDiv.appendChild(h2);
	textDiv.appendChild(p);
	descDiv.appendChild(photoDiv);
	descDiv.appendChild(textDiv);
	insightsContentDiv.appendChild(descDiv);
}
loadInsightsFromXML("xml/insights.xml");

/* OPINIONS CONTAINER LOADER */
let currentIndex = 2;
let opinions = [];
const quoteEl = document.getElementById("opinionQuote");
const slider = document.getElementById("opinionsSlider");

async function loadOpinionsFromXML(url) {
  const response = await fetch(url);
  const xmlText = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  const opinionNodes = xmlDoc.querySelectorAll("opinion");

  opinions = Array.from(opinionNodes).map(opinion => ({
    name: opinion.querySelector("name").textContent,
    role: opinion.querySelector("role").textContent,
    photo: opinion.querySelector("photo").textContent,
    quote: opinion.querySelector("quote").textContent,
		link: opinion.querySelector("link").textContent
  }));

  updateQuote(opinions[currentIndex].quote);
  createOpinionsBlock();
}
function createOpinionsBlock() {
  slider.innerHTML = "";
  const visibleIndexes = [
    (currentIndex - 1 + opinions.length) % opinions.length,
    currentIndex,
    (currentIndex + 1) % opinions.length
  ];

  visibleIndexes.forEach(i => {
    const { name, role, photo, quote, link } = opinions[i];
    const div = document.createElement("div");
    div.className = "opinion-card" + (i === currentIndex ? " active" : "");
    div.innerHTML = `
      <img src="${photo}" alt="${name}">
      <h2>${name}</h2>
      <p>${role}</p>
    `;

    div.addEventListener("click", () => {
      if (i === currentIndex) {
        // клик по активному → открыть LinkedIn
        window.open(link, name);
      } else {
        // клик по боковому → активировать
        currentIndex = i;
        updateQuote(quote);
        createOpinionsBlock();
      }
    });

    slider.appendChild(div);
  });
}
function updateQuote(quote) {
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    quoteEl.textContent = quote || "";
    quoteEl.style.opacity = 1;
  }, 200);
}
loadOpinionsFromXML("xml/opinions.xml");
