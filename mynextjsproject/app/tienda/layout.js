import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Tienda Home",
  description: "This is Tienda Home",
  keyword: "store, online, ecommerce" 
};

/*
**LAYOUT **
Basicamente es que cada carpeta tendra un page.jsx y un layout.jsx, el layout el componente que englobará lo que se renderizará {children}
Podemos crear un layout distinto para cada componente que queramos englobar (ejemplo componente tienda), lo que es muy útil en aplicaciones grandes.
En layout.jsx, si quiero insertar un navbar en una página (ruta) o componente que contiene otras subpáginas u otros subcomponentes, no es necesario importar en cada una de ellas un navbar, sino que podemos crear un layout a la altura de la página o componente que contiene a las demás.

El layout.jsx de la carpeta tienda (ruta: http://localhost:3000/tienda) renderizará solo el contenido de las rutas o carpetas que tiene dentro.
Como ya tenemos un RootLayout principal, no necesitamos <html> ni <body>, solo necesitamos retornar el {children}

Si entramos a las rutas que estan dentro de tienda como http://localhost:3000/tienda/categorias nos seguira mostrando el navbar, y solo cambiará el contenido de children
*/

function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <li>
            <Link href={'/tienda/categorias'} >Categorias</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default TiendaLayout;
