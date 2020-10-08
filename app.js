// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
// let base = argv.base;
console.log('argv', argv);
console.log('base', argv.base);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`)).
        catch(err => console.log(err));
        break
    default:
}

// let argv2 = process.argv;
// let parametro = argv2[2];
// base = parametro.split('=')[1];

// console.log(argv.base);
// console.log('limite', argv.limite);
console.log('comando', comando);
// console.log(argv2);



// multiplicar.crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`));

//