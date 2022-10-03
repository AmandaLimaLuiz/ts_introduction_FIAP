"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Pessoa"));
//Herança
class Funcionario extends Pessoa_1.default {
    ri;
    cpf;
    constructor(parametroNome, parametroIdade, parametroRi, parametroCpf) {
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCpf;
    }
    cadFuncionario() {
        return console.log(`Funcionario ${this.nome} de idade ${this.idade} foi cadastrado com sucesso!`);
    }
}
exports.default = Funcionario;
