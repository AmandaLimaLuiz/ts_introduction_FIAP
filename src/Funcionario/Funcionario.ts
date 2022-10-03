import Pessoa from "../Pessoa";

//Herança extend
class Funcionario extends Pessoa{  
// encapsulamento. modificador de acesso
// public - todos tem acesso
// protected - todos do mesmo ambiente, e alguns que tem acesso a esse ambiente
// private - só no mesmo ambiente
// static - atributo ou metodo estatico, não pecisa instanciar a classe para acessar

    ri: string;
    cpf: string;

    constructor(parametroNome:string,parametroIdade:number, parametroRi:string, parametroCpf:string ){
        super(parametroNome, parametroIdade)
        this.ri = parametroRi;
        this.cpf = parametroCpf;
    }
    cadFuncionario(){      
        return console.log(`Funcionario ${this.nome} de idade ${this.idade} foi cadastrado com sucesso!`)
    }
    

}
export default Funcionario;