/*
  SABUJ PAUL — CYBERSECURITY PORTFOLIO
  --------------------------------------------------
  CONTENT EDITING GUIDE
  1) Replace the project objects below with your real projects.
  2) Only add evidence URLs that actually exist.
  3) For missing evidence, leave the value as an empty string.
  4) Update labCount, competitions, certifications and community items.
  5) Update the email placeholder in index.html.

  No frameworks, build tools or server-side code are used.
*/

const portfolioData = {
  projects: [
    {
      id: "project-01",
      number: "01",
      category: "web",
      tag: "WEB SECURITY",
      title: "Project title — replace with your real work",
      summary: "Use this card for a real web/application security project. Keep the public summary focused on the problem, approach and evidence rather than pasting code.",
      technologies: ["Burp Suite", "HTTP", "Web Testing"],
      why: "Placeholder — explain the security problem or learning goal that motivated the project.",
      objective: "Placeholder — state the concrete objective in one or two sentences.",
      tools: ["Placeholder tool", "Placeholder tool", "Placeholder technology"],
      actions: [
        "Document the target scope or lab environment.",
        "Describe the testing workflow at a high level.",
        "Capture reproducible evidence and key findings.",
        "Record the remediation, lesson or next step."
      ],
      skills: ["Security testing", "Documentation", "Problem solving"],
      outcome: "Placeholder — describe the result, finding, fix, or artifact you produced.",
      relevance: "Placeholder — connect the project to a real security workflow such as assessment, validation, hardening, or detection.",
      evidence: {
        github: "",
        screenshots: "",
        writeup: "",
        demo: "",
        docs: ""
      }
    },
    {
      id: "project-02",
      number: "02",
      category: "offensive",
      tag: "OFFENSIVE SECURITY",
      title: "Project title — replace with your real work",
      summary: "Use this slot for a controlled offensive-security exercise, assessment, lab build, or methodology-focused project.",
      technologies: ["Linux", "Enumeration", "Security Tools"],
      why: "Placeholder — explain what security question you wanted to answer.",
      objective: "Placeholder — state what you intended to discover, validate or document.",
      tools: ["Placeholder tool", "Placeholder tool", "Placeholder platform"],
      actions: [
        "Define scope and keep the work inside an authorized environment.",
        "Describe reconnaissance and enumeration at a portfolio-safe level.",
        "Summarize important observations and decisions.",
        "Document defensive lessons or remediation opportunities."
      ],
      skills: ["Reconnaissance", "Enumeration", "Technical reporting"],
      outcome: "Placeholder — describe the measurable or observable result.",
      relevance: "Placeholder — explain how the workflow maps to professional security assessment or defensive validation.",
      evidence: {
        github: "",
        screenshots: "",
        writeup: "",
        demo: "",
        docs: ""
      }
    },
    {
      id: "project-03",
      number: "03",
      category: "automation",
      tag: "SECURITY AUTOMATION",
      title: "Project title — replace with your real work",
      summary: "Use this for a security utility, script, reporting helper, automation workflow, or repeatable process you actually built.",
      technologies: ["Python / Bash", "Git", "CLI"],
      why: "Placeholder — explain the repetitive or error-prone security task you wanted to improve.",
      objective: "Placeholder — define the desired input, workflow and output.",
      tools: ["Placeholder language", "Placeholder library", "GitHub"],
      actions: [
        "Describe the workflow and data handled by the tool.",
        "Show the structure, inputs, outputs and error handling.",
        "Explain what you tested and how you validated the result.",
        "Link the repository, documentation and screenshots."
      ],
      skills: ["Automation", "Scripting", "Validation"],
      outcome: "Placeholder — explain what became faster, clearer, safer or more repeatable.",
      relevance: "Placeholder — connect the automation to real security operations or engineering work.",
      evidence: {
        github: "",
        screenshots: "",
        writeup: "",
        demo: "",
        docs: ""
      }
    },
    {
      id: "project-04",
      number: "04",
      category: "research",
      tag: "SECURITY RESEARCH",
      title: "Project title — replace with your real work",
      summary: "Use this slot for a research note, security analysis, threat-modeling exercise, or technical write-up you can show publicly.",
      technologies: ["Research", "Threat Modeling", "Documentation"],
      why: "Placeholder — explain the security topic or question you investigated.",
      objective: "Placeholder — state the scope of the research and the intended output.",
      tools: ["Placeholder source", "Placeholder framework", "Markdown"],
      actions: [
        "Define the question and boundaries of the research.",
        "Compare observations against credible references.",
        "Document assumptions, evidence and limitations.",
        "Turn findings into practical recommendations or follow-up work."
      ],
      skills: ["Research", "Threat analysis", "Technical writing"],
      outcome: "Placeholder — summarize the finished research artifact or conclusion.",
      relevance: "Placeholder — explain how this improves security reasoning, assessment or communication.",
      evidence: {
        github: "",
        screenshots: "",
        writeup: "",
        demo: "",
        docs: ""
      }
    },
    {
      id: "project-05",
      number: "05",
      category: "web",
      tag: "APPLICATION SECURITY",
      title: "Project title — replace with your real work",
      summary: "Use this card for a second application-security project, secure configuration exercise, test report, or remediation-focused build.",
      technologies: ["HTTP", "OWASP", "Testing"],
      why: "Placeholder — explain why the application or security scenario mattered to you.",
      objective: "Placeholder — describe the assessment or hardening goal.",
      tools: ["Placeholder proxy", "Placeholder scanner", "Browser"],
      actions: [
        "Describe the authorized environment and testing approach.",
        "Summarize the important application behaviors you validated.",
        "Document findings without publishing sensitive secrets.",
        "Explain the remediation or security-control outcome."
      ],
      skills: ["Application security", "Risk thinking", "Reporting"],
      outcome: "Placeholder — describe the outcome and evidence produced.",
      relevance: "Placeholder — connect the project to secure development or application assessment workflows.",
      evidence: {
        github: "",
        screenshots: "",
        writeup: "",
        demo: "",
        docs: ""
      }
    },
    {
      id: "project-06",
      number: "06",
      category: "offensive",
      tag: "CTF / LAB",
      title: "Project title — replace with your real work",
      summary: "Use this card for a standout CTF, lab, challenge series, or security exercise that demonstrates how you reason through unfamiliar problems.",
      technologies: ["CTF", "Linux", "Problem Solving"],
      why: "Placeholder — explain what you wanted to practice or understand.",
      objective: "Placeholder — define the intended learning objective.",
      tools: ["Placeholder platform", "Placeholder tool", "Notes"],
      actions: [
        "Describe the challenge or lab context without exposing restricted material.",
        "Summarize the investigation path and key reasoning steps.",
        "Record what worked, what failed and what you changed.",
        "Link to a safe public write-up or evidence artifact."
      ],
      skills: ["Analytical thinking", "Troubleshooting", "Security fundamentals"],
      outcome: "Placeholder — explain what you solved or learned.",
      relevance: "Placeholder — connect the exercise to practical security reasoning and assessment work.",
      evidence: {
        github: "",
        screenshots: "",
        writeup: "",
        demo: "",
        docs: ""
      }
    }
  ],

  labCount: "ADD COUNT",

  competitions: [
    {
      name: "Competition name — add your verified result",
      result: "PLACEHOLDER",
      involved: "Describe the competition format and what you were expected to solve.",
      areas: ["Web", "Forensics", "Crypto"],
      learned: "Explain one or two concrete skills or lessons gained.",
      evidence: ""
    },
    {
      name: "CTF / hackathon name — add your verified result",
      result: "PLACEHOLDER",
      involved: "Describe the event and your role without overstating your contribution.",
      areas: ["Enumeration", "Linux", "Problem Solving"],
      learned: "Explain how the experience changed your approach to security problems.",
      evidence: ""
    },
    {
      name: "Competition name — add your verified result",
      result: "PLACEHOLDER",
      involved: "Describe the format, team context and challenge style.",
      areas: ["Application Security", "Research", "Analysis"],
      learned: "Add a practical lesson that came from the event.",
      evidence: ""
    }
  ],

  certifications: [
    {
      short: "CERT",
      name: "Certification name — replace with your real credential",
      why: "Explain why you completed it and what part of your security development it supported.",
      areas: "Security fundamentals • Add the real covered areas",
      evidence: ""
    },
    {
      short: "CERT",
      name: "Certification name — replace with your real credential",
      why: "Explain the practical or foundational value of the certification.",
      areas: "Add the real covered areas",
      evidence: ""
    },
    {
      short: "CERT",
      name: "Certification name — replace with your real credential",
      why: "Explain how the credential fits into your broader security development.",
      areas: "Add the real covered areas",
      evidence: ""
    },
    {
      short: "CERT",
      name: "Certification name — replace with your real credential",
      why: "Explain what you were aiming to validate through the certification.",
      areas: "Add the real covered areas",
      evidence: ""
    }
  ],

  community: [
    {
      label: "ACHIEVEMENT",
      title: "Achievement / award — replace with a verified accomplishment",
      body: "Describe what happened, your contribution and the concrete impact or recognition."
    },
    {
      label: "COMMUNITY",
      title: "Volunteering / mentoring / talk — replace with a real contribution",
      body: "Describe who benefited, what you contributed and what changed as a result."
    },
    {
      label: "IMPACT",
      title: "Community contribution — replace with verified evidence",
      body: "Use this slot for a meaningful public contribution that adds context beyond your CV."
    }
  ]
};

const categoryLabels = {
  all: "All",
  web: "Web Security",
  offensive: "Offensive Security",
  automation: "Automation",
  research: "Research"
};

const projectGrid = document.getElementById("project-grid");
const projectCount = document.getElementById("project-count");
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const labCount = document.getElementById("lab-count");
const competitionGrid = document.getElementById("competition-grid");
const certGrid = document.getElementById("cert-grid");
const communityGrid = document.getElementById("community-grid");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url, window.location.href);
    if (["http:", "https:", "mailto:"].includes(parsed.protocol)) return parsed.href;
  } catch (_) {}
  return "";
}

function renderEvidenceMini(evidence) {
  const labels = [
    ["github", "GitHub"],
    ["screenshots", "Screenshots"],
    ["writeup", "Write-up"],
    ["demo", "Demo"],
    ["docs", "Docs"]
  ];

  return labels.map(([key, label]) => `<span>${escapeHtml(label)}${evidence?.[key] ? "" : ""}</span>`).join("");
}

function renderProjects(filter = "all") {
  const visible = filter === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter((project) => project.category === filter);

  projectCount.textContent = `${visible.length} ${visible.length === 1 ? "project" : "projects"}`;

  if (!visible.length) {
    projectGrid.innerHTML = `<div class="empty-state"><strong>No projects in this filter yet.</strong><br />Add a real project object to <code>script.js</code> and assign its category to <code>${escapeHtml(filter)}</code>.</div>`;
    return;
  }

  projectGrid.innerHTML = visible.map((project) => `
    <article class="project-card reveal is-visible">
      <div class="project-meta">
        <span class="project-index">CASE / ${escapeHtml(project.number)}</span>
        <span class="project-tag">${escapeHtml(project.tag)}</span>
      </div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.summary)}</p>
      <div class="tech-row">
        ${project.technologies.map((tech) => `<span>${escapeHtml(tech)}</span>`).join("")}
      </div>
      <div class="card-bottom">
        <div class="evidence-mini" aria-label="Evidence types">${renderEvidenceMini(project.evidence)}</div>
        <button class="project-open" type="button" data-project-id="${escapeHtml(project.id)}">View details</button>
      </div>
    </article>
  `).join("");

  projectGrid.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.projectId));
  });
}

function evidenceButton(label, url) {
  const validated = safeUrl(url);
  if (validated) {
    return `<a class="evidence-button is-live" href="${escapeHtml(validated)}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(label)}</span><span>OPEN ↗</span></a>`;
  }
  return `<div class="evidence-button is-placeholder"><span>${escapeHtml(label)}</span><span>ADD EVIDENCE</span></div>`;
}

function openProject(projectId) {
  const project = portfolioData.projects.find((item) => item.id === projectId);
  if (!project) return;

  modalContent.innerHTML = `
    <div class="modal-head">
      <span class="project-tag">${escapeHtml(project.tag)}</span>
      <h2 id="modal-title">${escapeHtml(project.title)}</h2>
      <p>${escapeHtml(project.summary)}</p>
    </div>

    <div class="modal-grid">
      <div class="detail-section"><h3>What was the project?</h3><p>${escapeHtml(project.summary)}</p></div>
      <div class="detail-section"><h3>Why did I build it?</h3><p>${escapeHtml(project.why)}</p></div>
      <div class="detail-section"><h3>Objective</h3><p>${escapeHtml(project.objective)}</p></div>
      <div class="detail-section"><h3>Tools / technologies</h3><div class="detail-list">${project.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}</div></div>
      <div class="detail-section"><h3>What I actually did</h3><ul>${project.actions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
      <div class="detail-section"><h3>Skills developed</h3><div class="detail-list">${project.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}</div></div>
      <div class="detail-section"><h3>Outcome</h3><p>${escapeHtml(project.outcome)}</p></div>
      <div class="detail-section"><h3>Real-world relevance</h3><p>${escapeHtml(project.relevance)}</p></div>
    </div>

    <div class="modal-evidence" aria-label="Project evidence links">
      ${evidenceButton("GitHub repository", project.evidence?.github)}
      ${evidenceButton("Screenshots", project.evidence?.screenshots)}
      ${evidenceButton("Write-up", project.evidence?.writeup)}
      ${evidenceButton("Demo", project.evidence?.demo)}
      ${evidenceButton("Technical documentation", project.evidence?.docs)}
    </div>
  `;

  if (typeof modal.showModal === "function") {
    modal.showModal();
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  if (modal.open) modal.close();
  document.body.style.overflow = "";
}

function renderCompetitions() {
  competitionGrid.innerHTML = portfolioData.competitions.map((item) => `
    <article class="competition-card">
      <div class="competition-top">
        <h3>${escapeHtml(item.name)}</h3>
        <span class="result-pill">${escapeHtml(item.result)}</span>
      </div>
      <p><strong>Involved:</strong> ${escapeHtml(item.involved)}</p>
      <div class="detail-list">${item.areas.map((area) => `<span>${escapeHtml(area)}</span>`).join("")}</div>
      <p><strong>Learned:</strong> ${escapeHtml(item.learned)}</p>
      ${item.evidence ? `<a class="evidence-link" href="${escapeHtml(safeUrl(item.evidence))}" target="_blank" rel="noopener noreferrer">Evidence</a>` : `<span class="evidence-link" style="color:#6f7f86">Evidence placeholder — add verified proof</span>`}
    </article>
  `).join("");
}

function renderCertifications() {
  certGrid.innerHTML = portfolioData.certifications.map((item) => `
    <article class="cert-card">
      <span class="cert-mark">${escapeHtml(item.short)}</span>
      <div>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.why)}</p>
        <p>${escapeHtml(item.areas)}</p>
      </div>
      ${item.evidence && safeUrl(item.evidence)
        ? `<a class="cert-link" href="${escapeHtml(safeUrl(item.evidence))}" target="_blank" rel="noopener noreferrer">VERIFY ↗</a>`
        : `<span class="cert-link">LINK PLACEHOLDER</span>`}
    </article>
  `).join("");
}

function renderCommunity() {
  communityGrid.innerHTML = portfolioData.community.map((item) => `
    <article class="community-card">
      <span class="small-label">${escapeHtml(item.label)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderProjects(button.dataset.filter);
    });
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function setupModal() {
  document.querySelector("[data-close-modal]")?.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal.addEventListener("close", () => {
    document.body.style.overflow = "";
  });
}

function init() {
  renderProjects();
  renderCompetitions();
  renderCertifications();
  renderCommunity();
  labCount.textContent = escapeHtml(portfolioData.labCount);
  document.getElementById("year").textContent = new Date().getFullYear();

  setupNavigation();
  setupFilters();
  setupModal();
  setupReveal();
}

document.addEventListener("DOMContentLoaded", init);
