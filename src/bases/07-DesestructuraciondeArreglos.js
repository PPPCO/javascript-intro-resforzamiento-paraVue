


const  characters = ['Goku', 'Vegueta', 'Trunks']

// const goku = characters[0]
// const trunks = characters[2]
// const vegueta = characters[1]

const [ goku, vegueta, trunks ] = characters

// si solo queremos tomar en cuenta a trunks tendriamos que hacerlo de la siguiente manera 
const [ ,, t ] = characters

//  en caso de querer acceder aun elemento no existente...
const [ g, v, tr, goten = 'No tiene valor' ] = characters

console.log( goku )
console.log( trunks )

console.log( goku, trunks, vegueta )

console.log( t )
console.log( goten )



const returnArray = () =>{
    return [ 'ABC', 123 ]
}

const [ letters, numbers ] = returnArray()

console.log( letters, numbers )

// haciendo una funcion que reciba un arreglo y que retorne el arreglo pero simplificando el codigo
// como en el caso de los objetos

const returnArraySimpl = ([ letters, numbers ]) => [letters, numbers]

const [ lettersSimp, numbersSimp ] =  returnArraySimpl( ['Paquito', 123455] )

console.log( lettersSimp, numbersSimp )

/*
    Bueno haciendo un resumen de lo que vimos en esta clase tenemos lo siguiente:
    Primero que nada tenemos que pues podemos desestructurar un arreglo de la misma forma que un objeto, sin embargo y en este caso pues en vez de usar llaves para colocar dentro el nombre de los atributos que desesctructaremos del objeto PUES CON ARREGLOS tendremos que hacer uso de los CORCHETES., Es muy importante tener en cuenta que con los arreglos LOS INDICES SON SUPER IMPORTANTES porque aqui tendremos que respetar las posiciones de los elementos que contiene el arreglo, aqui si podremos usar cualquier nombre para el elemento del arreglo pues lo que aqui realmente importa es la posicion, es por eso que en el ejemplo vemos que pues cuando descomrimimos el arreglo pues le damos el nombre que querramos al indice del arreglo.
    
    Y pues bueno ya por ultimo me explicare a mi mismo que es lo que hicimos en la funcion que esta justamente arriba de este resumen de lo visto en esta clase, pues  bueno, esa funcion simplemente tiene la funcion de mostrarnos la forma en que podriamos trabajar con una arreglo en un entorno que se podria presentar, en este caso pues es para el caso de que una funcion reciba un arrelgo.

    Como vemos, cuando tenemos una funcion que recibe un arreglo podemos desestructurarlo desde cuando nos llega o mejor dicho, desde que definimos el paramtetro que tendra la funcion, ahi es cuando tenmos que desestructurarlo pues pues ahi iria el nombre de la variable que almacenaria el array sin embargo al desestructurarlo nos da la gran facilidad de trabajar con el array pues de esta forma ya no tendriamos que usar el nombre de la variable que almancena el array mas el indice del elemento al que queremos acceder, por ejemplo:
    array[1]

    Asi de esta forma y al desestructura el array simplemente aremos uso del nombre que le dimos al elemento en la posicion donde colocamos el nombre.


    Bueno lo segundo que hicimos y pues hasta parece tonto, pero como ya mencione la unica finalidad el ejemplo anterior es darnos un caso en donde podriamos usarlo, por eso se ve como se ve el ejercicion anterior., Y pues bueno lo que estamos haciendo despues es que desestructuraremos el resultado que nos retorna la funcion que creamos, para ello tenemos que pasarle un array con los datos que queremos mandarle en una arreglo, porque sabemos que la funcion asi recibe los datos, y como tambien sabemos que esa funcion retorna una array pues... ya vamos viendo porque hicimos la desestructuracion.
    Finalmente lo que hicimos es simplemente hacer  un console.log para imprimir el array desestructurado y hasta eso seria como la variable que almaceno un elemento de una array.


    Por ultimo debo de recordar que pues cuando estamos tratando de desestructurar un array lo mas importante a tener en cuenta es la posicion del elemento, por lo tanto o mejor dicho, lo que quiero decir es que tenemos que tener en cuenta la posicion de cada elemento del array para que se almacenen adecuandamente en la variable que queremos darle a esa posicion del array cuando lo estamos desestructurando, y pues eso es todo, o eso creo, obiviamente tenemos que podnernos a estudiar mas este tema para tener una mejor compresion, y en caso de omitir algo pues aprenderlo.
 */