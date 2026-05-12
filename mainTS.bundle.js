// mainTS.ts
var previewSections = [
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
        description: `I had my first internship at Odysseus LARP. I worked on a core puzzle for engineers made in unity with 2 of my classmates. 
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
    ]
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
                I sped up my vocational school by a year, by doing projects faster and more efficently than expected, this left me with more time to study for extended math(pitk\xE4 matematiikka)`
      },
      {
        title: "T\xF6\xF6l\xF6n yhteislukio",
        description: `I did upper secondary studies(lukio) along side my game development studies. In my upper secondary studies I replaced normal short(lyhyt matematiikka)
                with extended math so that in the future I can go study Automation engineering at Aalto universit, which requires a C from extended math matriculation exams.
                In the future I will study physics at T\xF6\xF6l\xF6, which is also required.`
      },
      {
        title: "Lehtikuusen Peruskoulu",
        description: `My basic studies were mostly normal aside from the fact that I got a stipendi from techinal work (tekninen k\xE4sity\xF6) as well as graduating in a class that specializes in mathematics`
      }
    ]
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
        title: "C/C++, GOLANG, Python, SQL",
        description: "I've used these languages in my projects I'm also learning more abut them every day"
      },
      {
        title: "Microsoft Office",
        description: "At school we were taught lots of basic ICT skills such as using Microsoft office apps like Excel or Word"
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
        title: "Git",
        description: "Every project of mine uses Git version control usually in Github making me very familiar with it"
      },
      {
        title: "Team work",
        description: "I work best when I'm given clear instructions on what to do and in what way"
      }
    ]
  }
];
var projectGroups = [
  {
    id: "c-cpp",
    label: "C/C++",
    description: "Porjects that mainly use C/C++",
    projects: [
      {
        title: "Physics Prototype",
        description: "A responsive C++ demo that tracks motion, collision logic, and game feel.",
        link: "../OtherCode/C-Cpp/project.cpp",
        tags: ["Game systems", "Native", "Performance"],
        highlight: "Launch a native gameplay prototype.",
        isNew: false
      },
      {
        title: "Render Tool",
        description: "A small C++ renderer helper for debugging shader passes and draw order.",
        link: "../OtherCode/C-Cpp/project.cpp",
        tags: ["Graphics", "Tools", "Debug"],
        highlight: "Used to preview rendering layers quickly.",
        isNew: true
      },
      {
        title: "Gameplay AI",
        description: "A C++ AI system sample for decision trees and movement logic.",
        link: "../OtherCode/C-Cpp/project.cpp",
        tags: ["AI", "Game logic", "Systems"],
        highlight: "Designed for robust enemy behavior.",
        isNew: false
      }
    ]
  },
  {
    id: "python",
    label: "Python",
    description: "Projects that mainly use Python",
    projects: [
      {
        title: "Build pipeline script",
        description: "A Python automation tool for asset importing and build validation.",
        link: "../OtherCode/Python/project_generator.py",
        tags: ["Automation", "Tools", "Python"],
        highlight: "Fast editing and repeatable pipeline generation.",
        isNew: true
      },
      {
        title: "Gameplay simulator",
        description: "A Python prototype for tuning combat flow and enemy spawn timing.",
        link: "../OtherCode/Python/project_generator.py",
        tags: ["Simulation", "Tuning", "Prototype"],
        highlight: "Simulation tuned for quick iteration.",
        isNew: false
      },
      {
        title: "Analytics exporter",
        description: "A data export utility for gameplay metrics and player sessions.",
        link: "../OtherCode/Python/project_generator.py",
        tags: ["Data", "Export", "Metrics"],
        highlight: "Collects session data for fast review.",
        isNew: false
      }
    ]
  },
  {
    id: "csharp",
    label: "C#",
    description: "Projects that mainly use C#",
    projects: [
      {
        title: "Tool window demo",
        description: "A modular C# editor tool that adapts to different game workflows.",
        link: "../OtherCode/CSharp/Project.cs",
        tags: ["Editor tool", "Unity", "C#"],
        highlight: "Designed to improve workflow with a clean UI.",
        isNew: false
      },
      {
        title: "Game service",
        description: "A C# backend sample for matchmaking and player metrics.",
        link: "../OtherCode/CSharp/Project.cs",
        tags: ["Network", "Services", "Backend"],
        highlight: "Built to support multiplayer systems.",
        isNew: true
      },
      {
        title: "Input handler",
        description: "A reusable C# component for player controls and action mapping.",
        link: "../OtherCode/CSharp/Project.cs",
        tags: ["Controls", "Input", "Component"],
        highlight: "A strong base for consistent input handling.",
        isNew: false
      }
    ]
  },
  {
    id: "go",
    label: "GO",
    description: "Projects that mainly use GO",
    projects: [
      {
        title: "Build server",
        description: "A lightweight Go server for remote asset processing and reports.",
        link: "../OtherCode/Go/project.go",
        tags: ["Server", "Go", "Toolchain"],
        highlight: "Optimized for fast iteration and small deployments.",
        isNew: true
      },
      {
        title: "HTTP logger",
        description: "A Go service that collects build logs and stores metadata.",
        link: "../OtherCode/Go/project.go",
        tags: ["Logging", "API", "Service"],
        highlight: "Built for reliable log collection.",
        isNew: false
      },
      {
        title: "CLI helper",
        description: "A command-line Go utility for project scaffolding and preview builds.",
        link: "../OtherCode/Go/project.go",
        tags: ["CLI", "Tool", "Automation"],
        highlight: "Scaffolds new projects quickly.",
        isNew: false
      }
    ]
  }
];
var projectsGrid = document.getElementById("projectsGrid");
var languageDescription = document.getElementById("languageDescription");
var languageButtons = Array.from(document.querySelectorAll(".language-tab"));
var previewButtons = Array.from(document.querySelectorAll(".preview-tab"));
var previewCanvas = document.getElementById("previewCanvas");
var activePreviewId = "";
var currentPreviewCard = null;
function renderPreviewCard(sectionId) {
  const section = previewSections.find((entry) => entry.id === sectionId);
  if (!section) {
    return "";
  }
  const bodyContent = section.items ? `<ul class="preview-features">${section.items.map((item) => {
    const titleHtml = item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="preview-feature-title">${item.title}</a>` : `<strong class="preview-feature-title">${item.title}</strong>`;
    const articleHtml = item.articleLink ? `<a href="${item.articleLink}" target="_blank" rel="noopener noreferrer" class="preview-feature-article">Read related article</a>` : "";
    return `<li>${titleHtml}<span>${item.description}</span>${articleHtml}</li>`;
  }).join("")}</ul>` : `<p>${section.items}</p>`;
  return `
        <div class="preview-card-content">
            <p class="mini-label">${section.label}</p>
            <h2>${section.title}</h2>
            ${bodyContent}
        </div>
    `;
}
function getPreviewIndex(sectionId) {
  return previewSections.findIndex((section) => section.id === sectionId);
}
function transitionPreview(newPreviewId) {
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
function renderProjectCards(group) {
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
                ${project.isNew ? '<span class="project-badge">New</span>' : ""}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <span>${project.highlight}</span>
            </div>
            <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <button class="project-link" type="button" data-link="${project.link}" data-title="${project.title}">Open ${group.label} file</button>
        `;
    projectsGrid.appendChild(card);
    const openButton = card.querySelector(".project-link");
    if (openButton) {
      openButton.addEventListener("click", () => {
        showCodeRunnerModal(project);
      });
    }
  });
}
function getLanguageFromPath(path) {
  const lower = path.toLowerCase();
  if (lower.endsWith(".go")) {
    return "go";
  }
  if (lower.endsWith(".py")) {
    return "python";
  }
  if (lower.endsWith(".cpp") || lower.endsWith(".cc") || lower.endsWith(".cxx")) {
    return "cpp";
  }
  if (lower.endsWith(".c")) {
    return "c";
  }
  if (lower.endsWith(".cs")) {
    return "csharp";
  }
  return "python";
}
async function fetchSourceFile(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.statusText}`);
  }
  return response.text();
}
async function executeCode(language, source) {
  const response = await fetch("http://localhost:5501/api/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language, source })
  });
  if (!response.ok) {
    throw new Error(`Code execution failed: ${response.statusText}`);
  }
  const result = await response.json();
  return result;
}
function showCodeRunnerModal(project) {
  const modal = document.getElementById("codeRunnerModal");
  const editor = document.getElementById("codeRunnerEditor");
  const output = document.getElementById("codeRunnerOutput");
  const title = document.getElementById("codeRunnerTitle");
  const langLabel = document.getElementById("codeRunnerLanguage");
  const runButton = document.getElementById("codeRunnerRunButton");
  if (!modal || !editor || !output || !title || !langLabel || !runButton) {
    return;
  }
  const language = getLanguageFromPath(project.link);
  title.textContent = project.title;
  langLabel.textContent = `Language: ${language}`;
  runButton.dataset.language = language;
  runButton.dataset.path = project.link;
  editor.value = "Loading source...";
  output.textContent = "";
  modal.classList.add("visible");
  fetchSourceFile(project.link).then((source) => {
    editor.value = source;
  }).catch((error) => {
    editor.value = `Unable to load file:
${error.message}`;
  });
}
function setupCodeRunner() {
  const modal = document.getElementById("codeRunnerModal");
  const closeButton = document.getElementById("codeRunnerCloseButton");
  const runButton = document.getElementById("codeRunnerRunButton");
  const editor = document.getElementById("codeRunnerEditor");
  const output = document.getElementById("codeRunnerOutput");
  if (!modal || !closeButton || !runButton || !editor || !output) {
    return;
  }
  closeButton.addEventListener("click", () => {
    modal.classList.remove("visible");
  });
  runButton.addEventListener("click", async () => {
    const language = runButton.dataset.language || getLanguageFromPath(runButton.dataset.path || "");
    const source = editor.value;
    output.textContent = "Running...";
    runButton.disabled = true;
    try {
      const result = await executeCode(language, source);
      const stdout = result.stdout ? atob(result.stdout) : "";
      const stderr = result.stderr ? atob(result.stderr) : "";
      const compileOutput = result.compile_output ? atob(result.compile_output) : "";
      const statusMessages = {
        1: "In Queue",
        2: "Processing",
        3: "Accepted",
        4: "Wrong Answer",
        5: "Time Limit Exceeded",
        6: "Compilation Error",
        7: "Runtime Error (SIGSEGV)",
        8: "Runtime Error (SIGXFSZ)",
        9: "Runtime Error (SIGFPE)",
        10: "Runtime Error (SIGABRT)",
        11: "Runtime Error (NZEC)",
        12: "Runtime Error (Other)",
        13: "Internal Error"
      };
      const status = statusMessages[result.status_id] || "Unknown status";
      output.textContent = [
        compileOutput ? `Compilation:
${compileOutput}` : "",
        stdout ? `Output:
${stdout}` : "",
        stderr ? `Errors:
${stderr}` : "",
        !stdout && !stderr && !compileOutput ? `Status: ${status}` : ""
      ].filter(Boolean).join("\n\n") || "No output";
    } catch (error) {
      output.textContent = `Execution error: ${error instanceof Error ? error.message : String(error)}`;
    } finally {
      runButton.disabled = false;
    }
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("visible");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.classList.remove("visible");
    }
  });
}
function setActiveLanguage(languageId) {
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
  const existingCards = Array.from(projectsGrid.querySelectorAll(".project-card"));
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
  emailjs.init("N64Ik5rCXqdDblZ17");
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("contactSubmitButton");
  if (!form || !btn) {
    return;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    btn.value = "Sending...";
    const serviceID = "service_67yles2";
    const templateID = "template_6npdvwq";
    emailjs.sendForm(serviceID, templateID, form).then(() => {
      btn.value = "Send Email";
      alert("Thanks! Your message has been sent. I will reply as soon as possible.");
      form.reset();
    }, (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  setupLanguageTabs();
  setActiveLanguage("c-cpp");
  setupPreviewTabs();
  transitionPreview("work");
  setupCodeRunner();
  setupContactForm();
});
