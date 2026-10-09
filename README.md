# Adv. Arjun Deshmukh — Premium Advocate & Legal Consultant Profile Website

A high-end, luxury editorial personal-profile website built for **Adv. Arjun Deshmukh** (Advocate & Legal Consultant, Pune, Maharashtra).

This website serves as a high-end prototype and sales demonstration designed to approach senior advocates and law firms. It reflects the visual standard, authority, and conversion focus of a ₹1–3 Lakh bespoke advocate digital office.

---

## 🏛️ Brand & Positioning

- **Advocate**: Adv. Arjun Deshmukh
- **Title**: Advocate & Legal Consultant
- **Location**: Shivajinagar, Pune, Maharashtra
- **Experience**: 18+ Years of Legal Practice
- **Bar Council**: Bar Council of Maharashtra & Goa (Enrolled 2008)
- **Tagline**: *"Clarity When It Matters Most."*
- **Positioning**: Experienced legal counsel for individuals, families, property owners, entrepreneurs, and businesses across Pune.

---

## 🎨 Design System & Visual Identity

- **Deep Navy (`#0B1726`)**: Personal authority, luxury dark containers, hero accents, footer.
- **Warm Ivory (`#F7F5F0`)**: Editorial warmth, replacing harsh white backgrounds.
- **Muted Brass / Champagne Gold (`#B89B5E`)**: Refined accents for badges, rating stars, active states, and buttons.
- **Charcoal (`#171A1F`) & Slate (`#68717C`)**: High-contrast, clean typography.
- **Typography**: *Playfair Display* & *Cormorant Garamond* (Serif headings) + *Plus Jakarta Sans* & *Inter* (Sans-serif body/UI).

---

## 🌟 Key Features

1. **Editorial Multi-Page Architecture**:
   - `/` — Homepage (Hero, Trust Strip, About preview, 9 Practice Areas, Featured Property Law, Practice Philosophy, 4-Step Process, Experience Timeline, Verified Testimonials, Consultation CTA, Insights preview, FAQ accordion).
   - `/about` — Detailed biography, Bar Council credentials, office environment, and core values.
   - `/practice-areas` — Searchable and filterable directory across 9 practice areas.
   - `/practice-areas/:slug` — Deep-dive pages for each practice area with checklists, Pune local regulatory context (PMC, PCMC, Haveli Sub-Registrar, MahaRERA), process breakdown, and sticky booking sidebar.
   - `/experience` — 18+ years timeline (2008–2026), anonymized representative matters, and statutory court jurisdictions.
   - `/insights` & `/insights/:slug` — 6 in-depth legal guides with reading times, key takeaways, table of contents, and author cards.
   - `/testimonials` — Client feedback from Pune localities (Baner, Hinjawadi, Kothrud, Viman Nagar) with an interactive review submission form.
   - `/contact` — Chamber address near Shivajinagar District Court, office hours, interactive inquiry form with legal matter selection, visual landmark locator, and direct Call/WhatsApp links.
   - `/consultation` — 5-step appointment booking wizard with reference ID generation (`AD-PUN-2026-XXXX`), document preparation checklist, and confetti celebration.

2. **Lead Generation & Conversion**:
   - **Sticky Mobile Bottom Bar**: Fixed `[ 📞 CALL ] [ 💬 WHATSAPP ] [ 📅 BOOK CONSULTATION ]` on mobile viewports.
   - **Desktop Floating WhatsApp Widget**: Bottom-right assistant with online status indicator and quick-inquiry box.
   - **Lead Conversion Event Tracker**: Logs `consultation_requested`, `whatsapp_clicked`, `call_clicked`, etc., displaying non-intrusive toast notifications.

3. **Local Pune SEO & BCI Compliance**:
   - Pre-configured `JSON-LD` `LegalService` schema in `index.html`.
   - Pune localities naturally integrated (`Shivajinagar, Baner, Wakad, Hinjawadi, Kothrud, Aundh, Viman Nagar, Kharadi, PCMC`).
   - Bar Council of India ethics disclaimer & privacy modal.

4. **100% Turnkey Data Architecture**:
   - Centralized data in `src/data/advocateData.ts`, `src/data/practiceAreasData.ts`, and `src/data/insightsData.ts` for rapid rebranding when pitching to prospective lawyers.

---

## 💻 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM v7
- **Animations / Visual Effects**: Canvas Confetti, CSS Transitions, Backdrop Filter Glassmorphism

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/uranicPluto/advocate-profile-website.git
cd advocate-profile-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
npm run preview
```

---

## 📜 Legal Disclaimer

Information provided on this website is for general informational purposes only and should not be construed as legal advice. Viewing this website or contacting the office does not create an advocate-client relationship. All representative matters and client reviews are presented in anonymized form in compliance with Bar Council of India regulations and Section 126 of the Indian Evidence Act.
