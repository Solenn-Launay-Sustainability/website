# Documentation : Structure de la one-page

## Charte graphique

Couleur principale: `#377075`

Palette de couleurs:

* Dégradé 1: `#65B1B7`
* Dégradé 2: `#AED7DA`
* Contraste: `#795837`

Police générale : `Calibri` (Body)

Police du slogan : `Monotype Corsiva`

### CSS variables (exemples)

```css
:root {
  --radius: 0.625rem;
  --radius-sm: calc(var(--radius) - 6px);
  --radius-md: calc(var(--radius) - 4px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --background: #f5fafb;          /* fond général très clair */
  --foreground: #163236;          /* texte principal */
  --card: #ffffff;
  --card-foreground: #163236;
  --popover: #ffffff;
  --popover-foreground: #163236;

  --primary: #377075;             /* couleur principale */
  --primary-foreground: #fdfefe;  /* texte sur bouton primary */

  --secondary: #65b1b7;           /* dégradé 1 */
  --secondary-foreground: #07353a;

  --muted: #aed7da;               /* dégradé 2 – fonds doux */
  --muted-foreground: #18454a;

  --accent: #795837;              /* contraste chaud */
  --accent-foreground: #fffaf1;

  --destructive: #b63a3a;

  --border: #d4e5e7;
  --input: #d4e5e7;
  --ring: #377075;
}
```

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

* CTA principal : **“Get in touch”** (ancre vers `#contact`)
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

3 cartes : raw format desktop, carousel on mobile.

1. **Raise awareness** + icon

   > Engage & level up knowledge of your staff, management, stakeholders…

2. **Identify Impacts, Risks & Opportunities (I.R.O.)** + icon
   > Assess your main environmental impacts & risks, identify key opportunities.

3. **Establish & deliver roadmap** + icon

   > Define priority targets, build a roadmap and support implementation.

* Bloc "Roadmap & implementation" en dessous (idem version complète/courte) :

  1. Definition of the roadmap to reach your priority targets
      > Choose relevant KPIs to measure progress ... etc.

  2. Implementation of the roadmap, with a tailored follow-up
      > I help your team ... etc.

---

## 4. Topics & sectors – `#topics`

**Objectif** : lister clairement sur **quoi** et **dans quels secteurs** elle intervient.

Contenu :

* Titre : `Topics & sectors I work on`
* Sous-titre : petite phrase du type

  > Whatever your own business sector, below topics are, most probably, relevant for you.
  > If you do work in below listed sectors, then we could have a specific approach with sectorial workshops, addressing transversal topics.

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

> Climate, Circular Economy, Biodiversity and food are directly facilitated by me.
> I work with a network of experts to thoroughly cover the other topics.

---

## 5. Formats / Ways of working – `#formats`

**Objectif** : montrer les **4 grands formats**, sans surcharger avec un tableau.

Titre de la section :
  > We define what best suits your situation and objectives

Sous-texte :
  > Climate is one among various focus. Together we pick the topic and the format that best fits your needs.

### Cartes de formats

4 cartes, sur une grille responsive (2×2 sur tablette, 4 en ligne sur grand écran, 1 par ligne sur mobile ou que en carousel).

**Layout** : entete avec image/icon + titre + durée en highlight, puis 1–2 phrases de description, puis liste à puces.

* **Conference**

  * `60 to 90 min`
  * 1–2 phrases : overview, key messages, large audience.
  * Plus description avec des keypoints
  * Examples: Add logo of Climate Pitch, The Circular Economy Challenge (all with link)

* **Card-based workshops**

  * `3h to 3h30`
  * 1–2 phrases : interactive, co-construction, serious game.
  * Plus description avec des keypoints
  * Examples: Add logo of Climate Fresk, The Biodiversity Collage, The Circular Economy Collage, The Food Collage (all with link)

* **Bespoke workshops**

  * `Half-day`
  * 1–2 phrases : tailored to your challenges and teams.
  * Plus description avec des keypoints

* **Add-on modules**

  * `15 to 30 min`
  * 1–2 phrases : short modules that can complement other formats (e.g. mini carbon assessment, mosaics of ecosystems).
  * Plus description avec des keypoints

### My workshops & conferences (logos + links)

* **Workshops**

  * Climate Fresk
  * The Biodiversity Collage
  * The Circular Economy Collage
  * The Food Collage

* **Conferences**

  * Climate Pitch
  * The Circular Economy Challenge

Layout :

* Sur desktop : deux blocs horizontaux “Workshops” / “Conferences” avec une grille de logos.
* Sur mobile : les blocs passent en colonne.

---

## 6. Next public events

Objectif : permettre aux visiteurs de s’inscrire facilement aux prochains ateliers / conférences publics pour “la voir en action”.

Sous-titre (exemple)
> Next public event(s) to see me in action

Contenu : liste de 0 à N événements.

Pour chaque événement, prévoir :

* **Title** : nom de l’atelier ou de la conférence

    ex. `Climate Fresk – online workshop`

* **Date** : format lisible (ex. `12 March 2026`)
* **Time** : format lisible (ex. `6:00 PM – 9:30 PM CET`)
* **Location** :

    `Online` ou ville + lieu

* **Short description** :

    1–2 phrases max, ex. `A 3h30 interactive workshop to understand climate change causes and impacts, and explore levers for action.`

* **Registration link** (bouton) :

    `Register` / `Sign up` → lien vers la page d’inscription de l'event

Layout :

* Sur **desktop** : cartes d’événements en 2 colonnes si plusieurs dates, ou 1 colonne si 1 évènement.
* Sur **mobile** : 1 carte par ligne, en scroll vertical.

Comportement quand il n’y a pas d’évènement prévu :

* soit ne pas afficher le bloc du tout,
* soit afficher un petit texte :
  > No public events are currently scheduled.  
  > If you would like to organise a workshop or a conference, feel free to *get in touch* -> `#contact`.

---

## 7. They trusted me – `#testimonials`

**Objectif** : preuve sociale.

* Titre : `They trusted me`
* Bloc logos clients avec liens
* 1–2 témoignages texte

---

## 8. Contact & footer – `#contact`

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

* À côté ou en dessous :

  * Tel
  * Email (cliquable)
  * LinkedIn

### Footer

* mention éco-conception : `This website is ecodesigned – Score: A`
* © + lien mentions légales.
