const fs = require('fs');
var colors = require('colors');

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