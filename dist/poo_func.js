"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
const funcionario = new Funcionario_1.default('Maria', 21, '00011', '00011122233');
funcionario.cadFuncionario();
