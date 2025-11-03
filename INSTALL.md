# 🚀 Guía de Instalación Rápida

## Pasos para ejecutar la landing page

### 1. Instalar Angular CLI globalmente (si no lo tienes)

```bash
npm install -g @angular/cli@17
```

### 2. Navegar al directorio del proyecto

```bash
cd landing-page
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar en modo desarrollo

```bash
npm start
# o
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

### 5. Construir para producción

```bash
npm run build
```

Los archivos de producción estarán en la carpeta `dist/finals-app-landing`

## 🎨 Características de la Landing Page

✅ **Navbar Responsive** - Navegación fija con menú móvil  
✅ **Hero Section** - Sección principal con mockup de la app  
✅ **Features Section** - 6 características principales destacadas  
✅ **Stats Section** - Estadísticas y testimonios  
✅ **CTA Section** - Llamada a la acción con botones de descarga  
✅ **Footer** - Enlaces y redes sociales

## 🛠️ Tecnologías Utilizadas

- **Angular 17** - Framework principal
- **Tailwind CSS 3** - Estilos utilitarios
- **TypeScript** - Lenguaje de programación
- **Responsive Design** - Mobile-first approach

## 📝 Notas

- Todos los componentes son standalone (Angular 17+)
- Los estilos están optimizados con Tailwind CSS
- La página es completamente responsive
- Lista para deploy en cualquier plataforma

## 🔧 Personalización

Para personalizar colores, edita `tailwind.config.js`:

```js
colors: {
  primary: { /* tus colores */ },
  accent: { /* tus colores */ }
}
```

Para cambiar contenido, edita los componentes en `src/app/components/`
