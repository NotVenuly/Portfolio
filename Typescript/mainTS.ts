interface ProjectItem {
    title: string;
    description: string;
    link: string;
    tags: string[];
    highlight: string;
    isNew: boolean;
}

interface ProjectGroup {
    id: string;
    label: string;
    description: string;
    projects: ProjectItem[];
}

interface PreviewItem {
    title: string;
    description: string;
    link?: string;
    articleLink?: string;
}

interface PreviewSection {
    id: string;
    label: string;
    title: string;
    items: PreviewItem[];
}

const previewSections: PreviewSection[] = [
    {
        id: "work",
        label: "All of my ICT work experience and what they included",
        title: "Work experience",
        items: [
            {
                title: "Mandatory Trainings OY || Software Developer",
                description: `My latest internship was completed with Mandatory Trainings OY, 
                where I worked as a software developer along my co worker to continue the development of a prototype training software. 
                The software was a training simulator for aircraft marshalls in which they can wave the sticks to guide a landing plane.
                Mine and my co workers task was to continue developing the prototype software especially controlling what the sticks do and fixing bugs.
                The software was made using Unity and C# as a programming language. Me and my co-worker used Github version control, to stay on track of our development.  

                You can read more about the company by clicking the link `,
                link: "https://mandatorytrainings.com/"
            },
            {
                title: "Illusia RY/Odysseus || Junior programmer",
                description:`I had my first internship at Odysseus LARP. I worked on a core puzzle for engineers made in unity with 2 of my classmates. 
                In our puzzle you had to clean the coolant pipes of any residue and/or other trash using 2 terminals. 
                On the first terminal a person controls a robot using my made ingame terminal, 
                and on the other a person trying to manage cooling of the robot while telling the person controlling the robot where to go. 
                My part of the puzzle was to make and manage the control terminal. 
                The skills I required to do my part of the puzzle required alot of math and logic for the positions of the text as well as optimizing the game, 
                basic game development knowledge was also needed for the overall feel of the puzzle.
                You can find an article that talks about the engineer experience at Odysseus which also mentions and compliments our task here.`,
                link: "https://www.odysseuslarp.com/",
                articleLink: "https://criticalpathsite.wordpress.com/2024/09/02/odysseus-2024-a-retrospective/"
            }
        ],
    },
    {
        id: "Education",
        label: "All of my education and specific moments and items that stand out",
        title: "Education",
        items: [
            {
                title: "Business College Helsinki",
                description: `I studied ICT vocational studies in Business College Helsinki, with game development.
                My studies after peruskoulu was done with a double degree meaning I do Vocational school(Ammattikoulu) along side upper secondary school (Lukio).
                I sped up my vocational school by a year, by doing projects faster and more efficently than expected, this left me with more time to study for extended math(pitkä matematiikka)`
            },
            {
                title: "Töölön yhteislukio",
                description: `I did upper secondary studies(lukio) along side my game development studies. In my upper secondary studies I replaced normal short(lyhyt matematiikka)
                with extended math so that in the future I can go study Automation engineering at Aalto universit, which requires a C from extended math matriculation exams.
                In the future I will study physics at Töölö, which is also required.`
            },
            {
                title: "Lehtikuusen Peruskoulu",
                description: `My basic studies were mostly normal aside from the fact that I got a stipendi from techinal work (tekninen käsityö) as well as graduating in a class that specializes in mathematics`
            }
        ],
    },
    {
        id: "skills",
        label: "Skills I consider to be my best traits",
        title: "Skills",
        items: [
            {
                title: "Mathematics",
                description: "I love working on mathematically complex problems especially if they require logical problem solving"
            },
            {
                title: "C#/Unity",
                description: "My education at Business College Helsinki consisted of mostly game development in Unity, which makes this area the area I'm most familiar in"
            },
            {
                title: "C/C++",
                description: "I've used C and C++ for many of my own projects that require faster and/or more precise code"
            },
            {
                title: "GOLANG",
                description: "I recently took up learning GOLANG"
            },
            {
                title: "Game development",
                description: "I've studied game development for 3 years and I'm about to graduate with close to the highest marks"
            },
            {
                title: "Algorithms",
                description: "I love looking and working on algorithms, because it ties well into my passion for mathematics"
            },
            {
                title: "Python",
                description: "Simpler and smaller projects of mine I often do in python, because it's easier"
            },
            {
                title: "SQL",
                description: "I've worked with SQL on many of my projects such as Flesh And Flame my last project at Business College Helsinki"
            },
        ],
    },
];

const projectGroups = [
    {
        id: "c-cpp",
        label: "C/C++",
        description: "Old projects fading from the top while fading out until they no longer visible.",
        projects: [
            {
                title: "Physics Prototype",
                description: "A responsive C++ demo that tracks motion, collision logic, and game feel.",
                link: "../OtherCode/C-Cpp/project.cpp",
                tags: ["Game systems", "Native", "Performance"],
                highlight: "Launch a native gameplay prototype.",
                isNew: false,
            },
            {
                title: "Render Tool",
                description: "A small C++ renderer helper for debugging shader passes and draw order.",
                link: "../OtherCode/C-Cpp/project.cpp",
                tags: ["Graphics", "Tools", "Debug"],
                highlight: "Used to preview rendering layers quickly.",
                isNew: true,
            },
            {
                title: "Gameplay AI",
                description: "A C++ AI system sample for decision trees and movement logic.",
                link: "../OtherCode/C-Cpp/project.cpp",
                tags: ["AI", "Game logic", "Systems"],
                highlight: "Designed for robust enemy behavior.",
                isNew: false,
            },
        ],
    },
    {
        id: "python",
        label: "Python",
        description: "Project names fade into view then are easy to explore through the grid.",
        projects: [
            {
                title: "Build pipeline script",
                description: "A Python automation tool for asset importing and build validation.",
                link: "../OtherCode/Python/project_generator.py",
                tags: ["Automation", "Tools", "Python"],
                highlight: "Fast editing and repeatable pipeline generation.",
                isNew: true,
            },
            {
                title: "Gameplay simulator",
                description: "A Python prototype for tuning combat flow and enemy spawn timing.",
                link: "../OtherCode/Python/project_generator.py",
                tags: ["Simulation", "Tuning", "Prototype"],
                highlight: "Simulation tuned for quick iteration.",
                isNew: false,
            },
            {
                title: "Analytics exporter",
                description: "A data export utility for gameplay metrics and player sessions.",
                link: "../OtherCode/Python/project_generator.py",
                tags: ["Data", "Export", "Metrics"],
                highlight: "Collects session data for fast review.",
                isNew: false,
            },
        ],
    },
    {
        id: "csharp",
        label: "C#",
        description: "Currently selected language bolded and raised slightly above the other languages.",
        projects: [
            {
                title: "Tool window demo",
                description: "A modular C# editor tool that adapts to different game workflows.",
                link: "../OtherCode/CSharp/Project.cs",
                tags: ["Editor tool", "Unity", "C#"],
                highlight: "Designed to improve workflow with a clean UI.",
                isNew: false,
            },
            {
                title: "Game service",
                description: "A C# backend sample for matchmaking and player metrics.",
                link: "../OtherCode/CSharp/Project.cs",
                tags: ["Network", "Services", "Backend"],
                highlight: "Built to support multiplayer systems.",
                isNew: true,
            },
            {
                title: "Input handler",
                description: "A reusable C# component for player controls and action mapping.",
                link: "../OtherCode/CSharp/Project.cs",
                tags: ["Controls", "Input", "Component"],
                highlight: "A strong base for consistent input handling.",
                isNew: false,
            },
        ],
    },
    {
        id: "go",
        label: "GO",
        description: "New projects fading in from the bottom of the screen to the top of the view.",
        projects: [
            {
                title: "Build server",
                description: "A lightweight Go server for remote asset processing and reports.",
                link: "../OtherCode/Go/project.go",
                tags: ["Server", "Go", "Toolchain"],
                highlight: "Optimized for fast iteration and small deployments.",
                isNew: true,
            },
            {
                title: "HTTP logger",
                description: "A Go service that collects build logs and stores metadata.",
                link: "../OtherCode/Go/project.go",
                tags: ["Logging", "API", "Service"],
                highlight: "Built for reliable log collection.",
                isNew: false,
            },
            {
                title: "CLI helper",
                description: "A command-line Go utility for project scaffolding and preview builds.",
                link: "../OtherCode/Go/project.go",
                tags: ["CLI", "Tool", "Automation"],
                highlight: "Scaffolds new projects quickly.",
                isNew: false,
            },
        ],
    },
];

const projectsGrid = document.getElementById("projectsGrid") as HTMLElement | null;
const languageDescription = document.getElementById("languageDescription") as HTMLElement | null;
const languageButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".language-tab"));
const previewButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".preview-tab"));
const previewCanvas = document.getElementById("previewCanvas") as HTMLElement | null;
let activePreviewId = "";
let currentPreviewCard: HTMLElement | null = null;

function renderPreviewCard(sectionId: string) {
    const section = previewSections.find((entry) => entry.id === sectionId);
    if (!section) {
        return "";
    }
    const bodyContent = section.items
        ? `<ul class="preview-features">${section.items.map((item) => {
            const titleHtml = item.link
                ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="preview-feature-title">${item.title}</a>`
                : `<strong class="preview-feature-title">${item.title}</strong>`;
            const articleHtml = item.articleLink
                ? `<a href="${item.articleLink}" target="_blank" rel="noopener noreferrer" class="preview-feature-article">Read related article</a>`
                : "";
            return `<li>${titleHtml}<span>${item.description}</span>${articleHtml}</li>`;
        }).join("")}</ul>`
        : `<p>${section.items}</p>`;
    return `
        <div class="preview-card-content">
            <p class="mini-label">${section.label}</p>
            <h2>${section.title}</h2>
            ${bodyContent}
        </div>
    `;
}

function getPreviewIndex(sectionId: string) {
    return previewSections.findIndex((section) => section.id === sectionId);
}

function transitionPreview(newPreviewId: string) {
    if (!previewCanvas || newPreviewId === activePreviewId) {
        return;
    }

    const oldIndex = getPreviewIndex(activePreviewId);
    const newIndex = getPreviewIndex(newPreviewId);
    const direction = newIndex > oldIndex ? "right" : "left";

    if (!currentPreviewCard) {
        const card = document.createElement("article");
        card.className = "preview-card";
        card.innerHTML = renderPreviewCard(newPreviewId);
        previewCanvas.innerHTML = "";
        previewCanvas.appendChild(card);
        currentPreviewCard = card;
    } else {
        const outgoingCard = currentPreviewCard;
        outgoingCard.classList.remove("slide-in-from-right", "slide-in-from-left", "slide-out-left", "slide-out-right");
        outgoingCard.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");
        outgoingCard.addEventListener(
            "animationend",
            () => {
                outgoingCard.classList.remove("slide-out-left", "slide-out-right");
                outgoingCard.innerHTML = renderPreviewCard(newPreviewId);
                outgoingCard.classList.add(`slide-in-from-${direction}`);
                outgoingCard.addEventListener(
                    "animationend",
                    () => {
                        outgoingCard.classList.remove(`slide-in-from-${direction}`);
                    },
                    { once: true }
                );
            },
            { once: true }
        );
    }

    activePreviewId = newPreviewId;
    previewButtons.forEach((button) => {
        const isActive = button.dataset.preview === newPreviewId;
        button.classList.toggle("active", isActive);
    });
}

function renderProjectCards(group: ProjectGroup) {
    if (!projectsGrid) {
        return;
    }

    projectsGrid.innerHTML = "";
    group.projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-card-top">
                <span class="project-title">${project.title}</span>
                ${project.isNew ? "<span class=\"project-badge\">New</span>" : ""}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <span>${project.highlight}</span>
            </div>
            <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">Open ${group.label} file</a>
        `;
        projectsGrid.appendChild(card);
    });
}

function setActiveLanguage(languageId: string) {
    languageButtons.forEach((button) => {
        const isActive = button.dataset.language === languageId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", `${isActive}`);
    });

    const group = projectGroups.find((entry) => entry.id === languageId);
    if (!group || !projectsGrid) {
        return;
    }

    if (languageDescription) {
        languageDescription.textContent = group.description;
    }

    const existingCards = Array.from(projectsGrid.querySelectorAll<HTMLElement>(".project-card"));
    if (existingCards.length > 0) {
        let remaining = existingCards.length;
        existingCards.forEach((card) => {
            card.classList.add("fade-out");
            card.addEventListener(
                "animationend",
                () => {
                    remaining -= 1;
                    if (remaining === 0) {
                        renderProjectCards(group);
                    }
                },
                { once: true }
            );
        });
    } else {
        renderProjectCards(group);
    }
}

function setupLanguageTabs() {
    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const languageId = button.dataset.language || "c-cpp";
            setActiveLanguage(languageId);
        });
    });
}

function setupPreviewTabs() {
    previewButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const previewId = button.dataset.preview || "work";
            transitionPreview(previewId);
        });
    });
}

function setupContactForm() {
    const form = document.getElementById("contactForm") as HTMLFormElement | null;
    const feedback = document.getElementById("contactFeedback");
    if (!form || !feedback) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        feedback.textContent = "Thanks! Your message is ready to send. I will reply as soon as possible.";
        feedback.classList.add("visible");
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupLanguageTabs();
    setActiveLanguage("c-cpp");
    setupPreviewTabs();
    transitionPreview("work");
    setupContactForm();
});

export {};
