# 🇵🇪 Día de la Bandera

[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

Una **landing page interactiva** construida desde cero para conmemorar el **Día de la Bandera del Perú**. Este proyecto destaca por el uso avanzado de técnicas en UI/UX sin la necesidad de dependencias externas o frameworks (Zero-Dependencies).

## ✨ Características Principales

*   🎨 **SVG Avanzado & Clipping:** Corazón central animado construido y estilizado con SVG *inline*. Emplea un `<clipPath>` complejo para la franja diagonal dinámica, contornos `viewBox` calculados para evitar recortes en sombras paralelas (`feDropShadow`), degradados lineales y *blending* con `mix-blend-mode`.
*   🎆 **Motor de Partículas Dinámico (DRY):** Las estrellas de fondo y los destellos interactivos ("sparks") se generan y posicionan tridimensionalmente a través de **Vanilla JavaScript**, inyectándose dinámicamente en el DOM para mantener el archivo HTML ultraligero y estructurado.
*   🖼️ **Lightbox Personalizado:** Al hacer clic en el logo, se despliega una galería inmersiva (*lightbox*) creada sin librerías externas. Cuenta con transiciones suaves basadas en cálculos de `getBoundingClientRect()`, clases de apertura/cierre y soporte keybind (cierre usando `Esc`).
*   🎥 **Fondo Multimedia:** Integración de background en formato MP4 escalado automáticamente con elementos superpuestos.
*   🏗️ **Arquitectura Limpia:** Separación estricta de lógica (JavaScript y CSS en sus propias carpetas, respetando la filosofía "Don't Repeat Yourself").

## 📁 Estructura del Proyecto

```text
/
├── index.html       # Estructura semántica fundamental
├── css/
│   └── style.css    # Estilos CSS3, Keyframes y CSS Variables
├── js/
│   └── script.js    # Lógica iterativa, generadores y manipulación del DOM
└── resources/       # Activos estáticos (bandera.mp4, logo.png)
```

## 🚀 Quick Start / Instalación

Al estar puramente en lenguaje base, no requiere de Node.js ni compilación (Webpack/Vite):

1. **Clonar este repositorio:**
```bash
git clone https://github.com/phpeitor/flag-day.git
cd flag-day
```

2. **Despliegue Local:**
* Puedes usar tu servidor web local activo (ej. **Apache24**, Live Server, etc).
* También basta con hacer doble clic en el archivo `index.html` para abrirlo directamente en el navegador.

## 📺 Demo

[![Video](https://img.youtube.com/vi/QFztjXxPTJw/0.jpg)](https://www.youtube.com/watch?v=QFztjXxPTJw)  
[Ver proyecto original / demo](https://www.youtube.com/watch?v=QFztjXxPTJw)

---
*If you're interested in knowing the powerlevel configuration to get this prompt, have a look at [this gist](https://github.com/phpeitor/).*
