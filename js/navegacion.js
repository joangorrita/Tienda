//Declaro mi nav
const cabecera =document.createElement ("header");
const navegacion=document.createElement("navbar");
const nav=document.createElement("nav");
const ul=document.createElement("ul");
const li=document.createElement("li");

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li);
nav.className="navbar"

// Genreo el array con los links y lo recorro

const links=["Index","Contacto","Productos"];


for( const link of links){
    const li= document.createElement("li");
    li.innerHTML = `<a href="${link.toLowerCase()}.html">${link} <a/>`
    ul.appendChild (li);
}

//agrego cabecera al body
document.body.appendChild(cabecera);


// estilos al nav SEGUIR HACIENDO
cabecera.style.backgroundColor= "lightgrey";
ul.style.listStyle= "none"







//footer 

const footer= document.createElement("footer");
const ulFooter=document.createElement("ulFooter");
const liFooter=document.createElement("liFooter");

footer.appendChild(ulFooter);
ulFooter.appendChild.createElement(liFooter);
