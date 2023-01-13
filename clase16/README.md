1. Crear carpeta del proyecto
2. Abrila con vsCode
3. En un terminal integrada de vsCode ejecutar `npm init -y`
4. Instalar dependencias base
```
npm i express
npm i nodemon -D
```
5. Crear `.gitignore` y agregar `node_modules`
6. Crear `app.js` en la raiz del proyecto
7. Configurar express en el `app.js`
8. En el `package.json` cambiar el la propiedad main de `index.js` a `app.js`
y crear el script `"dev": "nodemon app.js"` para levantar el proyecto
9. para iniciar el servidor tenemos que ejecutar en la terminal `npm run dev`

