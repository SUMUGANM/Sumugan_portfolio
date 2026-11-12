/* =====================================================
   EDIT YOUR CONTENT HERE (no need to touch index.html)
   ===================================================== */

const SETTINGS = {
  showPhone: true, // set to false to hide your phone number from the website
  // Paste your Formspree form link here (see README, "Receive messages in your email").
  // Example: "https://formspree.io/f/abcdwxyz"
  // While this is empty, the form opens the visitor's email app instead.
  formEndpoint: "https://formspree.io/f/mbgoragk"
};

const SKILLS = [
  { icon: "bi-code-slash",     title: "Programming",        items: ["Python", "SQL"] },
  { icon: "bi-window-sidebar", title: "Web Technologies",   items: ["HTML5", "CSS3", "Bootstrap", "Responsive Web Design"] },
  { icon: "bi-graph-up",       title: "Data and AI",        items: ["Pandas", "NumPy", "Data Analytics", "Machine Learning Basics"] },
  { icon: "bi-tools",          title: "Database and Tools", items: ["SQLite", "Visual Studio Code", "GitHub", "MS Excel"] },
  { icon: "bi-diagram-3",      title: "Core Concepts",      items: ["Object-Oriented Programming (OOP)", "Data Structures", "Database Management Systems (DBMS)", "Software Development Life Cycle (SDLC)"] }
];

// Add photos: put files in assets/images/experience/ and list them here.
// Empty list = one "coming soon" placeholder is shown.
const EXPERIENCE_PHOTOS = [
  { src: "assets/images/experience/Python training session.jpeg", alt: "Python training session" },
  { src: "assets/images/experience/Students practicing coding.jpeg", alt: "Students practicing coding" },
  { src: "assets/images/experience/Hands-on learning activity.jpeg", alt: "Hands-on learning activity" }
];

// github: "" -> the GitHub button is hidden. Paste the real repository link to show it.
const PROJECTS = [
  {
    title: "Detection and Classification of Skin Cancer Using Deep Learning",
    images:[
  "assets/images/projects/output1.jpeg",
  "assets/images/projects/output2.jpeg",
  "assets/images/projects/output3.jpeg",
  "assets/images/projects/output4.jpeg",
  "assets/images/projects/output5.jpeg",
  "assets/images/projects/output6.jpeg"
   ],
    tech: ["Python", "Deep Learning", "Machine Learning", "Image Classification"],
    description: "An AI-based project focused on detecting and classifying skin cancer using deep learning techniques and image analysis.",
    github: ""
  },
  {
    title: "Student Information System",
    images: [
  "assets/images/projects/SIS1.png",
  "assets/images/projects/SIS2.png",
  "assets/images/projects/SIS3.png",
  "assets/images/projects/SIS4.png",
  "assets/images/projects/SIS5.png",
  "assets/images/projects/SIS6.png"
  
  ],
    tech: ["HTML","CSS","Javascript"], // add technologies once confirmed, e.g. ["Python", "SQLite"]
    description: "A student information management application designed to organize and manage student-related information efficiently.",
    github: ""
  },
  {
    title: "Bank Transaction Analysis Using PySpark",
    images: [
  "assets/images/projects/Bank1.png",
  "assets/images/projects/Bank2.png",
  "assets/images/projects/Bank3.png",
  "assets/images/projects/Bank4.png",
  "assets/images/projects/Bank5.png",
  "assets/images/projects/Bank6.png",
  "assets/images/projects/Bank7.png",
  "assets/images/projects/Bank8.png"

  ],
    tech: ["Python", "PySpark", "SQL"],
    description: "A data analytics project focused on analyzing banking transactions, identifying high-risk transactions, and classifying transactions based on predefined business rules.",
    github: ""
  }
];

// Add your real certificates here. Example (remove the // to use):
// { title: "Certificate name", issuer: "Issuing organization", date: "Month Year",
//   image: "assets/images/certificates/cert-1.jpg", link: "assets/images/certificates/cert-1.jpg" }
const CERTIFICATES = [
    {
    title: "Architecting with Google Compute Engine",
    issuer: "Google",
    date: "12 2022",
    image:  "assets/images/certificates/Coursera.png",
    link: "assets/documents/Coursera.pdf"
  },
  {
    title: "Artifical Intelligence Foundation",
    issuer: "FutureSkills, Talentnext, Wipro",
    date: "03 2023",
    image:  "assets/images/certificates/Wipro AI.png",
    link: "assets/documents/Wipro AI.jpg"
  },
  {
    title: "Problem Solving through Programming in C",
    issuer: "NPTEL",
    date: "04 2023",
    image:  "assets/images/certificates/NPTEL.png",
    link: "assets/documents/NPTEL.pdf"
  },
   {
    title: "Wipro TalentNext Java Full Stack",
    issuer: "FutureSkills, Talentnext, Wipro",
    date: "10 2023",
    image:  "assets/images/certificates/Wipro TalentNext Java Full Stack.png",
    link: "assets/documents/Wipro TalentNext Java Full Stack.pdf"
  },
  {
    title: "Introduction Of Database",
    issuer: "NxtWave",
    date: "10 2024",
    image:  "assets/images/certificates/Intro of Database.png",
    link: "assets/documents/SQL.pdf"
  },
  {

    title: "Python Programming",
    issuer: "NxtWave",
    date: "11 2024",
    image:  "assets/images/certificates/Python Programming.png",
    link: "assets/documents/Python.pdf"
  },
  
  {
    title: "Build Your Own Dynamic Web Application",
    issuer: "NxtWave",
    date: "01 2025",
    image:  "assets/images/certificates/Dynamic web application.png",
    link: "assets/documents/JavaScript.pdf"
  },
   {
    title: "Responsive Web Design Using Flexbox",
    issuer: "NxtWave",
    date: "01 2025",
    image:  "assets/images/certificates/Resonponsive wen design using flexbox.png",
    link: "assets/documents/Responsive web design.pdf"
  },
  {
    title: "JavaScript Essential",
    issuer: "NxtWave",
    date: "02 2025",
    image:  "assets/images/certificates/Javascript Essential.png",
    link: "assets/documents/JavaScript Essential.pdf"
  },
 

  
  
 
  
];

/* =====================================================
   CODE BELOW RENDERS THE PAGE
   ===================================================== */
const $ = (s) => document.querySelector(s);
const PLACEHOLDER = "assets/images/placeholder.svg";
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const img = (src, alt, cls = "") =>
  `<img class="${cls}" src="${esc(src || PLACEHOLDER)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">`;

// Phone visibility
if (!SETTINGS.showPhone) $("#phone-item").remove();

// Skills
$("#skills-grid").innerHTML = SKILLS.map((s) => `
  <div class="col-md-6 col-lg-4"><div class="skill-card">
    <i class="bi ${s.icon}" aria-hidden="true"></i><h3>${esc(s.title)}</h3>
    <ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
  </div></div>`).join("");

// Experience gallery
const photos = EXPERIENCE_PHOTOS.length ? EXPERIENCE_PHOTOS : [{ src: "", alt: "Training photo coming soon" }];
$("#experience-gallery").innerHTML = photos.map((p) =>
  `<div class="col-4">${img(p.src, p.alt, "gallery-img")}</div>`).join("");

// Projects
$("#projects-grid").innerHTML = PROJECTS.map((p, i) => `
  <div class="col-md-6 col-lg-4"><article class="card-item">
    ${img(p.images[0], p.title)}
    <div class="card-body-x">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.description)}</p>
      ${p.tech.length ? `<ul class="chips">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      <div class="card-actions">
        <button class="btn-sm-x" data-project="${i}" type="button">Project details</button>
        ${p.github ? `<a class="btn-sm-x" href="${esc(p.github)}" target="_blank" rel="noopener"><i class="bi bi-github me-1"></i>GitHub</a>` : ""}
      </div>
    </div>
  </article></div>`).join("");

const modal = new bootstrap.Modal($("#detail-modal"));
$("#projects-grid").addEventListener("click", (e) => {
  const b = e.target.closest("[data-project]");
  if (!b) return;
  const p = PROJECTS[b.dataset.project];
  const list = p.images.length ? p.images : [""];
  const slides = list.map((src, n) =>
    `<div class="carousel-item ${n === 0 ? "active" : ""}">${img(src, p.title + " photo " + (n + 1), "gallery-img")}</div>`).join("");
  const arrows = list.length > 1 ? `
    <button class="carousel-control-prev" type="button" data-bs-target="#project-carousel" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></button>
    <button class="carousel-control-next" type="button" data-bs-target="#project-carousel" data-bs-slide="next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></button>` : "";
  $("#detail-title").textContent = p.title;
  $("#detail-body").innerHTML = `
    <div id="project-carousel" class="carousel slide mb-3"><div class="carousel-inner">${slides}</div>${arrows}</div>
    <p>${esc(p.description)}</p>
    <p class="mb-0 text-secondary">${p.tech.length ? "Technologies: " + esc(p.tech.join(", ")) : "Technologies will be added soon."}</p>`;
  modal.show();
});

// Certificates
$("#certs-grid").innerHTML = CERTIFICATES.length ? CERTIFICATES.map((c) => `
  <div class="col-md-6 col-lg-4"><article class="card-item">
    ${img(c.image, c.title)}
    <div class="card-body-x">
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.issuer)}${c.date ? " · " + esc(c.date) : ""}</p>
      <div class="card-actions"><a class="btn-sm-x" href="${esc(c.link || c.image)}" target="_blank" rel="noopener">View Certificate</a></div>
    </div>
  </article></div>`).join("")
  : `<div class="col-12"><div class="panel text-center"><p class="mb-0 text-secondary">Certificates will be added here soon.</p></div></div>`;

// Contact form: validates, then sends to your email through Formspree
const form = $("#contact-form");
const status = $("#form-status");
const sendBtn = form.querySelector("button[type=submit]");
status.textContent = SETTINGS.formEndpoint ? "Your message will be sent directly to my email." : "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  form.classList.add("was-validated");
  if (!form.checkValidity()) return;
  const v = (id) => $("#" + id).value.trim();
  const data = { name: v("name"), email: v("email"), subject: v("subject"), message: v("message") };

  // Fallback while Formspree is not set up: open the visitor's email app
  if (!SETTINGS.formEndpoint) {
    const body = `${data.message}\n\nFrom: ${data.name} (${data.email})`;
    window.location.href = `mailto:msumugan@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
  try {
    const res = await fetch(SETTINGS.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, _subject: "Portfolio: " + data.subject, _replyto: data.email })
    });
    if (!res.ok) throw new Error("Request failed");
    form.reset();
    form.classList.remove("was-validated");
    status.textContent = "Thank you! Your message has been sent. I will reply soon.";
  } catch (err) {
    status.textContent = "Sorry, the message could not be sent. Please email me directly at msumugan@gmail.com.";
  } finally {
    sendBtn.disabled = false;
    sendBtn.textContent = "Send message";
  }
});

// Back to top button
const toTop = $("#to-top");
window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 500), { passive: true });
