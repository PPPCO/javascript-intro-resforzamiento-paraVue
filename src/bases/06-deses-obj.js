

const person ={
    name: 'Tony',
    age: 45,
    codeName: 'IronMan',
    power: 'dinero'
}
const{name, age, codeName, power='No tiene'}=person

//console.log(name)
//console.log(age)
//console.log(codeName)
//console.log(power)

const createHero = ({name, age, codeName, power})=>
     ({
        id: 12344,
        name,
        age,
        codeName,
        power
    })

console.log(createHero(person))