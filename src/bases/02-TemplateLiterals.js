
const nombre = 'Paco'
const apellido = 'Garcia'

const nombreCompleto = `${ nombre } ${ apellido }`

// console.log(`Resultado: ${ 1 + 3 }`)
function getSaludo( nombre ){
    return "Hola" + " " + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)


