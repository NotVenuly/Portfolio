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

const previewSections = [
    {
        id: "work",
        label: "Work experience",
        title: "Big header for currently viewed page",
        description: "I build and improve game systems, support production tools, and ensure game code is maintainable and modular. This view is designed to fill the whole screen and stay clear as an entire project tile.",
    },
    {
        id: "study",
        label: "Study",
        title: "Big header for currently viewed page",
        description: "Focused on interactive systems, team collaboration, and technical polish. When selected, the study section slides into view from the side that was active before.",
    },
    {
        id: "skills",
        label: "Skills",
        title: "Big header for currently viewed page",
        description: "Use this screen to highlight tools, languages, and production skills. The active panel is always the full view so each section feels like its own square workspace.",
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
    return `
        <div class="preview-card-content">
            <p class="mini-label">${section.label}</p>
            <h2>${section.title}</h2>
            <p>${section.description}</p>
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
    const outgoingCard = currentPreviewCard;

    if (outgoingCard) {
        outgoingCard.classList.remove("slide-in-from-right", "slide-in-from-left", "slide-out-left", "slide-out-right");
        outgoingCard.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");
        outgoingCard.style.zIndex = "1";
        outgoingCard.addEventListener("animationend", () => {
            outgoingCard.remove();
        }, { once: true });
    }

    const nextCard = document.createElement("article");
    nextCard.className = `preview-card slide-in-from-${direction}`;
    nextCard.innerHTML = renderPreviewCard(newPreviewId);
    nextCard.style.zIndex = "2";
    previewCanvas.appendChild(nextCard);
    currentPreviewCard = nextCard;

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
