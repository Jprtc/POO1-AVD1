"use strict";
var Funcionarios = /** @class */ (function () {
    function Funcionarios(nome, salarioHora, diasTrabalhados, totalFaltas) {
        this.nome = nome;
        this.salarioHora = salarioHora;
        this.diasTrabalhados = diasTrabalhados;
        this.totalFaltas = totalFaltas;
    }
    Funcionarios.prototype.getNome = function () {
        return this.nome;
    };
    Funcionarios.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionarios.prototype.getSalarioHora = function () {
        return this.salarioHora;
    };
    Funcionarios.prototype.setSalarioHora = function (salarioHora) {
        this.salarioHora = salarioHora;
    };
    Funcionarios.prototype.getDiasTrabalhados = function () {
        return this.diasTrabalhados;
    };
    Funcionarios.prototype.setDiasTrabalhados = function (diasTrabalhados) {
        this.diasTrabalhados = diasTrabalhados;
    };
    Funcionarios.prototype.getTotalFaltas = function () {
        return this.totalFaltas;
    };
    Funcionarios.prototype.setTotalFaltas = function (totalFaltas) {
        this.totalFaltas = totalFaltas;
    };
    Funcionarios.prototype.calcularSalarioBruto = function () {
        var salarioBruto = 0;
        salarioBruto = (this.salarioHora * this.diasTrabalhados);
        return salarioBruto;
    };
    Funcionarios.prototype.calcularPLR = function () {
        var PLR = 0;
        if (this.totalFaltas == 0) {
            return PLR = this.calcularSalarioBruto();
        }
        else if (this.totalFaltas == 1) {
            return PLR = (this.calcularSalarioBruto() / 100) * 94;
        }
        else if (this.totalFaltas == 2) {
            return PLR = (this.calcularSalarioBruto() / 100) * 92;
        }
        else if (this.totalFaltas == 3) {
            return PLR = (this.calcularSalarioBruto() / 100) * 90;
        }
        else if (this.totalFaltas == 4) {
            return PLR = (this.calcularSalarioBruto() / 100) * 88;
        }
        else if (this.totalFaltas >= 5) {
            return PLR = 0;
        }
        else {
            return 0;
        }
    };
    Funcionarios.prototype.calcularDesconto = function () {
        var desconto = 0;
        return desconto = (this.calcularSalarioBruto() / 100) * 5;
    };
    Funcionarios.prototype.calcularLiquido = function () {
        var liquido = 0;
        return liquido = (this.calcularSalarioBruto() - this.calcularDesconto() + this.calcularPLR());
    };
    return Funcionarios;
}());
var funcionario1 = new Funcionarios('Pedro', 20, 30, 2);
var funcionario2 = new Funcionarios('Maria', 50, 30, 4);
console.log("O funcion\u00E1rio de nome " + funcionario1.getNome() + " tem o salario bruto de " + funcionario1.calcularSalarioBruto() + ", teve " + funcionario1.getTotalFaltas() + " faltas e sua PLR foi de " + funcionario1.calcularPLR());
console.log("A funcion\u00E1ria de nome " + funcionario2.getNome() + " tem o salario bruto de " + funcionario2.calcularSalarioBruto() + ", o desconto de " + funcionario2.calcularDesconto() + ", a PLR de " + funcionario2.calcularPLR() + ", e o salario liquido de " + funcionario2.calcularLiquido());
