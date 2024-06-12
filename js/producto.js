//accedo a clases

const main =document.getElementsByClassName("main");

if (main.length>0){
    console.log(main[0].innerHTML); 



//Declaro mis objetos

const productos= [{
    id: 1,
    nombre: "Remera de entrenamiento Diadora",
    precio: 24000
},

{
    id: 2,
    nombre: "Camiseta Away Diadora",
    precio: 38000
},

{
    id: 3,
    nombre: "Short Away Diadora",
    precio: 24000
},

{
    id: 4,
    nombre: "Short GRafitti VS",
    precio: 23000
},
{
    id: 5,
    nombre: "Remera Legado VS",
    precio: 28000
}
]
const divProducto= document.createElement("div");


for ( const producto of productos) {
    let literal = `ID: ${producto.id} - Nombre: ${producto.nombre} | Precio: $${producto.precio}.-`;
    const parrafo = document.createElement('p');
    parrafo.innerHTML = literal;
    divProducto.appendChild(parrafo);
}

document.body.appendChild(divProducto);


}else{
    console.log("No se encontraron elementos con la clase 'sectionProducto'.");
}

