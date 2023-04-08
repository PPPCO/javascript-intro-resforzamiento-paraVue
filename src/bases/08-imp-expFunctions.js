// import { owners } from "./data/heroes"


import superHeroes  from "../data/heroes"

console.log( superHeroes )

// crear dos funciones: getHeroById(id) y getHeroesByOwner

export const getHeroById = ( idh ) => superHeroes.find( ({ id, name, owner }) => id == idh )



export const getHeroesByOwner= ( ownerh ) => superHeroes.filter(({ id, name, owner })=> owner == ownerh)


/*  Lo siguiente es  como estabamos importando estas funciones desde otra parte

import { getHeroById } from "./bases/08-imp-expFunctions"
import { getHeroesByOwner } from "./bases/08-imp-expFunctions"

console.log( getHeroById( 5 ) )

console.log( getHeroesByOwner( 'Marvel' ))
 */