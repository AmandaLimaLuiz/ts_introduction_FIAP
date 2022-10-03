"use strict";
//esta engessada
function escreveConsole() {
    console.log("Vai corinthians");
}
//está livre - dirigido a abstração
function escreve() {
    return "Corinthians";
}
escreveConsole();
console.log(`Quem tem mais titulos: ${escreve()}`);
const empresa = 'Avanade';
console.log(empresa.length, empresa.toLocaleUpperCase(), empresa.toLocaleLowerCase());
const locale = 'pt-br';
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
console.log(new Date().toLocaleDateString(locale, options));
const user = {
    name: 'João',
    age: 25,
    email: 'joao@gmail.com',
    address: {
        street: 'av jardins',
        number: 123,
        complement: 'casa',
        city: 'São José dos Campos',
        state: 'SP',
        country: 'Brasil',
        zipCode: '12222-222'
    },
    cpf: '000.000.000-00'
};
