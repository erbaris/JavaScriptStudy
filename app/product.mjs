import {writeLine} from "../util/console.js"
import {randomInt} from "../util/numberUtil.mjs"
import * as stringUtil from "../util/stringUtil.mjs"

let Product = function (id, name, stock, cost, price) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.cost = cost;
    this.price = price;
    this.getTotal =  function () {return this.stock * this.price }
    this.toString = function () {return this.name}
}

let createRandomProducts = (count) =>  {
    let products = []
    while(count--) {
        products.push(new Product(randomInt(0, 1000), stringUtil.randomTextEN(randomInt(0, 20)), randomInt(0, 2) ? randomInt(0, 1000) : 0, randomInt(0, 10_000), randomInt(10_000, 100_000)))
    }
    return products
}

let randomProductTest = () => {
    writeLine('---randomProductTest---')
    let products = createRandomProducts(100)
    products.forEach(p => {writeLine(`id: ${p.id}, name: ${p.name}, stock: ${p.stock}, cost: ${p.cost}, price: ${p.price}, total: ${p.getTotal()}`)})
    // Stokta bulunan ürünleri maliyet fiyatına göre pahalıdan ucuza doğru sıralayınız
    // Stokta bulunan ürünleri total miktarına göre sıralayınız

    writeLine("\n\n\n---Sorted according to cost with stock---\n\n\n")
    products.filter(p => p.stock > 0).sort((a, b) => b.cost - a.cost).forEach(p => {writeLine(`id: ${p.id},      name: ${p.name} \n                  stock: ${p.stock},  cost: ${p.cost},       price: ${p.price},     total: ${p.getTotal()}`)})

    writeLine("\n\n\n---Sorted according to Total---\n\n\n")
    products.filter(p => p.stock > 0).sort((a, b) => a.getTotal() - b.getTotal()).forEach(p => {writeLine(`id: ${p.id},      name: ${p.name} \n                  stock: ${p.stock},  cost: ${p.cost},       price: ${p.price},     total: ${p.getTotal()}`)})

}
randomProductTest()
