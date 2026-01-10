Read this in [english](https://github.com/edesojo/Customizable-web-portfolio/blob/6eee473f6b89982be72ebb49b736a2f7a39b8ac8/README.en.md)
# Portafolio Web Personalizable 🚀

[![Licencia: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Un portafolio web limpio y profesional para mostrar tu CV y proyectos.  
Hecho con Astro. **Fácil de personalizar usando solo 3 archivos.**

## ✨ Características
* **Totalmente responsive:** Se ve genial en móviles y escritorio.
* **Configuración sencilla:** No necesitas tocar HTML/CSS complejo.
* **Diseño moderno:** Enfocado en la legibilidad y el impacto profesional.

## 🛠️ Cómo personalizar

Este portafolio está diseñado para ser 100 % personalizable sin tocar la lógica principal. Solo necesitas editar **3 archivos principales** ubicados en la carpeta `src`:

### 1. Internacionalización y etiquetas (`./src/i18n/ui.js`)
Este archivo te permite cambiar los textos estáticos y etiquetas que aparecen en toda la web (botones, títulos de navegación y encabezados de sección). Es ideal para traducir tu portafolio a diferentes idiomas.

**Uso:** Actualiza los textos para adaptarlos a tu idioma o tono preferido.

Por defecto, el sistema está preparado para trabajar con dos idiomas: español (ES) e inglés (EN).

### 2. Contenido dinámico (`./src/config.js`)

Este archivo es el “cerebro” de tu portafolio. Utiliza una **estructura tipo JSON multiidioma** para rellenar todas las secciones.

### 🔄 Sincronización inteligente de datos (Single Source of Truth)

Para ahorrarte tiempo y evitar errores, este portafolio utiliza un sistema de “Fuente Única de la Verdad”. La información personal definida al inicio de `./src/config.js` (dentro de `SITE_DATA`) se comparte automáticamente en todo el sitio web.

#### Cómo funciona:
Si actualizas tu nombre, correo electrónico o número de teléfono en la cabecera del archivo:
1. Se actualizará automáticamente la **sección Hero** (título principal).
2. Se actualizarán la **sección de contacto** y el footer.
3. Se refrescarán los **metadatos** (para SEO y pestañas del navegador).

#### Variables dinámicas:
En los componentes de la interfaz no necesitas escribir tu información a mano. Simplemente puedes usar las variables. Por ejemplo:
* Usa `{fullName}` para mostrar tu nombre completo.
* Usa `{SITE_DATA.email}` para mostrar tu correo de contacto.

#### Secciones clave:
* **Información personal y redes sociales:** Datos básicos de contacto y enlaces a redes sociales. Para el campo `icon`, utiliza el nombre correspondiente de tu set de iconos (por ejemplo: `github`, `linkedin`, `whatsapp`).
* **Habilidades categorizadas:** Las habilidades se agrupan por categorías (Frontend, Backend, DevOps, etc.). Cada objeto incluye un `name`, un `icon` y una `category` para el filtrado automático en la interfaz.
* **Soporte multiidioma:** Las secciones `experience`, `education` y `projects` están divididas en claves `es` (español) y `en` (inglés).

> **Nota:** Si añades o modificas un proyecto en un idioma, recuerda actualizar el otro para mantener la coherencia del portafolio.

#### Ejemplo de estructura de datos:
Cada sección sigue una estructura específica. Así es como debes definir tus proyectos:

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

### 3. Tema visual y colores (`./src/style/colors.css`)
Cambia fácilmente el aspecto completo del sitio usando **variables de color OKLCH**. Este enfoque moderno de CSS garantiza coherencia cromática.

Para cambiar los colores, ajusta las siguientes variables en `:root`:

| Variable | Descripción | Rango de valores |
| :--- | :--- | :--- |
| `--primary-h` | **Matiz:** Cambia el color principal. | 0 - 360 |
| `--primary-c` | **Croma:** Cambia la intensidad/saturación. | 0 - 0.4 |
| `--surface-h` | **Matiz del fondo:** Cambia el tono del fondo. | 0 - 360 |
| `--surface-c` | **Croma del fondo:** Cambia la saturación del fondo. | 0 - 0.4 |

#### Ejemplo:
```css
:root {
    /* Establece el color principal en azul (200) */
    --primary-h: 200; 
    --primary-c: 0.15; 

    /* Mantén los fondos neutros */
    --surface-h: 0;
    --surface-c: 0; 
    
    --text-color: oklch(100% 0 0);
}
```
## ⚙️ Personalización avanzada

### Cambiar el orden del layout o el contenido
Si quieres reordenar secciones o añadir contenido personalizado, modifica `./src/pages/[lang]/index.astro`.

* **Para reordenar:** Corta un componente (por ejemplo, `<Skills />`) y pégalo en la posición que desees. **Importante:** Mueve la etiqueta completa, incluyendo sus props (por ejemplo, `title={t("...")}`).
* **Para añadir nuevas secciones:**
1. Crea un nuevo archivo `.astro` en `./src/sections/`.
2. Impórtalo en `index.astro`: `import AboutMe from "../../sections/AboutMe.astro";`
3. Coloca la etiqueta en el layout y pasa las props necesarias usando el helper de traducción `t()`.

```Astro
import AboutMe from "../../sections/AboutMe.astro";
```
Y añádelo donde quieras:
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
### 🌍 Gestión de idiomas compatibles

Este portafolio utiliza el enrutado dinámico de Astro (`/[lang]/`) para manejar múltiples idiomas. La lógica de localización se controla en `./src/i18n/ui.js` mediante dos constantes principales:

```javascript
export const allowedLanguages = new Set(["es", "en"]);
export const defaultLanguage = "es";
```
* **allowedLanguages:** Este Set determina qué códigos de idioma son válidos en la URL. Si un usuario intenta acceder a un idioma no incluido (por ejemplo, `/fr/`), el sistema mostrará automáticamente una página 404.
* **defaultLanguage:** Define el idioma de respaldo y la ruta por defecto cuando un usuario visita el sitio por primera vez.

**Cómo añadir un nuevo idioma (por ejemplo, francés):**
Registrar el idioma: Añade el nuevo código ("fr") al Set `allowedLanguages` en `./src/i18n/ui.js`.

Traducir etiquetas de la interfaz: En el mismo archivo, añade una nueva clave `"fr"` dentro del objeto `ui` y traduce todos los textos estáticos (botones, etiquetas y títulos).

Traducir el contenido: Ve a `./src/config.js` y añade la clave `"fr"` en los objetos `experience`, `education` y `projects` para que tu información profesional esté disponible en el nuevo idioma.

Actualizar el selector: Por último, añade la nueva opción de idioma en el componente del header ubicado en `./src/components/header.astro`, para que los usuarios puedan seleccionarlo desde la interfaz.

## 🚀 Despliegue
1. Haz un fork de este repositorio.
2. Clónalo en tu máquina.
3. Edita los 3 archivos de configuración.
4. ¡Despliega en **GitHub Pages** o **Vercel** en minutos!

## 📄 Licencia
Este proyecto está licenciado bajo **CC BY-NC-SA 4.0**.
* Puedes usarlo y modificarlo gratis.
* Es obligatorio dar atribución.
* **No** puedes vender esta plantilla.

---
Hecho con por Eric de Sojo Vilches