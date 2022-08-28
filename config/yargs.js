const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Toma la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    demandOption: false,
                    describe: 'Opcion para listar la tabla en la terminal'
                    
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Toma el limite de la tabla de multiplicar'
                })
                .check((argv, options) =>{
                    if (isNaN(argv.b)) {
                        throw('La base tiene que ser un numero');
                    }
                    if (isNaN(argv.h)) {
                        throw('El limite tiene que ser un numero');
                    }                         
                    return true;
                })
                .argv;

module.exports = argv;