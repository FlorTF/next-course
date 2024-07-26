import Navbar from "../components/Navbar";
export const metadata = {
  title: "My store",
  description: "This is my store",
  keyword: "store, online, ecommerce" 
};

/*

**METADATA** 
En layout.jsx
Las etiquetas <meta> no es necesario ponerlo en todos, sino solamente cuando necesitemos que sea indexado por los buscadores. Por ejemplo, las paginas o rutas de perfil, o informacion bancaria no necesita ser indexada por el buscador
Concepto importante relacionado con el SEO
SEO, es basicamente la forma en la que nuestras paginas son indexadas por buscadores como Google.
SEO, es importante para que los buscadores puedan entende nuestras páginas
Incluye añadir en dentro de la etiqueta <head> de cada página un titulo correcto y una descripcion con las etiquetas <meta>.
NextJS, tiene otra forma de añadirlos, y es mas recomendada ya que permite modificarla de forma dinamica, por ejemplo, trayendo datos de una base de datos.
NextJS, permite exportar un objeto Json con propiedades clave y valor, esta metadata se coloca en el RootLayout y se renderizará en todas las rutas hijas.

Si yo quiero cambiar la metadata en alguna ruta y que se renderice en sus hijos, parecida al comportamiento de {children} lo unico que debo hacer es crear un nuevo objeto llamado metadata dentro de otro layoutTienda.jsx
*/

/*
app/layout.jsx
Es basicamente un componente
Es el contendor raiz de toda la aplicacion. 
Este layout contiene un <html> y un <body> y lo que cambia seria el contenido del <body>, es decir al ser el RootLayout un componente este recibe props: {children} (o tambien llamados elementos hijos) los cuales se renderizaran dentro del body.
Recordar que el {children} es lo dinamico, lo que ira cambiando dependiendo las rutas que visitemos
Cualquier ruta que yo visite, tendrá esta estructura(layout) como principal
Podemos añadir un navbar, de manera que este se quede estatico mientras nos movemos por todas las rutas que hemos creado
*/

/*
**LINK**
Para navegar entre rutas podemos hacerlo utilizando la etiqueta tradicional <a href="/">Home</a> de HTML. 
Sin embargo, la etiqueta <a> no es muy eficiente, debido a que esto hace que al hacer click en los enlaces, se recargue al completo toda la página, haciendo que se renderice todo nuevamente. Es decir, que la página se esta volviendo a pedir desde el servidor de desarrollo de Next y el servidor esta volviendo a cargar la toda la página desde cero.
Entonces en lugar de utilizar la etiqueta <a>, Next nos ofrece un componente especial llamado <Link>, que tiene la misma utilidad, la diferencia radica no altera toda la aplicacion en cada cambio. Solo lo que deberia cambiar,es decir {children}
*/



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navbar/>
        {children}
      </body>
    </html>
  );
}
