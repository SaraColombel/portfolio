const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
	const isOpen = menu.classList.toggle("open");
	menu.style.display = isOpen ? "flex" : "none";
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.remove("open");
		menu.style.display = "none";
	});
});

// Main title
const lines = ["Hello, I'm Sara !", "A curious mind blending tech and creativity."];

const speed = 75;
const delayBetweenLines = 1000;

async function typeLine(element, text, keepCursor = false) {
	element.classList.add("cursor");
	for (let i = 0; i < text.length; i++) {
		element.textContent += text[i];
		await new Promise((r) => setTimeout(r, speed));
	}

	if (!keepCursor) {
		element.classList.remove("cursor");
	}
}

async function startTyping() {
	const line1 = document.getElementById("line1");
	const line2 = document.getElementById("line2");

	await typeLine(line1, lines[0], true);

	await new Promise((r) => setTimeout(r, delayBetweenLines));

	line1.classList.remove("cursor");
	await typeLine(line2, lines[1], true);
}

startTyping();

const descriptions = {
	music: `
		<p>
			Music has always been a cornerstone of my life. As a violinist with the
			<strong>Petites Mains Symphoniques</strong> orchestra, I’ve had the privilege of performing
			across the world — from <strong>Shanghai</strong> to <strong>Argentina</strong> — and sharing my passion
			on national TV in <em>La France a un Incroyable Talent</em> and <em>Prodiges</em>.
		</p>

		<p>
			In <strong>2024</strong>, I was honored to perform during the
			<strong>New Year’s Concert under the Arc de Triomphe</strong>,
			a truly unforgettable moment that marked a new chapter in my musical journey.
		</p>

		<div class="music-links">
			<a href="https://www.youtube.com/watch?v=Xi3H8Vx1aS0&list=PLjP7mGuLBlsBnQMuT9cTULzH4YAncfzHT"
			target="_blank" class="btn btn-music">
			Iguazú Concert
			</a>

			<a href="https://www.youtube.com/watch?v=R64hhOyeyoA"
			target="_blank" class="btn btn-music">
			New Year Concert
			</a>

			<a href="https://www.youtube.com/watch?v=eee4-d7FUis"
			target="_blank" class="btn btn-music">
			Prodiges Performance
			</a>

			<a href="https://www.youtube.com/watch?v=vrHpz-WRiew&list=RDvrHpz-WRiew&start_radio=1&t=7190s&pp=ygUjc2hhbmdoYWkgcGV0aXRlcyBtYWlucyBzeW1waG9uaXF1ZXOgBwE%3D"
			target="_blank" class="btn btn-music">
			Shanghai Concert
			</a>
		</div>
		`,

	ai: `
		<p>
		Artificial Intelligence represents the perfect blend of logic, mathematics, and creativity.
		I’m fascinated by the idea of teaching machines to perceive, reason, and learn — not as a replacement
		for human intelligence, but as an extension of it.
		</p>

		<p>
		At <strong>Epitech</strong> and during my apprenticeship at <strong>CIMPA (Sopra Steria Group)</strong>,
		I focus on applying AI to industrial and manufacturing processes, exploring how data can enhance
		automation, efficiency, and human decision-making. From neural networks to data preprocessing,
		AI is for me a way to merge curiosity and impact.
		</p>
	`,

	printing: `
		<p>
		3D printing is where creativity meets engineering — the process of turning a digital model into
		something tangible. It’s a world that bridges imagination and physical reality.
		</p>

		<p>
		Through my <strong>Artillery Sidewinder X2 Plus</strong> printer and software like
		<strong>OpenSCAD</strong> and <strong>OrcaSlicer</strong>, I’ve developed complete workflows for
		generating custom <strong>Epitech-branded keychains</strong>. My automation scripts design,
		slice, and prepare G-code for one-command printing, merging scripting and design into a fully
		functional creation pipeline.
		</p>
	`,

	tech: `
		<p>
		Technology is my main language — the medium through which I think, create, and communicate.
		I love exploring how systems connect and evolve, from databases to full-stack architectures.
		</p>

		<p>
		My current focus lies in building efficient, scalable applications with
		<strong>React</strong>, <strong>Node.js</strong>, and <strong>PostgreSQL</strong>.
		I enjoy translating complex ideas into elegant technical solutions and experimenting with
		tools like <strong>Supabase</strong>, <strong>Docker</strong>, and <strong>Prisma</strong> to
		bring ideas to life. Technology isn’t just about code — it’s about creating something meaningful,
		intuitive, and lasting.
		</p>
	`,

	gaming: `
		<p>
		Gaming has always been my creative playground — a perfect blend of storytelling, logic, and design.
		Beyond entertainment, I see games as systems that teach problem-solving, collaboration, and perseverance.
		</p>

		<p>
		From strategy and simulation to immersive narratives, gaming fuels my understanding of user experience
		and interaction design. It’s a world where every detail matters — much like in development — and where
		innovation constantly pushes boundaries. One day, I’d love to design an interactive experience that
		merges music, AI, and storytelling into a single digital universe.
		</p>
	`,

	fitness: `
		<p>
		Fitness is my reset button — a way to channel energy, discipline, and balance into my daily life.
		It’s not just about physical progress, but also about the mental strength it builds.
		</p>

		<p>
		Whether I’m working on strength training or mobility, I treat fitness the same way I approach coding:
		with consistency, precision, and curiosity. It teaches patience, resilience, and the importance of
		continuous improvement — qualities that define both my personal and professional mindset.
		</p>
	`,
};

const items = document.querySelectorAll(".interest-item");
const descBox = document.getElementById("interest-description");

items.forEach((item) => {
	item.addEventListener("click", () => {
		items.forEach((i) => i.classList.remove("active"));
		item.classList.add("active");

		const key = item.dataset.interest;
		descBox.style.opacity = 0;
		setTimeout(() => {
			descBox.innerHTML = `<p>${descriptions[key]}</p>`;
			descBox.style.opacity = 1;
		}, 300);
	});
});
const defaultInterest = document.querySelector('.interest-item[data-interest="music"]');
if (defaultInterest) {
	defaultInterest.classList.add("active");
	descBox.innerHTML = `<p>${descriptions.music}</p>`;
}

// === PROJECT POPUP ===
const modal = document.getElementById("project-modal");
const carouselImages = document.querySelector(".carousel-images");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalTags = document.getElementById("modal-tags");
const modalLinks = document.getElementById("modal-links");
const btnPrev = document.querySelector(".carousel-btn.prev");
const btnNext = document.querySelector(".carousel-btn.next");

const projects = [
	{
		title: "Clap",
		images: ["img/Clap.png", "img/clap2.png", "img/clap3.png", "img/clap4.png"],
		description:
			"A web platform for movie and series reviews, developed during my training at ADRAR Formation. Built with PHP, MySQL, and a classic MVC architecture.",
		tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
		links: [
			{ icon: "fa-solid fa-globe", url: "https://clapencouleurs.fr/Accueil" },
			{ icon: "fa-brands fa-github", url: "https://github.com/SaraColombel/Clap.git" },
		],
	},
	{
		title: "JobBoard Platform",
		images: ["img/linkup.png", "img/linkup2.png", "img/linkup3.png", "img/linkup4.png", "img/linkup5.png", "img/linkup6.png", "img/linkup7.png"],
		description:
			"A full-stack recruitment platform allowing users and companies to connect, apply, and post offers. Built with Node.js, Supabase, and React.",
		tags: ["React", "Node.js", "PostgreSQL", "Supabase"],
		links: [{ icon: "fa-brands fa-github", url: "https://github.com/SaraColombel/linkup" }],
	},
	{
		title: "3D Keychain Generator",
		images: ["img/keychain.png", "img/keychain2.png", "img/keychain3.png", "img/keychain4.png", "img/keychain5.png"],
		description: "Automated 3D printing workflow using OpenSCAD and OrcaSlicer to generate and slice personalized Epitech keychains.",
		tags: ["OpenSCAD", "Shell", "OrcaSlicer"],
		links: [{ icon: "fa-brands fa-github", url: "https://github.com/SaraColombel/3d-keychain-generator.git" }],
	},
];

let currentImage = 0;

document.querySelectorAll(".project-card").forEach((card, index) => {
	card.addEventListener("click", () => openProjectModal(index));
});

function openProjectModal(index) {
	const project = projects[index];
	if (!project) return;

	modalTitle.textContent = project.title;
	modalDesc.textContent = project.description;

	modalTags.innerHTML = project.tags.map((t) => `<span>${t}</span>`).join("");

	// 🔹 Liens avec icônes
	modalLinks.innerHTML = project.links
		.map(
			(l) => `
      <a href="${l.url}" target="_blank" title="${l.icon.includes("globe") ? "Visit live site" : "View on GitHub"}">
        <i class="${l.icon}"></i>
      </a>`
		)
		.join("");

	// 🔹 Images
	carouselImages.innerHTML = project.images.map((img) => `<img src="${img}" alt="${project.title} image" />`).join("");

	currentImage = 0;
	updateCarousel();

	modal.classList.add("active");
}

modal.addEventListener("click", (e) => {
	if (e.target === modal) modal.classList.remove("active");
});

// === NAVIGATION CARROUSEL CIRCULAIRE ===
btnNext.addEventListener("click", () => {
	const total = carouselImages.children.length;
	currentImage = (currentImage + 1) % total;
	updateCarousel();
});

btnPrev.addEventListener("click", () => {
	const total = carouselImages.children.length;
	currentImage = (currentImage - 1 + total) % total;
	updateCarousel();
});

function updateCarousel() {
	const offset = -currentImage * 100;
	carouselImages.style.transform = `translateX(${offset}%)`;
}

items.forEach((item) => {
	item.addEventListener("click", () => {
		items.forEach((i) => i.classList.remove("active"));
		item.classList.add("active");

		const key = item.dataset.interest;
		setTimeout(() => {
			descBox.innerHTML = `<p>${descriptions[key]}</p>`;
		}, 300);

		// ✅ centre automatiquement l’item actif dans la zone scrollable
		item.scrollIntoView({
			behavior: "smooth",
			inline: "center",
			block: "nearest",
		});
	});
});
