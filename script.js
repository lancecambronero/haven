const iconPaths = {
  realEstate: "M3 11l9-8 9 8M5 10v10h14V10",
  business: "M3 7h18v13H3zM9 7V4h6v3",
  sales: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  ecommerce: "M3 4h3l3 11h10l2-8H7",
  healthcare: "M12 21s-8-5-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6-8 11-8 11z",
  education: "M4 19V5a2 2 0 012-2h13v16H6a2 2 0 00-2 2",
  technology: "M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14",
  check: "M5 12l5 5 9-10",
};

const coreValues = [
  {
    title: "Integrity",
    text: "We believe trust is the foundation of every successful business relationship. We operate with honesty, accountability, and professionalism.",
  },
  {
    title: "Reliability",
    text: "Our clients depend on us to be consistent. We take ownership of our responsibilities and strive to deliver dependable support.",
  },
  {
    title: "Excellence",
    text: "We do not aim to merely complete tasks. We aim to deliver work that creates value.",
  },
  {
    title: "Professionalism",
    text: "We represent our clients and Haven with respect, clear communication, discretion, and a strong sense of responsibility.",
  },
  {
    title: "Adaptability",
    text: "Every business is different. We adapt our approach, workflows, and support to meet the needs of each client.",
  },
  {
    title: "Continuous Growth",
    text: "We believe great teams are built through learning. We encourage continuous training, development, and improvement.",
  },
  {
    title: "Client-Centered Service",
    text: "Our clients' goals are at the center of what we do. We seek to understand the business behind the task.",
  },
];

const serviceCategories = [
  {
    title: "Executive & Business Support",
    items: [
      "Executive Assistance",
      "Administrative Support",
      "Calendar & Email Management",
      "Business Support",
    ],
  },
  {
    title: "Sales & Growth Support",
    items: [
      "Lead Generation",
      "Appointment Setting",
      "CRM Support",
      "Sales Administration",
    ],
  },
  {
    title: "Real Estate Support",
    items: [
      "Real Estate VA",
      "Property Management Support",
      "Listing & Administrative Support",
      "Lead Management",
    ],
  },
  {
    title: "Customer & Healthcare Support",
    items: [
      "Customer Support",
      "Healthcare Administrative Support",
      "Client Coordination",
    ],
  },
  {
    title: "Education",
    items: [
      "ESL / Education Support",
      "Administrative Assistance for Education Businesses",
    ],
  },
];

const processSteps = [
  {
    title: "Discovery",
    tagline: "You tell us what your business needs.",
    description: "The client explains their business, current challenges, goals, and the type of support they need.",
  },
  {
    title: "Needs Assessment",
    tagline: "We identify the right support structure.",
    description: "Haven evaluates the tasks, systems, required skills, workload, and level of support required.",
  },
  {
    title: "Talent Matching",
    tagline: "We identify the right professional.",
    description: "Haven identifies and prepares an appropriate team member based on the client's requirements.",
  },
  {
    title: "Onboarding",
    tagline: "Everyone gets aligned.",
    description: "The client, Haven, and assigned personnel align on processes, tools, KPIs, responsibilities, communication, and expectations.",
  },
  {
    title: "Deployment",
    tagline: "Support begins.",
    description: "The assigned professional begins supporting the client's business according to the agreed workflow.",
  },
  {
    title: "Management & Quality Assurance",
    tagline: "Haven stays involved.",
    description: "Haven monitors performance, communication, service quality, and overall alignment.",
  },
];

const whyCards = [
  {
    title: "People-First Support",
    text: "Technology can automate processes, but businesses still need people who understand context, communicate effectively, and take responsibility. Haven combines technology with human judgment and professional support.",
  },
  {
    title: "Specialized Talent",
    text: "Different industries require different knowledge and workflows. Rather than treating every VA role the same, Haven develops talent around specific functions and industries.",
  },
  {
    title: "Scalable Support",
    text: "A client may start with one executive assistant and later need a larger administrative, sales, customer service, or operations team. Haven is designed to scale with those changing needs.",
  },
  {
    title: "Professional Communication",
    text: "Clear communication is essential in remote work. We emphasize professionalism, responsiveness, documentation, and accountability across our operations.",
  },
  {
    title: "Filipino Talent",
    text: "The Philippines is a major global source of remote talent. Haven showcases Filipino professionals not simply as cost-effective labor, but as skilled professionals who become valuable extensions of international businesses.",
  },
  {
    title: "Long-Term Partnerships",
    text: "We are not focused solely on filling positions. We build relationships where Haven understands your business and continuously improves the support it provides.",
  },
];

const whyHighlights = [
  {
    title: "Managed Service Model",
    text: "Haven provides organizational oversight instead of leaving you responsible for managing individual personnel.",
  },
  {
    title: "Integrity & Accountability",
    text: "Clear communication, confidentiality, reliability, and professionalism are central to the Haven experience.",
  },
  {
    title: "Technology-Enabled Operations",
    text: "Modern CRM, communication, project management, collaboration, and reporting systems keep service organized.",
  },
  {
    title: "Long-Term Partnership",
    text: "Haven is an extension of your team, not another staffing source.",
  },
];

const teamDepartments = [
  {
    name: "Executive Leadership",
    members: [
      {
      name: "Glydel Marie Andrade",
      role: "Founder & CEO",
    },
      {
      name: "Efraem Palencia",
      role: "Co-CEO",
    },
    ],
  },
  {
    name: "Recruitment & Human Resources",
    members: [
      {
      name: "Shenaryl Julleza",
      role: "Recruitment Specialist",
    },
      {
      name: "Maria Millenn",
      role: "Recruitment Specialist",
    },
      {
      name: "Henry Mark Varian",
      role: "HR & Onboarding Officer",
    },
      {
      name: "Mark Justine Caberoy",
      role: "HR & Onboarding Officer",
    },
    ],
  },
  {
    name: "IT & Technology",
    members: [
      {
      name: "Bryan Paul Belgar",
      role: "IT Specialist",
    },
      {
      name: "Lance Cambronero",
      role: "Developer",
    },
      {
      name: "Elijah Sanagustin",
      role: "Developer",
    },
    ],
  },
  {
    name: "Operations",
    members: [
      {
      name: "Fritz Marian Pendalon",
      role: "Operations Team Lead",
    },
      {
      name: "Josh Benedict Penafiel",
      role: "Appointment Setting",
    },
      {
      name: "Alberto Bengalisan",
      role: "Lead Generation & Administrative Specialist",
    },
    ],
  },
  {
    name: "Learning & Development",
    members: [
      {
      name: "Shenaryl Julleza",
      role: "Training Coordinator",
    },
      {
      name: "Efraem Palencia",
      role: "Training Supervisor",
    },
    ],
  },
];

const industries = [
  {
    icon: "realEstate",
    title: "Real Estate Management",
    text: "Support for property management, listings, lead management, administrative workflows, and real estate operations.",
  },
  {
    icon: "business",
    title: "Business & Professional Services",
    text: "Administrative, executive, client coordination, and operational support.",
  },
  {
    icon: "sales",
    title: "Sales & Marketing",
    text: "Lead generation, appointment setting, CRM support, sales administration, and customer engagement.",
  },
  {
    icon: "ecommerce",
    title: "E-Commerce",
    text: "Customer support, administrative assistance, order-related support, and business operations.",
  },
  {
    icon: "healthcare",
    title: "Healthcare Administration",
    text: "Administrative coordination, client support, scheduling assistance, and non-clinical administrative workflows.",
  },
  {
    icon: "education",
    title: "Education & ESL",
    text: "Administrative support, student/client coordination, and education business assistance.",
  },
  {
    icon: "technology",
    title: "Technology & SaaS",
    text: "Administrative, customer support, CRM, and operational assistance for technology businesses.",
  },
];

const pages = ["home", "services", "why", "team", "industries", "contact"];

const select = (selector) => document.querySelector(selector);

const icon = (name) => `<svg class="i" viewBox="0 0 24 24"><path d="${iconPaths[name]}"/></svg>`;

const getInitials = (fullName) =>
  fullName
    .replace(/[“”"].*?[“”"]/g, "")
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

function renderCoreValues() {
  select("#values").innerHTML = coreValues
    .map(({ title, text }) => `<div class="card">${icon("check")}<h3>${title}</h3><p>${text}</p></div>`)
    .join("");
}

function renderServices() {
  select("#svc").innerHTML = serviceCategories
    .map(({ title, items }, index) => {
      const open = index === 0 ? " open" : "";
      const list = items.map((item) => `<li>${item}</li>`).join("");
      return `<details${open}><summary>${title}</summary><ul>${list}</ul></details>`;
    })
    .join("");
}

function renderServiceOptions() {
  select("#chk").innerHTML = serviceCategories
    .flatMap(({ items }) => items)
    .map((item) => `<label><input type="checkbox" name="svc" value="${item}">${item}</label>`)
    .join("");
}

function renderProcessSteps() {
  select("#steps").innerHTML = processSteps
    .map(({ title, tagline, description }, index) => {
      const last = index === processSteps.length - 1 ? " last" : "";
      return `<div class="st${last}"><div class="no">0${index + 1}</div><div><h3>${title}</h3><p style="margin-top:4px;font-weight:600">${tagline}</p></div><p>${description}</p></div>`;
    })
    .join("");
}

function renderWhyCards() {
  select("#whyc").innerHTML = whyCards
    .map(({ title, text }) => `<div class="card">${icon("check")}<h3>${title}</h3><p class="mu" style="margin-top:10px;font-size:15px">${text}</p></div>`)
    .join("");
}

function renderWhyHighlights() {
  select("#whyb").innerHTML = whyHighlights
    .map(({ title, text }) => `<div class="card" style="background:var(--alt);border-color:transparent"><h3 style="color:var(--bl)">${title}</h3><p class="mu" style="margin-top:8px;font-size:14.5px">${text}</p></div>`)
    .join("");
}

function renderTeam() {
  select("#tm").innerHTML = teamDepartments
    .map(({ name, members }) => {
      const people = members
        .map((member) => `<div class="p"><div class="av" title="Photo placeholder">${getInitials(member.name)}</div><div><b>${member.name}</b><small>${member.role}</small></div></div>`)
        .join("");
      return `<div class="card dept"><h3>${name}</h3>${people}</div>`;
    })
    .join("");
}

function renderIndustries() {
  select("#ind").innerHTML = industries
    .map(({ icon: iconName, title, text }) => `<div class="card ind">${icon(iconName)}<h3>${title}</h3><p>${text}</p></div>`)
    .join("");
}

function renderServicePreview() {
  select("#spg").innerHTML = serviceCategories
    .map(({ title, items }) => `<a class="card" href="#services">${icon("check")}<h3>${title}</h3><p class="mu" style="margin-top:8px;font-size:14.5px">${items.slice(0, 3).join(", ")}</p></a>`)
    .join("");
}

function renderProcessPreview() {
  select("#hpg").innerHTML = processSteps
    .map(({ title, tagline }, index) => {
      const isLast = index === processSteps.length - 1;
      const cardStyle = isLast ? "background:var(--bl);color:var(--on);border-color:var(--bl)" : "";
      const numberColor = isLast ? "inherit" : "var(--bl)";
      return `<a class="card" href="#services" style="${cardStyle}"><span style="font-weight:800;font-size:26px;color:${numberColor}">0${index + 1}</span><h3 style="margin-top:8px">${title}</h3><p style="margin-top:6px;font-size:14.5px;opacity:.8">${tagline}</p></a>`;
    })
    .join("");
}

function setupInquiryForm() {
  const form = select("#f");
  const confirmation = select("#flow");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.style.display = "none";
    confirmation.classList.add("on");
    confirmation.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function setupMenu() {
  const burger = select(".burger");
  const menu = select(".links");

  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

function showPage() {
  const requested = location.hash.slice(1);
  const page = pages.includes(requested) ? requested : "home";

  document.querySelectorAll("[data-page]").forEach((section) => {
    const target = section.dataset.page;
    const visible = target === page || (target === "*" && page !== "contact");
    section.style.display = visible ? "" : "none";
  });

  document.querySelectorAll(".links a:not(.btn)").forEach((link) => {
    link.classList.toggle("act", link.getAttribute("href") === "#" + page);
  });

  window.scrollTo(0, 0);
}

renderCoreValues();
renderServices();
renderServiceOptions();
renderProcessSteps();
renderWhyCards();
renderWhyHighlights();
renderTeam();
renderIndustries();
renderServicePreview();
renderProcessPreview();
setupInquiryForm();
setupMenu();
showPage();
window.addEventListener("hashchange", showPage);
