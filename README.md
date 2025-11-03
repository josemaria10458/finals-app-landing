# Finals App - Landing Page

Landing page moderna y profesional para la aplicación Finals App, desarrollada con Angular 17 y Tailwind CSS.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎨 Tailwind CSS para estilos
- 📱 Completamente mobile-first
- ⚡ Optimizado para rendimiento
- 🎯 SEO-friendly

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Angular CLI 17

## 🛠️ Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Instalar Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

3. Ejecutar en modo desarrollo:

```bash
npm start
```

4. Construir para producción:

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
landing-page/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── hero-section/
│   │   │   ├── features-section/
│   │   │   ├── stats-section/
│   │   │   ├── cta-section/
│   │   │   └── footer/
│   │   └── app.component.ts
│   ├── styles.css
│   └── index.html
├── tailwind.config.js
├── angular.json
└── package.json
```

## 🎨 Personalización

### Colores

Los colores se pueden personalizar en `tailwind.config.js`:

```js
colors: {
  primary: { /* ... */ },
  accent: { /* ... */ }
}
```

### Contenido

El contenido de cada sección se encuentra en los componentes correspondientes dentro de `src/app/components/`.

## 📱 Secciones

1. **Navbar** - Navegación fija con menú responsive
2. **Hero Section** - Sección principal con CTA
3. **Features Section** - Características principales de la app
4. **Stats Section** - Estadísticas y testimonios
5. **CTA Section** - Llamada a la acción para descarga
6. **Footer** - Información de contacto y enlaces

## 🌐 Deploy

La aplicación está lista para desplegarse en:

- Vercel
- Netlify
- Firebase Hosting
- GitHub Pages
- Cualquier servidor estático

## 📝 Licencia

Este proyecto es propiedad de Finals App.
