const promesa = () => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            // resolve('Tenemos un valor en la promesa')
            reject('Error en mi promesa')
        }, 1000);
    })
};

const medirTiempoAsync = async() => {
    try {
        console.log('Inicio')
        
        const respuesta = await promesa();
        console.log( respuesta )
    
        console.log('Fin')
    
        return 'Fin de medir tiempo async'    
    } catch (error) {
        return 'Catch en medirTiempoAsinc'
    }
    // throw 'Error en medir tiempo async'
}

medirTiempoAsync()
    .then( console.log )
    .catch( console.log )