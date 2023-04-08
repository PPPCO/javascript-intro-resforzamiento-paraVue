


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    Edad:  45,
    direccion: {
        ciudad: 'New York',
        Zip: 2112121,
        lat: 22.12121,
        lng: 12.1231
    }
}

const persona2 = { ...persona };

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)



