

<<<<<<< HEAD


const arreglo = [1,2,3,4]
arreglo.push( 5 )

const arreglo2 = [ ...arreglo ]
arreglo2.push( 6 )

const arreglo3 = arreglo2.map( elemento => elemento * 2 )
arreglo3.push( 14 )
=======
const arreglo =[1,2,3,4]
arreglo.push(5)

const arreglo2 = [...arreglo];//como es un arreglo usamos los corchetes []
arreglo2.push(6)

const arreglo3 = arreglo2.map(function(n){
    return n * 2
})

arreglo3.push(14)

>>>>>>> 5cd2280a6bafe09fac393f5af2eee41432684d70

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
<<<<<<< HEAD






=======
>>>>>>> 5cd2280a6bafe09fac393f5af2eee41432684d70
