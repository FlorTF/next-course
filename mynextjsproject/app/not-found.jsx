/*
**NOT FOUND**
Cuando ingresamos a una ruta que no existe,  nos muestra una pagina 404 con un estilo por defecto de NextJS.
Si queremos estilizar nuestra propia pagina 404, crearemos un componente 'not-found.jsx' en la raiz de la carpeta app. 
Es importantisimo que el archivo lleve por nombre 'not-found.jsx'
Ahora, si yo entro a cualquier pagina que no exita, siempre nos llevara a nuestro propia pagina 404

*/

import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>Pagina no encontrada</p>
      <Link href="/">Volver</Link>
    </section>
  );
}

export default NotFound;
