# 🚀 Guía de Deploy a GitHub Pages

Esta guía te muestra cómo subir tu proyecto Angular a GitHub Pages.

## 📋 Prerequisitos

1. Tener el proyecto conectado a un repositorio de GitHub
2. Tener permisos de escritura en el repositorio

## 🔧 Opción 1: Usando angular-cli-ghpages (Recomendado)

### Paso 1: Instalar angular-cli-ghpages

```bash
npm install -g angular-cli-ghpages
```

O usar npx (no requiere instalación global):
```bash
npx angular-cli-ghpages --dir=dist/finals-app-landing/browser
```

Angular 17+ con el builder `application` genera los archivos estáticos dentro de `dist/.../browser/` (no en la raíz de `dist/.../`). GitHub Pages necesita `index.html` en la raíz del sitio publicado.

### Paso 2: Construir el proyecto

```bash
npm run build:ghpages
```

Este comando construye el proyecto con el `base-href` correcto para GitHub Pages.

### Paso 3: Hacer deploy

```bash
npm run deploy
```

O manualmente:

```bash
# Construir
ng build --configuration production --base-href=/NOMBRE_REPOSITORIO/

# Deploy
npx angular-cli-ghpages --dir=dist/finals-app-landing/browser
```

**Nota:** Reemplaza `NOMBRE_REPOSITORIO` con el nombre de tu repositorio en GitHub.

## 🔧 Opción 2: Deploy Manual

### Paso 1: Construir el proyecto

```bash
ng build --configuration production --base-href=/NOMBRE_REPOSITORIO/
```

### Paso 2: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### Paso 3: Agregar script a package.json

```json
"scripts": {
  "deploy": "gh-pages -d dist/finals-app-landing/browser"
}
```

### Paso 4: Ejecutar deploy

```bash
npm run deploy
```

## 🔧 Opción 3: Usando GitHub Actions (Automático)

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build:ghpages
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/finals-app-landing/browser
```

## ⚙️ Configuración del base-href

El `base-href` depende de cómo esté configurado tu repositorio:

### Si tu repositorio es: `usuario.github.io`
```bash
ng build --base-href=/
```

### Si tu repositorio es un proyecto: `usuario/nombre-proyecto`
```bash
ng build --base-href=/nombre-proyecto/
```

## 📝 Pasos Completos (Resumen)

1. **Conectar con GitHub** (si no lo has hecho):
   ```bash
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Construir y hacer deploy**:
   ```bash
   npm run deploy
   ```

3. **Configurar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: selecciona la rama `gh-pages` y la carpeta `/ (root)`
   - Guarda

4. **Acceder a tu sitio**:
   - Si es `usuario.github.io`: `https://usuario.github.io`
   - Si es proyecto: `https://usuario.github.io/nombre-proyecto`

## 🔍 Verificar el Deploy

Después del deploy, espera unos minutos y visita:
- `https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO/`

## ⚠️ Notas Importantes

1. **Base-href**: Es crucial configurarlo correctamente según tu repositorio
2. **Rama gh-pages**: Se crea automáticamente con el deploy
3. **Actualizaciones**: Cada vez que hagas cambios, ejecuta `npm run deploy` de nuevo
4. **HTTPS**: GitHub Pages solo funciona con HTTPS

## 🐛 Solución de Problemas

### Error: "Repository not found"
- Verifica que el repositorio existe en GitHub
- Verifica que tienes permisos de escritura

### Error: "base-href incorrecto"
- Asegúrate de que el base-href coincida con el nombre de tu repositorio
- Si cambias el nombre del repositorio, actualiza el base-href

### La página no carga
- Espera 5-10 minutos después del deploy
- Verifica que la rama `gh-pages` existe en GitHub
- Verifica la configuración en Settings → Pages

### Error 404 "File not found" en GitHub Pages
- Suele indicar que se publicó la carpeta equivocada: debe ser `dist/finals-app-landing/browser` (donde está `index.html`), no solo `dist/finals-app-landing`.

## 📚 Recursos

- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Angular Deployment](https://angular.io/guide/deployment)




