//esta engessada
function escreveConsole ():void {
    console.log("Vai corinthians")
}

//está livre - dirigido a abstração
function escreve(): string{
    return "Corinthians"
}

escreveConsole();
console.log(`Quem tem mais titulos: ${escreve()}`)

const empresa = 'Avanade';
console.log(
    empresa.length,
    empresa.toLocaleUpperCase(),
    empresa.toLocaleLowerCase()
);

const locale: Intl.LocalesArgument = 'pt-br';

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long', //short
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
console.log(new Date().toLocaleDateString(locale, options))
//---------------------------------------------------------

type addressType = {
    street: string;
    number: number;
    complement?: string;
    city: string;
    state: string;
    country?: string;
    zipCode: string;
}

type userType = {
    name: string;
    age: number;
    email: string;
    address: addressType;
    cpf?: string;           // ? torna opcional
}

const user: userType = {
    name: 'João', 
    age: 25, 
    email: 'joao@gmail.com', 
    address:{
        street: 'av jardins',
        number: 123,
        complement: 'casa',
        city: 'São José dos Campos',
        state: 'SP',
        country: 'Brasil',
        zipCode: '12222-222'}, 
    cpf: '000.000.000-00'
};