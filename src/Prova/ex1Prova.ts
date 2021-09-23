class Item{
    private produto:string;
    private preco:number;
    private quantidade:number;

    constructor(produto:string, preco:number, quantidade:number) {
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public getProduto(){
        return this.produto;
    }
    public setProduto(produto:string){
        if (produto.length<1){
            throw new Error("Nome do produto inválido")
        } else{
            this.produto = produto;
        }
    }

    public getPreco(){
        return this.preco;
    }
    public setPreco(preco:number){
        if(preco<1){
            throw new Error("Preço do produto inválido.")
        } else{
            this.preco = preco;
        }
    }
    public getQuantidade(){
        return this.quantidade;
    }
    public setQuantidade(quantidade:number){
        if(quantidade<1){
            throw new Error("Quantia de produtos inválida")
        } else{
            this.quantidade = quantidade;
        }
    }

    calcularDesconto():number {
        let desconto = 0

        if (this.quantidade <= 10){
           return desconto = 0
        } else if (this.quantidade>=11 && this.quantidade<=20){
           return desconto = (this.preco/100)*10
        } else if(this.quantidade>=21 && this.quantidade<=50){
           return desconto = (this.preco/100)*20
        } else{
           return desconto = (this.preco/100)*25
        }
    }
    calcularTotal(){
        console.log(`O produto ${this.produto} de preço ${this.preco}, 
        de quantia comprada de ${this.quantidade} teve o desconto de ${this.calcularDesconto()}
         e o valor total foi de cada produto foi ${(this.preco - this.calcularDesconto())}, o Valor total de todos os produtos seria de: ${(this.preco - this.calcularDesconto())*this.quantidade}`)
    }

}

const item = new Item('Notebook',1000,10)

item.calcularTotal()


/*
try {
    item.setProduto('')
    
} catch (error:any) {
    console.log(error.message)
}

try {
    item.setPreco(0)
    
} catch (error:any) {
    console.log(error.message)
}

try {
    item.setQuantidade(0)
    
} catch (error:any) {
    console.log(error.message)
}
*/
