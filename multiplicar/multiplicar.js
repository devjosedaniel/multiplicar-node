const fs = require('fs');
const colors = require('colors');
// const fs = require('fs');
// const fs = require('fs');

function crearArchivo(base, limite = 10) {


    return new Promise((resolve, rejects) => {
        let data = '';
        if (!Number(base)) {
            rejects('La base no es un numero')
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rejects(err)
            else
                resolve(`table-${base}.txt`);
        });
    });
}
let listarTabla = (base, limite = 10) => {
    console.log('================='.red);
    console.log('Tabla de la base'.green);
    console.log('================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }



};
module.exports = {
    crearArchivo,
    listarTabla
};