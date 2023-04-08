

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const { name, age, codeName, power = 'No tiene poder' } = person

// console.log( name )
// console.log( age )
// console.log( codeName )
// console.log( power )


const createHero = ( person ) => {
    const { name, age, codeName, poder = 'No tiene poder' } = person

    return {id: 1212121,
    name: name,
    age: age,
    codeName: codeName,
    poder: poder}
}

/* 
    TAMBIEN PUEDE QUEDAR LA FUNCION ANTERIOR MUCHO MAS OPTIMIZADA EN CUANDO A LA CANTIDAD DE CODIGO HACIENDOLA DE LA SIGUIENTE MANER

    Y bueno, porque queda asi bueno, la explicacion es la siguiente, primero ya vimos que la desestructuracion para un objeto basta con colocar los valores o nombre de los atibutos a los que querremos acceder del objeto entre llaves {}, las cuales pues searan igualadas al objeto que tiene esos valores claro esta, y pues bueno, esa es una de las razones por las cuales se ve asi el codigo entorno  la desestructuracion del objeto que recibe

    Lo siguiente ya es lo importante a tener en cuenta y pues bueno, como vemos en la funcion siguiente donde optimizamos el codigo tanto como podemos, pues hacemos la desestructuracion del objeto directamente donde va el atributo que recibira la funcion, de esta forma comparada con la funcion anterior nos ahorramos la linea donde ponermos const {} = ...
    lo anterior porque pues esa posicion donde esta la desestructuracion es la misma que donde iria ese atributo entonces simple y sencillamente por eso funciona de esa manera.

    Lo segundo importante es que pues nos ahorramos el return simple y sencillamente retornando inmediatamente el objeto, PEEERO como el objeto va entre llaves {} tenemos que encerrarlo entre parentesis () para que no se confunca js con las llaves que tendria la funcion flecha con las del objeto

    Y bueno lo ultimo importante y que debemos de aprendernos o mejor dicho recordar es que pues cuando un atributo de un objeto tiene el mismo nombre que el valor que se recibe como parametro de la funcion o  por ejemplo: 
    name: name
    lo que podemos hacer y gracias a es6 es que unicamente podemos poner una vez 'name', simplificando aun mas el codigo.
    Esto es super importante de tener presente, ya lo sabiamos pero lo habiamos dejado pasar, por lo tanto esto hay que recordarlo y tenerlo en mente para poder hacer codigo de buena calidad y nivel.

*/

const createHero2 = ({ age, name, codeName, poder = 'No tiene poder' }) => ({id: 1212121,
    name,
    age,
    codeName,
    poder
}) 


console.log( createHero( person ) )



