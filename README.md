# fransanchez.dev

Web personal minimalista construida con Astro, orientada a rendimiento y mantenimiento simple.

## ¿Por qué Astro?
1. Genera HTML estático por defecto, ideal para máxima velocidad y SEO técnico limpio.
2. Soporta contenido en Markdown de forma nativa con `astro:content`.
3. Mantiene una estructura de proyecto sencilla (pocas dependencias y sin UI framework pesado).
4. Permite crecer a futuro sin perder simplicidad en el flujo de contenido.

## Ejecutar en local
```bash
npm install
npm run dev
```
Abrir `http://localhost:4321`.

## Build de producción
```bash
npm run build
npm run preview
```

## Añadir un nuevo post
1. Crear un archivo `.md` en `src/content/blog/`.
2. Incluir frontmatter obligatorio:

```md
---
title: "Título del post"
description: "Resumen breve"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
slug: "url-amigable-del-post"
coverImage: "/images/opcional.jpg"
---

Contenido en Markdown.
```

3. El índice de `/blog` y la home se actualizan automáticamente por fecha.

## Deploy rápido
- **Vercel**: importar repositorio y usar `npm run build`.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages**: framework preset Astro o comando `npm run build` y output `dist`.
