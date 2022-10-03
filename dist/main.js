"use strict";
const nameUser = "Amanda Lima";
const idade = 28;
const statusUser = 1;
//statusUser = 1 - usuario; 2 - empresa; 3 admin
// when have much comparations can be used switch casse
switch (statusUser) {
    case 1:
        console.log('Status: usuario');
        break;
    case 2:
        console.log('Status: empresa');
        break;
    case 3:
        console.log('Status: admin');
        break;
    default: console.log('Status: codigo invalido');
}
if (idade <= 2) {
    console.log("bebê");
}
else if (idade > 2 && idade <= 11) {
    console.log("criança");
}
else if (idade > 11 && idade <= 19) {
    console.log("adolescente");
}
else if (idade > 19 && idade <= 50) {
    console.log("adulto");
}
else {
    console.log("adulto");
}
console.log(`Welcome to TypeScript ${nameUser}`);
const yearFactory = 1920;
/*for(let x = yearFactory; x <= new Date().getFullYear(); x++){
    console.log(x, ' ');
}*/
console.log('----------------------------------------');
/*for(let x =new Date().getFullYear(); x >= yearFactory; x-=10){
    if(x >= 1990 && x < 2000){
        console.log(x, ' ');
        continue;
    }
}*/
/*
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
.
.
.
2 x 10 = 20
*/
let y = 2;
for (let x = 0; x <= 2; x++) {
    console.log(y, ' x ', x, ' = ', y * x);
}
console.log('. \n.\n.');
console.log(y, ' x ', '10', ' = ', y * 10);
//operadores incrementais e decrementais
// x++ - incrental pós - incremento
// ++x - incrental pré - incremento
// x-- - decremental pós - incremento
// --x - decremental pré - incremento
