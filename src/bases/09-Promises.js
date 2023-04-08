

// console.log( 'Inicio' )
// new Promise( (resolve, reject) => {
//     console.log('Cuerpo de la promesa')
//     resolve('Promesa resuelta')
// }).then( msg => console.log( msg ) ).catch( console.log ) 
// console.log('Fin')

import { getHeroById } from "./bases/08-imp-expFunctions"


const getHeroByIdAsync = ( id ) =>{
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById( id )

            if( hero ){
                resolve( hero )
            }else{
                reject('El heroe no existe')
            }
        }, 1000);
    });
}

getHeroByIdAsync( 2 )
    .then( hero => console.log( `El heroe es: ${hero.name}`  ))
    .catch( console.log )