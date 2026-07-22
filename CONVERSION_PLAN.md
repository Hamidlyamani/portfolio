# elyamani.me — Conversion Plan & Copy (v2)

**Positioning:** Experienced web developer — not a "website builder". Builds sites & platforms, integrates AI & automation, solves problems in complex apps and architectures.
**Audience:** Business owners (primary funnel) + recruiters (secondary path: CV, skills, timeline).
**Language:** French default, EN toggle in header. No pricing. No fabricated proof.

---

## 1. Strategic notes (read before implementing)

**1.1 Dual audience works only with a clear hierarchy.** The page flow sells to clients; recruiters get dedicated exits (CV button in About, tech arsenal, timeline). Don't let recruiter content interrupt the client funnel.

**1.2 The free homepage offer is strong but dangerous as written.** "I build your full homepage for free" will attract freeloaders and cost you 10–20 unpaid hours per lead. Scope it: a **free homepage design (maquette/prototype) delivered in 72h** — visual, personalized, enough to prove your value — with the coded version part of the paid project. Same persuasion power, 10× less cost. The copy below uses this scoped version; widen it later if you disagree.

**1.3 "Show my arms" is a translation trap.** In English it means showing your physical arms. Use **"My Arsenal" / "Mon arsenal"** — same intent, no comedy.

**1.4 Unchanged from v1:** no fake urgency (use "devis sous 24h"), no invented testimonials, delete every "not a real app" disclaimer (neutral `Démo` badge instead), fix the contact form always-success bug, footer, og:image old domain, alt texts, prerender for SEO.

---

## 2. Page structure

| # | Section | Job |
|---|---------|-----|
| 1 | Hero (kept: big-word effect) | Wow + one-line value + small CTA |
| 2 | About + Timeline (reworked content) | Credibility, CV button for recruiters |
| 3 | Expertises (3 offers) | Client-language services |
| 4 | Réalisations (all projects, collapsed) | Proof of capability |
| 5 | Offre : votre page d'accueil gratuite | Lead magnet |
| 6 | Arsenal (collapsed tech logos) | Recruiter/tech-buyer proof |
| 7 | Processus | Removes uncertainty |
| 8 | Contact | WhatsApp + form, réponse 24h |

Header: logo · name · **language select (FR/EN)** · CTA "Devis gratuit".

---

## 3. Copy — section by section

### 3.1 Hero — KEEP the big "WEB DEVELOPER" effect
Keep the oversized animated words (fix the visual glitch where "web web" renders as text). Under them, add one small line + one small CTA:

> **FR (small text):** J'aide les entreprises à construire des plateformes web rapides, intelligentes et fiables.
> **FR (small CTA):** Discutons de votre projet →
> **EN:** I help businesses build fast, intelligent, reliable web platforms. / Let's talk about your project →

Header CTA becomes "Devis gratuit" (the resume moves to About).

### 3.2 About + horizontal timeline (kept, content rewritten)
About text:

> **FR:** Je suis Hamid El Yamani, développeur web à Marrakech. Je conçois des plateformes complètes — du front-end soigné aux architectures backend complexes — et j'intègre l'IA là où elle apporte une vraie valeur. Mon code est public : vérifiez mon travail avant de me contacter.
> **Buttons:** [📄 Voir mon CV] [💬 Me contacter]

Timeline content: replace the "started coding on a phone in 2020" journey with **capability milestones** — same component, new events:

> 1. **Fondations full-stack** — Maîtrise front + back : React, Next.js, Laravel, Spring Boot.
> 2. **Plateformes complètes** — TAMAIOZ, Olino : réservation, e-commerce, dashboards, messagerie.
> 3. **Temps réel & architecture** — Pixo : synchronisation WebSocket multi-utilisateurs.
> 4. **Intelligence artificielle** — Roomly, Ebooksy : recommandation ML, intégration OpenAI.
> 5. **Aujourd'hui** — Disponible pour vos projets : sites, plateformes, IA & automatisation.

Rule: no dates that scream "junior", no learning anecdotes. Each milestone = a capability proven by a named project.

### 3.3 Expertises (replaces Services) — 3 offers matching your positioning

> **Titre FR:** Mes expertises
> **Sous-titre:** Trois domaines, un objectif : des solutions qui fonctionnent et qui durent.

**01 — Sites & plateformes web**
> FR: De la vitrine professionnelle à la plateforme sur mesure (réservation, e-commerce, dashboards) : des produits rapides, sécurisés et pensés pour convertir vos visiteurs en clients.
> EN: From professional showcase sites to custom platforms — fast, secure products built to turn visitors into customers.

**02 — Intégration IA & automatisation**
> FR: J'intègre l'intelligence artificielle dans vos outils : recommandations personnalisées, chatbots, génération de contenu, automatisation des tâches répétitives. L'IA au service de votre productivité, pas comme gadget.
> EN: AI built into your tools — recommendations, chatbots, content generation, workflow automation. AI as productivity, not gimmick.

**03 — Résolution de problèmes complexes**
> FR: Application lente, architecture fragile, bug que personne n'arrive à résoudre ? J'analyse, je diagnostique et je répare les systèmes complexes — performance, sécurité, scalabilité.
> EN: Slow app, fragile architecture, a bug nobody can fix? I diagnose and repair complex systems — performance, security, scalability.

Each card CTA: **"Demander un devis →"**. Fix the SEO icon bug on card 3.

### 3.4 Réalisations — keep ALL projects, collapsed
Show the 5 strongest expanded (Roomly, Pixo, TAMAIOZ, Olino, Ebooksy), rest behind:

> **Button FR:** Voir tous les projets (+5)

Every card rewritten as **Problème / Solution / Résultat** (examples in v1 stay valid — Olino, Roomly). Delete all "not a real app" sentences; `Démo` badge where honest; tech logos as a discreet row per card; fix alt texts.

### 3.5 Lead magnet — free homepage (scoped)
> **Titre FR:** Votre page d'accueil, gratuite.
> **FR:** Vous hésitez ? Je conçois gratuitement la maquette complète de votre future page d'accueil, personnalisée pour votre activité, sous 72h. Vous voyez exactement ce que vous obtiendrez avant de dépenser un dirham. Si elle vous plaît, on construit la suite ensemble.
> **CTA:** Recevoir ma page d'accueil gratuite
> **EN:** Not sure yet? I'll design your full homepage mockup, personalized to your business, free, within 72h. See exactly what you'd get before spending anything.

### 3.6 Arsenal — tech logos kept, collapsed
> **Button FR:** ⚔️ Voir mon arsenal  /  **EN:** ⚔️ My Arsenal

Expands the full logo wall, grouped: Front-end / Back-end / IA & Data / Outils. Fix the duplicate alt="html" on every logo.

### 3.7 Processus
> 1. **Appel découverte (gratuit, 30 min)** — On clarifie votre besoin.
> 2. **Proposition + devis sous 24h** — Périmètre, délais, étapes. Sans surprise.
> 3. **Design & développement** — Points d'étape réguliers, vous suivez tout.
> 4. **Lancement + 30 jours de support inclus.**

### 3.8 Contact
> **Titre FR:** Parlons de votre projet
> **Sous-titre:** Décrivez votre besoin en deux phrases — devis gratuit sous 24h. Pressé ? WhatsApp, c'est encore plus rapide.
> **WhatsApp (above form):** 💬 Discuter sur WhatsApp
> **Bouton form:** Envoyer ma demande

Footer: `© 2026 Elyamani Hamid — Développeur web, Marrakech` (replaces "grab what you want ;)"). Socials: LinkedIn, GitHub, WhatsApp (+ Behance optional; Instagram out of the client block).

---

## 4. Code changes

| File | Change |
|------|--------|
| `hero.jsx` | Keep big-word animation, fix "web web" glitch; add small text + small CTA; header: language select + "Devis gratuit"; resume link out |
| `nav.jsx` / header | **FR/EN select input**; i18n context (react-i18next or a light JSON dictionary + Context) |
| `about.jsx` | New text; **CV button** (opens elyamani_hamid.pdf); contact button |
| `charte.jsx` | Same animation, new milestone content (3.2) |
| `services.jsx` | 3 expertises; icon bug fix; per-card CTA |
| `progects.jsx` | All projects kept; top 5 expanded + "Voir tous les projets" collapse; cards → Problème/Solution/Résultat; disclaimers out; alt fixes |
| New `offer.jsx` | Free homepage section (3.5) |
| `Technologies.jsx` | Collapsed behind "Mon arsenal" button, grouped categories, alt fixes |
| New `process.jsx` | Section 3.7 |
| `contact.jsx` | New copy; **fix always-success bug**; WhatsApp primary; footer |
| `App.jsx` | New order; reduce/remove 1.4s forced loader |
| `index.html` | `lang="fr"`, FR meta, fix og:image domain |

## 5. Phases

1. **Now:** structure + FR copy + bug fixes + collapse behaviors.
2. **Next:** EN dictionary + toggle wiring; prerender/SSG (crawlers currently see an empty shell).
3. **Off-site:** use the free-homepage offer to land 2–3 real clients, collect testimonials + one measurable result, add "Ils m'ont fait confiance". Still your highest-ROI task.
