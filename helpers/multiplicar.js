const fs = require('fs');
var colors = require('colors');


// const crearArchivo = ( base = 5) => {

//     return new Promise((resolve, reject) => {

//         try {
//             let salida = '';

//             for (let index = 1; index <= 10; index++){
//                 salida += (`${base} x ${index} = ${base * index}\n`);
//             }

//             fs.writeFileSync(`tabla-${base}.txt`, salida);
            
//             resolve (`tabla-${base}.txt`);
//         } catch (error) {
//             reject('Error');
//         }
        
//     })  

// }

const crearArchivo = async( base = 5, listar, hasta = 10) => {    

        try {
            let salida = '';

            for (let index = 1; index <= hasta; index++){
                salida += (`${base} x ${index} = ${base * index}\n`);
            }

            if (listar) {
                console.log(salida);
            }
            

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
            return `tabla-${base}.txt`;
        } catch (error) {
            throw error;
        }  

}

module.exports = {
    crearArchivo
}