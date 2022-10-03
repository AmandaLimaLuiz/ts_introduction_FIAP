class Pessoa{
    //atributos ou propriedades
    nome: string;
    idade: number;

    //métodos (função metida dentro de uma classe)
    constructor(parametroNome:string, parametroIdade:number){
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de idade ${this.idade} está andando`)
    }
}

export default Pessoa;
