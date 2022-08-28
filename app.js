const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(argv);

// console.log('base: yargs', argv.b);
// console.log('listar', argv.l)
const base = argv.b;
const listar = argv.l;
const hasta = argv.h;

// const [ , , arg3 = 'base=5'] = process.argv;
// const [,base] = arg3.split('=');
// const base = 8;

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado'))
    .catch(err => console.log(err));


