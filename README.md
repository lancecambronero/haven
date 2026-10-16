**Haven Ventures Website Prototype**

A minimalist, conversion-focused website for Haven Ventures, a managed virtual assistance and business support company. This repository holds the working prototype, built to be reviewed, improved, and eventually taken live.

> Status: Prototype. Content, visuals, and integrations are still being developed (see [Development Roadmap](#development-roadmap)).



1. Purpose

The site positions Haven as a managed business support partner, not a VA marketplace. The message is built on four ideas:

People + Process + Management + Technology

The primary goal is to generate qualified client inquiries.



2. Files

 File | Description 
| `index.html` | The website (rename of `haven.html`). Must keep this exact name for GitHub Pages. |
| `presentation.html` | Slide deck used to present the prototype to the IT team. |
| `README.md` | This document. |



3. Site Structure

The site has six pages, shown one at a time through the URL hash (for example `#services`).

| Page | Contents |
|---|---|
| Home | Hero, industries strip, About (mission, vision, core values), services overview, "How It Works" overview |
| Why Haven | Six trust cards and four supporting points (managed model, accountability, technology, long-term partnership) |
| Services | Expandable service categories and the full six-step managed process |
| Our Team | Departments and team members (photos are placeholders) |
| Industries | Seven supported industries and the "And growing" statement |
| Contact | Client inquiry form designed as the start of a sales process |

A final call-to-action and a footer appear on every page (the call-to-action is hidden on Contact).



4. Website Flow

Visitor journey


Understand Haven → Explore Services → Understand the Process
→ Build Trust → See Supported Industries → Submit an Inquiry


Inquiry workflow (target setup)


Inquiry Submitted → CRM → Internal Notification → Follow-Up → Discovery Call


Right now the form only displays this workflow after submission. It does not send data anywhere yet. Connecting it is a main development task.

Client process shown on the site

1. Discovery
2. Needs Assessment
3. Talent Matching
4. Onboarding
5. Deployment
6. Management & Quality Assurance (highlighted as Haven's main differentiator)



5. Technology

- HTML for structure
- CSS for styling (color variables, grid and flexbox, media queries, dark mode support)
- JavaScript (no framework) for page switching, the mobile menu, form handling, and building cards from data lists
- Inline SVG for icons
- Google Fonts (Manrope) is the only external resource
- The logo is embedded inside the file

Editing content

Services, team members, values, industries, and process steps live in lists near the bottom of `index.html` (look for `const S=`, `const T=`, `const V=`, `const N=`, `const P=`). Edit the text inside the quotes and keep the brackets, quotes, and commas intact. A missing character can stop the script and hide sections.

---

6. Design System

- Colors: blue (brand and accents), white (backgrounds), black or dark charcoal (text) only
- Typography: Manrope, with large headlines and short paragraphs
- Style: bordered cards, line icons, minimal shadows, subtle animations only
- Responsive: desktop, tablet, and mobile, with a hamburger menu
- Accessibility: visible keyboard focus and reduced-motion support



7. Placeholders

Real information has not been provided for the items below, so none of it is invented:

- Team photos
- Contact email, phone, and social links in the footer
- Statistics, testimonials, client logos, awards, and certifications (none are shown)

---

8. Development Roadmap #development-roadmap

Many changes are expected during development. Planned additions:

- Metrics on the landing page: added only when real, verifiable numbers exist
- Richer visuals: custom illustrations or imagery within the blue, white, and charcoal palette
- Interactive sections: for example, a service explorer or a simple support-needs selector
- Animations: subtle scroll and entrance effects, kept restrained
- Team photos and final contact details
- Real page URLs (for example `/services`) instead of hash-based pages
- Form backend and CRM connection
- Analytics and SEO setup

---

9. Hosting Suggestions

Prototype stage: GitHub Pages
- Free for public repositories
- Updates go live after each commit and sync
- Supports a custom domain through DNS records (A records to GitHub, plus a `www` CNAME)

Production option: Hostinger + GitHub
- Keep the code in GitHub as the source of truth, with version history and review.
- Use Hostinger for the domain, hosting, and email addresses.
- Deploy from GitHub to Hostinger (check Hostinger's current Git deployment options when setting up).
- Hostinger also makes it easier to add a backend later, such as form handling.

Things to confirm with IT
- Domain ownership and DNS access
- HTTPS enabled
- Backups and rollback process
- Who can publish changes

---

10. CRM

The CRM has not been chosen yet. It will be selected after comparing options.

Evaluation criteria
- Receives web form submissions directly or through an integration
- Internal notifications (email or chat)
- Pipeline stages that match Haven's process (inquiry, follow-up, discovery call, onboarding)
- Task and follow-up reminders
- Cost for a small team, and room to grow
- Ease of use for non-technical staff
- Data privacy and security for client information

Integration approaches to consider
1. Embedded CRM form in the Contact page (fastest)
2. Website form sending data to the CRM through its API or a connector
3. Form service (a hosted form tool) that forwards to the CRM and sends notifications

Once a CRM is chosen, the form fields (name, company, email, industry, website, services needed, number of professionals, challenges, start date, additional information) should be mapped to CRM fields.

---

11. Maintenance Notes

- Keep the main file named `index.html`, all lowercase.
- Test on desktop and mobile after each change.
- Hard refresh (Ctrl+F5) to avoid seeing a cached version.
- Commit small changes with clear messages.

---

© 2026 Haven Ventures. All rights reserved.
