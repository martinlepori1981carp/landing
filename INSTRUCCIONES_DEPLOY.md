# 🚀 WhatsApp que Vende - Instrucciones de Deploy

## Contenido del ZIP

Tu archivo `whatsapp-que-vende-final.zip` contiene:

```
whatsapp-que-vende-deploy/
├── index.html                  # Página principal (entrada)
├── assets/
│   ├── index-Cwj0mcO1.css     # Estilos compilados
│   └── index-AQFOqDe7.js      # JavaScript compilado
├── __manus__/
│   └── debug-collector.js      # Herramientas de debugging
├── vercel.json                 # Configuración de Vercel
├── package.json                # Información del proyecto
├── README.md                   # Documentación completa
├── DEPLOY_VERCEL.md           # Guía de deploy
└── .gitignore                 # Archivos a ignorar
```

## Pasos para Deploy en Vercel

### Opción 1: Vercel CLI (Más Rápido)

```bash
# 1. Descargar e instalar Vercel CLI
npm i -g vercel

# 2. Autenticarse
vercel login

# 3. Ir a la carpeta descomprimida
cd whatsapp-que-vende-deploy

# 4. Deploy
vercel
```

**Vercel te preguntará:**
- Project name: `whatsapp-que-vende` (o tu nombre preferido)
- Directory: `.` (punto, para usar el directorio actual)
- Vercel deployará automáticamente

### Opción 2: GitHub + Vercel (Recomendado para Actualizaciones)

```bash
# 1. Descomprimir el ZIP
unzip whatsapp-que-vende-final.zip
cd whatsapp-que-vende-deploy

# 2. Inicializar git
git init
git add .
git commit -m "Initial commit - WhatsApp que Vende landing"

# 3. Crear repositorio en GitHub
# - Ir a github.com/new
# - Crear repositorio "whatsapp-que-vende"
# - Copiar el comando: git remote add origin ...

# 4. Push a GitHub
git remote add origin https://github.com/TU_USUARIO/whatsapp-que-vende.git
git branch -M main
git push -u origin main

# 5. Conectar en Vercel
# - Ir a vercel.com/new
# - Seleccionar "Import Git Repository"
# - Seleccionar el repositorio de GitHub
# - Vercel deployará automáticamente
```

### Opción 3: Drag & Drop (Más Simple)

1. Descomprimir `whatsapp-que-vende-final.zip`
2. Ir a https://vercel.com/new
3. Arrastrar la carpeta `whatsapp-que-vende-deploy` al área de drop
4. Vercel deployará automáticamente

## Después del Deploy

### Dominio Personalizado

1. En Vercel Dashboard > Tu Proyecto > Settings > Domains
2. Agregar tu dominio personalizado
3. Seguir las instrucciones de DNS

### Configurar Dominio Existente

Si ya tienes un dominio:

1. En tu proveedor de DNS, agregar registros CNAME a Vercel
2. Vercel te proporciona los valores exactos
3. Esperar 24-48 horas para propagación

### Analytics

Para trackear visitantes y conversiones:

1. Crear cuenta en Google Analytics
2. Copiar el código de tracking
3. Pegarlo en el `index.html` antes del cierre `</head>`

## Características de Tu Landing

✅ **100% Estática**: Sin backend, sin login, sin dependencias
✅ **Responsive**: Funciona perfectamente en mobile, tablet y desktop
✅ **Optimizada para Conversión**: Diseño enfocado en CTAs
✅ **Rápida**: Carga en menos de 2 segundos
✅ **Segura**: Pagos procesados por PayPal y Mercado Pago
✅ **Soporte WhatsApp**: Botón directo para contacto

## Estructura de Archivos

- **index.html**: Página principal compilada (368 KB)
- **assets/index-*.css**: Estilos compilados y minificados (126 KB)
- **assets/index-*.js**: JavaScript compilado y minificado (575 KB)
- **vercel.json**: Configuración de deploy (redirecciones, caching)
- **package.json**: Metadatos del proyecto

## Cambios Posteriores

Si necesitas hacer cambios:

1. Edita el código fuente original en `/home/ubuntu/whatsapp-que-vende/`
2. Ejecuta `npm run build`
3. Copia los archivos nuevamente a la carpeta de deploy
4. Haz push a GitHub o redeploy en Vercel

## Soporte y Troubleshooting

**¿La página no carga?**
- Verifica que `index.html` esté en la raíz de la carpeta
- Verifica que `vercel.json` esté presente
- Revisa los logs en Vercel Dashboard

**¿Los botones de pago no funcionan?**
- Verifica que los enlaces de PayPal y Mercado Pago sean correctos
- Prueba en navegador privado
- Verifica que no haya bloqueadores de anuncios

**¿Quiero cambiar el precio o los textos?**
- Edita el código fuente
- Ejecuta `npm run build`
- Redeploy en Vercel

## URLs Importantes

- **Vercel**: https://vercel.com
- **GitHub**: https://github.com
- **PayPal**: https://www.paypal.com
- **Mercado Pago**: https://www.mercadopago.com.ar

## Próximos Pasos

1. ✅ Descomprimir el ZIP
2. ✅ Elegir método de deploy
3. ✅ Ejecutar deploy
4. ✅ Configurar dominio personalizado
5. ✅ Agregar Google Analytics
6. ✅ Probar todos los botones
7. ✅ ¡Comenzar a vender!

---

**¡Tu landing page está lista para vender más por WhatsApp!** 🚀

Cualquier duda, consulta la documentación en `README.md` o `DEPLOY_VERCEL.md` dentro del ZIP.
