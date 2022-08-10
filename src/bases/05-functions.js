

// function saludar(nombre){
    // return `Hola ${nombre}`
// }
//  
// tambien estan las funciones anonimas

const saludar= (nombre)=>`Hola ${nombre}`

//funciones flecha,


const nombre = 'Tony'
//console.log(saludar(nombre))

const getUser = () =>({uid:'ABC123', username: 'Tony'})// estamos creando con una funcion flecha, na funcion que nos returna un objeto
console.log(getUser())


//Ejercicio
///     USANDO  
const eroes = [{
    id: 1,
    name: 'Batmam'
},{
    id: 2,
    name: 'Superman'
}
]
const existe = (array,vEvalular)=> array.some(arraVal=> vEvalular===arraVal.name);
console.log(existe(eroes,'Batmam')) 
