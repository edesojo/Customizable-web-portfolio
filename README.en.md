Lee esto en [español](https://github.com/edesojo/Customizable-web-portfolio/blob/67b882258fa99da37a7cebd60b03793a7942734a/README.md)
# Customizable Web Portfolio 🚀

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

A clean and professional web portfolio to showcase your CV and projects.  
Made in Astro. **Easy to customize using only 3 files.**

## ✨ Features
* **Fully Responsive:** Looks great on mobile and desktop.
* **Easy Setup:** No need to touch complex HTML/CSS.
* **Modern Design:** Focused on readability and professional impact.

## 🛠️ How to Customize

This portfolio is designed to be 100% customizable without touching the core logic. You only need to edit **3 main files** located in the `src` folder:

### 1. Internationalization & Labels (`./src/i18n/ui.js`)
This file allows you to change the static text and labels that appear throughout the web page (buttons, navigation titles, and section headers). It is perfect for translating your portfolio into different languages.

**Usage:** Update the strings to match your preferred language or tone.

By default, the system is prepared to work with two languages: Spanish (ES) and English (EN).

### 2. Dynamic Content (`./src/config.js`)

This file is the "brain" of your portfolio. It uses a **multi-language JSON-like structure** to populate all sections.

### 🔄 Smart Data Synchronization (Single Source of Truth)

To save you time and prevent errors, this portfolio uses a "Single Source of Truth" system. The personal information defined at the top of `./src/config.js` (under `SITE_DATA`) is automatically shared across the entire website.

#### How it works:
If you update your name, email, or phone number in the header of the file:
1. It will automatically update the **Hero section** (main title).
2. It will update the **Contact section** and footer.
3. It will refresh the **Metadata** (for SEO and browser tabs).

#### Dynamic Variables:
In the UI components you don't need to hardcode your info. You can simply call the variables. For example:
* Use `{fullName}` to display your complete name.
* Use `{SITE_DATA.email}` to display your contact address.

#### Key Sections:
* **Personal Info & Socials:** Basic contact data and social media links. For the `icon` field, use the corresponding name from your icon set (e.g., `github`, `linkedin`, `whatsapp`).
* **Categorized Skills:** Skills are grouped by categories (Frontend, Backend, DevOps, etc.). Each skill object includes a `name`, an `icon`, and a `category` for automatic filtering in the UI.
* **Multi-language Support:** The `experience`, `education`, and `projects` sections are divided into `es` (Spanish) and `en` (English) keys.

> **Note:** If you add or modify a project in one language, remember to update the other to keep your portfolio consistent.

#### Data Structure Example:
Each section follows a specific structure. Here is how you should define your projects:

```javascript
projects: {
    es: [
        {
            title: "Título del Proyecto",
            description: "Breve descripción de lo que hiciste.",
            technologies: ["Astro", "Tailwind"],
            repoLink: "[https://github.com/](https://github.com/)...",
            image: "project-image.webp"
        }
    ],
    en: [
        {
            title: "Project Title",
            description: "Short description of your work.",
            technologies: ["Astro", "Tailwind"],
            repoLink: "[https://github.com/](https://github.com/)...",
            image: "project-image.webp"
        }
    ]
}
```

### 3. Visual Theme & Colors (`./src/style/colors.css`)
Easily change the entire look and feel of the site using **OKLCH color variables**. This modern CSS approach ensures color consistency.

To change the colors, adjust the following variables in the `:root`:

| Variable | Description | Value Range |
| :--- | :--- | :--- |
| `--primary-h` | **Hue:** Changes the main accent color. | 0 - 360 |
| `--primary-c` | **Chroma:** Changes the intensity/saturation. | 0 - 0.4 |
| `--surface-h` | **Background Hue:** Changes the tone of the background. | 0 - 360 |
| `--surface-c` | **Background Chroma:** Changes background saturation. | 0 - 0.4 |

#### Example:
```css
:root {
    /* Set your main accent to Blue (200) */
    --primary-h: 200; 
    --primary-c: 0.15; 

    /* Keep backgrounds neutral */
    --surface-h: 0;
    --surface-c: 0; 
    
    --text-color: oklch(100% 0 0);
}
```
## ⚙️ Advanced Customization

### Change the Layout Order or Content
If you want to reorder sections or add your own custom content, modify `./src/pages/[lang]/index.astro`.

* **To Reorder:** Simply cut a component tag (e.g., `<Skills />`) and paste it in your desired position. **Important:** Move the entire tag, including its props (e.g., `title={t("...")}`).
* **To Add New Sections:**
1. Create a new `.astro` file in `./src/sections/`.
2. Import it in `index.astro`: `import AboutMe from "../../sections/AboutMe.astro";`
3. Place the tag in the layout and pass the required props using the translation helper `t()`.

```Astro
import AboutMe from "../../sections/AboutMe.astro";
```
And add it where you want:
```Astro
---
import { useTranslations } from "../../i18n/utils.js";
export function getStaticPaths() {
	return [{ params: { lang: "es" } }, { params: { lang: "en" } }];
}

const { lang } = Astro.params;
const t = useTranslations(lang);

import Layout from "../../layouts/Layout.astro";
import Hero from "../../sections/Hero.astro";
import Skills from "../../sections/Skills.astro";
import Education from "../../sections/Education.astro";
import Experience from "../../sections/Experience.astro";
import Projects from "../../sections/Projects.astro";
import AboutMe from "../../sections/AboutMe.astro";
---

<Layout title={t("site.title")} description={t("hero.description")} lang={lang}>
	<Hero
		title={t("hero.title")}
		subtitle={t("hero.subtitle")}
		description={t("hero.description")}
	/>

	<AboutMe	
		title={t("sobremi.title")}
		text1={t("sobremi.text1")}
		text2={t("sobremi.text2")}
		text3={t("sobremi.text3")}
	/>
	<Skills
		subtitle={t("skills.subtitle")}
		title={t("skills.title")}
		description={t("skills.description")}
	/>
	<Education
		title={t("education.title")}
		subtitle={t("education.subtitle")}
		lang={lang}
	/>
	<Experience
		title={t("experience.title")}
		subtitle={t("experience.subtitle")}
		lang={lang}
	/>
	<Projects
		title={t("projects.title")}
		subtitle={t("projects.subtitle")}
		lang={lang}
	/>
</Layout>
```
### 🌍 Managing Supported Languages

This portfolio uses Astro's dynamic routing (`/[lang]/`) to handle multiple languages. The localization logic is controlled in `./src/i18n/ui.js` through two main constants:

```javascript
export const allowedLanguages = new Set(["es", "en"]);
export const defaultLanguage = "es";
```
* **allowedLanguages**: This Set determines which language codes are valid in the URL. If a user tries to access a language not included here (e.g., /fr/), the system will automatically trigger a 404 page.
* **defaultLanguage**: Defines the fallback language and the default route when a user first visits the site.

**How to add a new language (e.g., French)**:
Register the language: Add the new code ("fr") to the allowedLanguages Set in `./src/i18n/ui.js`.

Translate UI Labels: In the same file, add a new key for "fr" inside the `ui` object and translate all the static strings (buttons, labels, and titles).

Translate Content: Go to `./src/config.js` and add the "fr" key to the `experience`, `education`, and `projects` objects to ensure your professional data is available in the new language.

Update the Switcher: Finally, add the new language option to your header component in `./src/components/header.astro` so users can select it from the interface.

## 🚀 Deployment
1. Fork this repository.
2. Clone it to your machine.
3. Edit the 3 config files.
4. Deploy to **GitHub Pages** or **Vercel** in minutes!

## 📄 License
This project is licensed under the **CC BY-NC-SA 4.0**. 
* You can use it and modify it for free.
* Attribution is required.
* You **cannot** sell this template.

---
Made with Eric de Sojo Vilches