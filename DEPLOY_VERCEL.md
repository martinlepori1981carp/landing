# Guía de Deploy en Vercel

## Opción 1: Vercel CLI (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Autenticarse
vercel login

# 3. Deploy
vercel
```

## Opción 2: GitHub + Vercel

```bash
# 1. Inicializar git
git init
git add .
git commit -m "Initial commit"

# 2. Crear repositorio en GitHub
# 3. Push a GitHub
git push origin main

# 4. Conectar en Vercel
# - Ir a vercel.com
# - Importar proyecto desde GitHub
# - Vercel deployará automáticamente
```

## Opción 3: Drag & Drop

1. Ir a https://vercel.com/new
2. Arrastrar esta carpeta
3. Vercel deployará automáticamente

## Características

- ✅ 100% estática (sin backend)
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Optimizada para conversión
- ✅ Carga rápida
- ✅ Sin dependencias externas

## Estructura

```
whatsapp-que-vende-deploy/
├── index.html           # Página principal
├── assets/              # CSS y JavaScript compilados
├── vercel.json          # Configuración de Vercel
├── package.json         # Información del proyecto
├── README.md            # Documentación
└── .gitignore          # Archivos a ignorar en git
```

## Después del Deploy

1. **Dominio Personalizado**: En Vercel Settings > Domains
2. **Analytics**: Agregar Google Analytics en index.html
3. **SSL**: Automático en Vercel
4. **CDN**: Automático en Vercel

## Soporte

Para cambios o actualizaciones, edita el código fuente y redeploy.

---

¡Tu landing page está lista para vender! 🚀
