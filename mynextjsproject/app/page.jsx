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

/*
** REACT SERVER COMPONENTS **
Para saber cuales se renderizan en el servidor y cuales en el cliente: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
NextJS es un framework que tiene caracteristicas de backend como de frontend, y que unidos les da a los desarrolladores la posibilidad de elegir en que pagina añadir cierta caracteristica.
Contexto:
- Server-Side Rendering (SSR): Cuando una página o un componente se renderiza en el servidor, solo se genera HTML y CSS. En esta fase, no se ejecuta JavaScript, por lo que no se pueden manejar eventos como onClick.
- Client-Side Rendering (CSR): Los eventos como onClick necesitan ejecutarse en el cliente, ya que dependen de la interacción del usuario y la ejecución de JavaScript.
Problema:
Por defecto los componentes estan procesados por el backend(servidor)
Si queremos usar cosas netamente del frontend(cliente) como eventos onclick, useEffect, hooks, etc, debemos usar el 'use client', porque sino la página no se renderizará y nos mostrará error.
Explicacion error: 
Este error es por que los componentes son creados desde el servidor y desde el servidor no se puede ejecutar un onClick, debido a que el onClick se ejecuta en el frontend. Entonces, como el onClick necesita manejar codigo JS, el componente que lo contiene ya no se va a renderizar en el backend, sino que obligatoriamente se tiene que renderizar en el frontend.
Solucion:
Usar la directiva 'use client' para asegurar que los componentes que necesitan manejar eventos del usuario se rendericen en el cliente

Nota: Usamos componentes dentro de componentes, si el componente padre tiene 'use client', los componentes hijos tambien estarian afectados y es como si tambien tuvieran 'use client'.
Nota 2: Los metadata solo funcionan en componentes del lado del servidor, es decir, los que no tienen el 'use client'. 
*/
"use client";
import React from "react";

function HomePage() {
  return (
    <section>
      <h1>hello world</h1>
      <button onClick={() => {
        alert('hello')
      }}>Click</button>
    </section>
  );
}

export default HomePage;
