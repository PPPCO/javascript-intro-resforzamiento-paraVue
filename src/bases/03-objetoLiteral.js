

const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip:223313,
        lat: 13.123,
        lng: 13.3112
    }
}

const persona2 = {...persona};
persona2.nombre = 'Peter'
console.log(persona)
console.log(persona2)


