class Funcionarios{
    private nome: string;
    private salarioHora:number;
    private diasTrabalhados:number;
    private totalFaltas:number;

    constructor(nome:string, salarioHora:number,diasTrabalhados:number,totalFaltas:number) {
        this.nome = nome;
        this.salarioHora = salarioHora;
        this.diasTrabalhados = diasTrabalhados;
        this.totalFaltas = totalFaltas;
    }

    public getNome(){
        return this.nome
    }
    public setNome(nome:string){
        this.nome = nome;
    }
    public getSalarioHora(){
        return this.salarioHora
    }
    public setSalarioHora(salarioHora:number){
        this.salarioHora = salarioHora
    }
    public getDiasTrabalhados(){
        return this.diasTrabalhados
    }
    public setDiasTrabalhados(diasTrabalhados:number){
        this.diasTrabalhados = diasTrabalhados;
    }
    public getTotalFaltas(){
        return this.totalFaltas
    }
    public setTotalFaltas(totalFaltas:number){
        this.totalFaltas = totalFaltas;
    }

    calcularSalarioBruto(){
        let salarioBruto = 0;
        salarioBruto = (this.salarioHora * this.diasTrabalhados)
        return salarioBruto;
    }
    calcularPLR(){
        let PLR = 0;
        if(this.totalFaltas == 0){
           return PLR = this.calcularSalarioBruto()
        } else if (this.totalFaltas == 1){
           return PLR = (this.calcularSalarioBruto()/100)*94
        } else if (this.totalFaltas == 2){
            return PLR = (this.calcularSalarioBruto()/100)*92
        } else if (this.totalFaltas == 3){
            return PLR = (this.calcularSalarioBruto()/100)*90
        } else if (this.totalFaltas == 4){
            return PLR = (this.calcularSalarioBruto()/100)*88
        } else if (this.totalFaltas >= 5){
            return PLR = 0
        } else {
            return 0
        }
    }
    calcularDesconto(){
        let desconto = 0
       return desconto = (this.calcularSalarioBruto()/100)*5
    }
    calcularLiquido(){
        let liquido = 0
       return liquido = (this.calcularSalarioBruto() - this.calcularDesconto() + this.calcularPLR() )
    }

}

const funcionario1 = new Funcionarios('Pedro',20,30,2)

const funcionario2 = new Funcionarios('Maria',50,30,4)

console.log(`O funcionário de nome ${funcionario1.getNome()} tem o salario bruto de ${funcionario1.calcularSalarioBruto()}, teve ${funcionario1.getTotalFaltas()} faltas e sua PLR foi de ${funcionario1.calcularPLR()}`)

console.log(`A funcionária de nome ${funcionario2.getNome()} tem o salario bruto de ${funcionario2.calcularSalarioBruto()}, o desconto de ${funcionario2.calcularDesconto()}, a PLR de ${funcionario2.calcularPLR()}, e o salario liquido de ${funcionario2.calcularLiquido()}`)