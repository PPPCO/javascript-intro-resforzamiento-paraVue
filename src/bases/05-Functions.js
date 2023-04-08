


// function saludar ( xyz ){
//     return `Hola mundo ${ xyz }`
// }

// const saludar = function( xyz ){
//     return `Hola mundo ${ xyz }`
// }

const saludar =  ( xyz = 'Peter' ) => `Hola ${ xyz }`

const nombre = 'Tony'

// console.log( saludar( nombre ) )

const getUser = () => ({ 
    uid: 112231,
    userName: 'Tony001'
})
// console.log( getUser() )

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

const existe = ( heroe ) => heroes.find( element =>  element.name == heroe ) ? true : false
console.log( existe('Superman') ) 

//  o de la siguiente manera

const { name } = ( heroe ) => heroes.some( element =>  element.name == 'Superman' )
// Estudiar este tipo de desestructuracion
console.log( name ) 