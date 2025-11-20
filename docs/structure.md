# Documentation : Structure de la one-page

## Structure globale de la one-page

**Sections & ancres :**

1. `#hero` – Hero / promesse
2. `#why` – Why sustainability matters (+ schéma “Risks…”)
3. `#journey` – Your sustainability journey (+ schéma “Raising awareness…”)
4. `#topics` – Topics & sectors
5. `#formats` – Formats / Ways of working (cartes)
6. `#testimonials` – They trusted me
7. `#contact` – Contact + éco-conception

---

## 1. Hero – `#hero`

**Objectif** : poser tout de suite *qui elle est* + *ce qu’elle fait* + un CTA.

Contenu :

* Titre : `Your sustainability advisor – from Why to How`
* Sous-titre : `The engineer of your transition`
* Petit paragraphe (2–3 phrases) :

  > I help organisations understand and anticipate bioclimatic risks, reduce their environmental impacts and enhance the robustness of their business models.

* CTA principal : **“Book a call”** (ancre vers `#contact` ou Cal.com)
* CTA secondaire : **“Discover my approach”** (ancre vers `#journey`)
* ? Dans un coin : mini bloc contacts (tel, mail, LinkedIn) + badge

  > This website is ecodesigned – Score: A

---

## 2. Why sustainability matters – `#why`

**Objectif** : expliquer brièvement les **risques + opportunités**, puis proposer le **grand schéma “Risks…”**.

Mise en page : 1 colonne texte + schema en dessous sur desktop, shema clickable et zoomable sur mobile.

**Texte :**

* Titre : `Why sustainability matters for your organisation`
* Paragraphe(s) :

  * Enjeux climatiques & environnementaux = risques (juridiques, financiers, opérationnels, réputation…)
  * Mais aussi opportunités (efficience, innovation, attractivité, financement…).

**schéma :**

* Le visuel “Environment and climate challenges, sources of risks but also opportunities for your organisation”.

En HTML :

```html
<section id="why">
  <div>
    <div class="why-text">
      <h2>Why sustainability matters</h2>
      <p>Environment and climate challenges are both sources of risks and opportunities for your organisation...</p>
    </div>

    <figure class="why-diagram">
      <img src="/img/risks-opportunities.png"
           alt="Main risks from climate and environmental pressures and related opportunities">
      <figcaption>Key risks and opportunities arising from climate and environmental pressures.</figcaption>
    </figure>
  </div>
</section>
```

> Sur mobile : texte d’abord, image ensuite, avec possibilité de zoom (lightbox ou pinch-zoom natif).

---

## 3. Your sustainability journey – `#journey`

**Objectif** : montrer le parcours (“Raising awareness / Identification of main impacts / Ideation / Roadmap / Implementation phase”).

* Titre : `Your sustainability journey with me`
* Sous-titre : `From awareness to implementation`

**Une version complète** → toutes les cartes détaillées comme dans ton visuel en carousel.

1. **Raising awareness** + icon

    > Engage & level up knowledge of your staff, management and stakeholders.

2. **Identify main impacts** + icon

    > Assess your main environmental impacts & risks, identify key opportunities.

3. **Ideation of projects** + icon
    > Unlock creativity in a structured framework to address main impacts & create opportunities.

4. **Selection of targets** + icon

    > Decide which projects are **relevant** and classify them by **priority**.

5. **Roadmap for priority targets** + icon

    > Identify **timeline**, **resources**, stakeholders, **costs**, steps, etc.

6. **Implementation phase** + icon

    > Follow up & support the **execution** of your “I.R.O.” projects.

**Une version simplifiée** → quelques cartes plus courtes, condensées

3 cartes : raw format desktop, carousel on mobile.

1. **Raise awareness** + icon

   > Engage & level up knowledge of your staff, management, stakeholders…

2. **Identify Impacts, Risks & Opportunities (I.R.O.)** + icon
   > Assess your main environmental impacts & risks, identify key opportunities.

3. **Establish & deliver roadmap** + icon

   > Define priority targets, build a roadmap and support implementation.

* Bloc "Roadmap & implementation" en dessous (idem version complète/courte) :

  1. Definition of the roadmap to reach your priority targets
      > Choose relevant KPIs to measure progress
        ... etc.

  2. Implementation of the roadmap, with a tailored follow-up
    > I help your team
      ... etc.

---

## 4. Topics & sectors – `#topics`

**Objectif** : lister clairement sur **quoi** et **dans quels secteurs** elle intervient.

Contenu :

* Titre : `Topics & sectors I work on`
* Sous-titre : petite phrase du type

  > I cover a broad range of sustainability topics, directly or with trusted experts.

Deux blocs :

* **Topics :**

  * Climate
  * Circular Economy
  * Biodiversity
  * Planetary Boundaries
  * Adaptation

* **Sectors :**

  * Construction & Energy
  * Digital, Textiles & Plastics
  * Agri-Food, Food, Water & Ocean

Petit texte en bas :

> Climate, Circular Economy and Biodiversity are directly facilitated by me.
> I work with a network of experts to thoroughly cover the other topics.

---

## 5. Formats / Ways of working – `#formats`

**Objectif** : montrer les **4 grands formats**, sans surcharger avec un tableau.

Titre de la section :

`We define what best suits your situation and objectives`
Sous-texte :
`Climate is one among various focus. Together we pick the topic and the format that best fits your needs.`

### Cartes de formats

4 cartes, sur une grille responsive (2×2 sur tablette, 4 en ligne sur grand écran, 1 par ligne sur mobile ou que en carousel).

**Layout** : entete avec image/icon + titre + durée en highlight, puis 1–2 phrases de description, puis liste à puces.

* **Conference**

  * `60 to 90 min`
  * 1–2 phrases : overview, key messages, large audience.
  * Plus description avec des keypoints

* **Card-based workshops**

  * `3h to 3h30`
  * 1–2 phrases : interactive, co-construction, serious game.
  * Plus description avec des keypoints

* **Bespoke workshops**

  * `Half-day`
  * 1–2 phrases : tailored to your challenges and teams.
  * Plus description avec des keypoints

* **Add-on modules**

  * `15 to 30 min`
  * 1–2 phrases : short modules that can complement other formats (e.g. mini carbon assessment, mosaics of ecosystems).
  * Plus description avec des keypoints

---

## 6. They trusted me – `#testimonials`

**Objectif** : preuve sociale.

* Titre : `They trusted me`
* Bloc logos clients
* 1–2 témoignages texte

---

## 7. Contact & footer – `#contact`

**Objectif** : pousser à l’action.

* Titre : `Get in touch`
* Petit texte :

  > Whether you already have a project in mind or simply want to explore options, feel free to reach out.

* Formulaire :

  * **Name and First Name**
  * **Email**
  * **Who are you?** (menu déroulant ou champ libre)
    * Private company
    * Public company or authority
    * Individual person
    * Others
  * **Main reason for the contact request** (menu déroulant ou champ libre)
    * General question
    * Request information
    * Interested by a workshop or a conference (if you know which one, please add its name)
  * **Tell me more about your demand** (champ libre)
    * Texte d'aide : *The more information you provide, the clearer my answer will be.*

  **Message de confirmation après envoi :**
      > Thanks for your message and interest. I will do my best to answer shortly. Solenn
        On peut meme mettre des confetit :)

* À côté ou en dessous :

  * Tel
  * Email (cliquable)
  * LinkedIn

Footer :

* mention éco-conception : `This website is ecodesigned – Score: A`
* © + lien mentions légales.
