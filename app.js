const { argv } = require('yargs')

const entradas=require('yargs')
.command('sumar','suma 2 numeros',{
    numeroUno:{demand:true,alias:'n1'},
    numeroDos:{demand:true,alias:'n2'}
})
.argv;

console.log(entradas.n1 + entradas.n2);
