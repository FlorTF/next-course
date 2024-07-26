/*
**RUTAS EN NEXTJS**
app
Es la carpeta que contiene todas las rutas de nuestra aplicacion. 

Ruta: http://localhost:3000
page y layout son nombres reservados por NextJS
app/page.jsx
Al crear este componente se crea en automatico el layout.js
Es la ruta principal, debido a que esta en el primer nivel de la carpeta app
Cuando ejecutamos el localhost:3000 NextJS inmediatamente busca el archivo principal page.jsx

app/layout.jsx
Es basicamente un componente
Es el contendor raiz de toda la aplicacion. 
Este layout contiene un <html> y un <body> y lo que cambia seria el contenido del <body>, es decir al ser el RootLayout un componente este recibe props: {children} (o tambien llamados elementos hijos) los cuales se renderizaran dentro del body.
Recordar que el {children} es lo dinamico, lo que ira cambiando dependiendo las rutas que visitemos
Cualquier ruta que yo visite, tendrá esta estructura(layout) como principal
Podemos añadir un navbar, de manera que este se quede estatico mientras nos movemos por todas las rutas que hemos creado

Ruta: http://localhost:3000/about
app/about/page.jsx
Al crear este componente en el segundo nivel de la carpeta app, ya no se crea un layout.js automatico

Ruta: http://localhost:3000/tienda
app/tienda/page.jsx
Al crear este componente en el segundo nivel de la carpeta app, ya no se crea un layout.js automatico

Ruta: http://localhost:3000/tienda/categorias
app/tienda/page.jsx
Al crear este componente en el tercer nivel de la carpeta app, ya no se crea un layout.js automatico

Ruta: http://localhost:3000/tienda/categorias/laptops
app/tienda/page.jsx
Al crear este componente en el cuarto nivel de la carpeta app, ya no se crea un layout.js automatico
*/

import React from 'react'

function HomePage() {
  return (
    <h1>HomePage</h1>
  )
}

export default HomePage