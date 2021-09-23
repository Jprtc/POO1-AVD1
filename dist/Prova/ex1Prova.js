"use strict";
var Item = /** @class */ (function () {
    function Item(produto, preco, quantidade) {
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Item.prototype.getProduto = function () {
        return this.produto;
    };
    Item.prototype.setProduto = function (produto) {
        if (produto.length < 1) {
            throw new Error("Nome do produto inválido");
        }
        else {
            this.produto = produto;
        }
    };
    Item.prototype.getPreco = function () {
        return this.preco;
    };
    Item.prototype.setPreco = function (preco) {
        if (preco < 1) {
            throw new Error("Preço do produto inválido.");
        }
        else {
            this.preco = preco;
        }
    };
    Item.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    Item.prototype.setQuantidade = function (quantidade) {
        if (quantidade < 1) {
            throw new Error("Quantia de produtos inválida");
        }
        else {
            this.quantidade = quantidade;
        }
    };
    Item.prototype.calcularDesconto = function () {
        var desconto = 0;
        if (this.quantidade <= 10) {
            return desconto = 0;
        }
        else if (this.quantidade >= 11 && this.quantidade <= 20) {
            return desconto = (this.preco / 100) * 10;
        }
        else if (this.quantidade >= 21 && this.quantidade <= 50) {
            return desconto = (this.preco / 100) * 20;
        }
        else {
            return desconto = (this.preco / 100) * 25;
        }
    };
    Item.prototype.calcularTotal = function () {
        console.log("O produto " + this.produto + " de pre\u00E7o " + this.preco + ", \n        de quantia comprada de " + this.quantidade + " teve o desconto de " + this.calcularDesconto() + "\n         e o valor total foi de cada produto foi " + (this.preco - this.calcularDesconto()) + ", o Valor total de todos os produtos seria de: " + (this.preco - this.calcularDesconto()) * this.quantidade);
    };
    return Item;
}());
var item = new Item('Notebook', 1000, 10);
item.calcularTotal();
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
