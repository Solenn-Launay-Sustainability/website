# **Documentation: One-page Structure**

## **Global structure of the one-page**

**Sections & anchors:**

1. `#hero` – Hero / promise
2. `#why` – Why sustainability matters (+ “Risks…” diagram)
3. `#journey` – Your sustainability journey (+ “Raising awareness…” diagram)
4. `#topics` – Topics & sectors
5. `#formats` – Formats / Ways of working (cards)
6. `#testimonials` – They trusted me
7. `#contact` – Contact + eco-design

---

## **1. Hero – `#hero`**

**Goal:** immediately show *who she is* + *what she does* + a CTA.

Content:

* Title: `Your sustainability advisor – from Why to How`

* Subtitle: `The engineer of your transition`

* Short paragraph (2–3 sentences):

  > I help organisations understand and anticipate bioclimatic risks, reduce their environmental impacts and enhance the robustness of their business models.

* Primary CTA: **“Get in touch”** (anchor to `#contact`)

* Secondary CTA: **“Discover my approach”** (anchor to `#journey`)

* Optional: in a side corner → mini contact block (phone, email, LinkedIn) + badge

  > This website is ecodesigned – Score: A

---

## **2. Why sustainability matters – `#why`**

**Goal:** briefly explain **risks + opportunities**, then show the **“Risks…” diagram**.

Layout: 1 text column + diagram below on desktop; diagram clickable & zoomable on mobile.

**Text:**

* Title: `Why sustainability matters for your organisation`
* Paragraph(s):

  * Climate & environmental challenges = risks (legal, financial, operational, reputational…)
  * But also opportunities (efficiency, innovation, attractiveness, funding…)

**Diagram:**

* The visual “Environment and climate challenges, sources of risks but also opportunities for your organisation”.

HTML reference:

```html
<section id="why">
  <div>
    <div class="why-text">
      <h2>Why sustainability matters</h2>
      <p>Environment and climate challenges are both sources of risks and opportunities for your organisation...</p>
    </div>

    <figure class="why-diagram">
      <img src="/img/risks-opportunities.webp"
           alt="Main risks from climate and environmental pressures and related opportunities">
      <figcaption>Key risks and opportunities arising from climate and environmental pressures.</figcaption>
    </figure>
  </div>
</section>
```

> On mobile: text first, diagram after, with zoom/lightbox support.

---

## **3. Your sustainability journey – `#journey`**

**Goal:** show the process (“Raising awareness / Identification of main impacts / Ideation / Roadmap / Implementation phase”).

* Title: `Your sustainability journey with me`
* Subtitle: `From awareness to implementation`

**3 cards**: raw layout on desktop, carousel on mobile.

1. **Raise awareness** + icon

   > Engage & level up knowledge of your staff, management, stakeholders…

2. **Identify Impacts, Risks & Opportunities (I.R.O.)** + icon

   > Assess your main environmental impacts & risks, identify key opportunities.

3. **Establish & deliver roadmap** + icon

   > Define priority targets, build a roadmap and support implementation.

**“Roadmap & implementation” block below (same for full/short version):**

1. **Definition of the roadmap to reach your priority targets**

   > Choose relevant KPIs to measure progress … etc.

2. **Implementation of the roadmap, with a tailored follow-up**

   > I help your team … etc.

---

## **4. Topics & sectors – `#topics`**

**Goal:** clearly list the areas she works on and the sectors she supports.

Content:

* Title: `Topics & sectors I work on`
* Subtitle (example):

  > Whatever your own business sector, below topics are, most probably, relevant for you.
  > If you do work in below listed sectors, then we could have a specific approach with sectorial workshops, addressing transversal topics.

Two blocks:

**Topics:**

* Climate
* Circular Economy
* Biodiversity
* Planetary Boundaries
* Adaptation

**Sectors:**

* Construction & Energy
* Digital, Textiles & Plastics
* Agri-Food, Food, Water & Ocean

Bottom text:

> Climate, Circular Economy, Biodiversity and food are directly facilitated by me.
> I work with a network of experts to thoroughly cover the other topics.

---

## **5. Formats / Ways of working – `#formats`**

**Goal:** present the **4 main formats**, without overloading with tables.

Section title:

> We define what best suits your situation and objectives

Subtitle:

> Climate is one among various focus. Together we pick the topic and the format that best fits your needs.

### **Format cards**

4 cards, responsive grid (2×2 on tablet, 4-in-line on desktop, 1-per-line or carousel on mobile).

**Layout:** header with image/icon + title + duration highlight, then 1–2 description lines + bullet list.

---

### **Conference**

* `60 to 90 min`
* 1–2 sentences: overview, key messages, large audience.
* Additional bullet-point description.
* **Examples:** add logos of *Climate Pitch*, *The Circular Economy Challenge* (all with links)

---

### **Card-based workshops**

* `3h to 3h30`
* 1–2 sentences: interactive, co-construction, serious game.
* Additional bullet-point description.
* **Examples:** add logos of *Climate Fresk*, *The Biodiversity Collage*, *The Circular Economy Collage*, *The Food Collage* (all with links)

---

### **Bespoke workshops**

* `Half-day`
* 1–2 sentences: tailored to your challenges and teams.
* Additional bullet-point description.

---

### **Add-on modules**

* `15 to 30 min`
* 1–2 sentences: short modules that complement other formats (e.g. mini carbon assessment, mosaics of ecosystems).
* Additional bullet-point description.

---

### **My workshops & conferences (logos + links)**

**Workshops:**

* Climate Fresk
* The Biodiversity Collage
* The Circular Economy Collage
* The Food Collage

**Conferences:**

* Climate Pitch
* The Circular Economy Challenge

**Layout:**

* Desktop: two horizontal blocks (“Workshops” / “Conferences”) each with a logo grid.
* Mobile: stacked blocks.

---

## **6. Next public events**

**Goal:** allow visitors to easily register for upcoming workshops / conferences to “see her in action”.

Subtitle (example):

> Next public event(s) to see me in action

Content: list of 0 to N events.

For each event:

* **Title** – workshop or conference name
  e.g., `Climate Fresk – online workshop`
* **Date** – readable format (`12 March 2026`)
* **Time** – (`6:00 PM – 9:30 PM CET`)
* **Location** – `Online` or city + venue
* **Short description** –
  1–2 sentences, e.g.

  > A 3h30 interactive workshop to understand climate change causes and impacts, and explore levers for action.
* **Registration link** –
  `Register` / `Sign up` → event registration page

Layout:

* **Desktop**: event cards in 2 columns if several events, or 1 column if single event.
* **Mobile**: one event card per line, vertical scrolling.

If no upcoming event:

* Option A: hide the block
* Option B: show:

  > No public events are currently scheduled.
  > If you would like to organise a workshop or a conference, feel free to *get in touch* → `#contact`.

---

## **7. They trusted me – `#testimonials`**

**Goal:** social proof.

* Title: `They trusted me`
* Client logos with links
* 1–2 text testimonials

---

## **8. Contact & footer – `#contact`**

**Goal:** drive action.

* Title: `Get in touch`
* Short text:

  > Whether you already have a project in mind or simply want to explore options, feel free to reach out.

### **Form fields:**

* **Name and First Name**
* **Email**
* **Who are you?** (dropdown or free text)

  * Private company
  * Public company or authority
  * Individual person
  * Others
* **Main reason for the contact request** (dropdown or free text)

  * General question
  * Request information
  * Interested in a workshop or conference (if you know which one, please mention its name)
* **Tell me more about your demand** (text area)

  * Helper text: *The more information you provide, the clearer my answer will be.*

**Confirmation message after sending:**

> Thanks for your message and interest. I will do my best to answer shortly. Solenn

### **Side or below:**

* Phone
* Email (clickable)
* LinkedIn

### **Footer**

* Eco-design mention: `This website is ecodesigned – Score: A`
* © + legal notice link
