let write = a => process.stdout.write(a)
let writeLine = a => write(a === undefined ? '\n' : `${a}\n`)
let randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1
let randomText = (n, text) => {
    let str = ""
    let len = text.length;

    for (let i = 0; i < n; ++i)
        str += text.charAt(randomInt(0, len))

    return str
}
let randomTextTR = (n) => randomText(n, "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZabcçdefgğhıijklmnoöprsştuüvyz")

let randomTextsTR = (n, min, bound) => {
    let result = [];

    while (n--)
        result.push(randomTextTR(randomInt(min, bound)))

    return result
}

let randomTextEN = (n) =>  randomText(n, "ABCDEFGHIJKLMNOPQRSTUWXVYZabcdefghijklmnopqrstuwxvyz")

let randomTextsEN = (n, min, bound) => {
    let result = [];

    while (n--)
        result.push(randomTextEN(randomInt(min, bound)))

    return result
}

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
        products.push(new Product(randomInt(0, 1000), randomTextEN(randomInt(0, 20)), randomInt(0, 2) - 1 ? randomInt(0, 1000) : 0, randomInt(0, 10_000), randomInt(10_000, 100_000)));
    }
    return products
}

Array.prototype.partition = function(pred) {
    let partitionIdx = this.length
    let i = 0
    while(i < partitionIdx){
        if(pred(this[i]))
            swap(this, i , --partitionIdx)
        else
            i++
    }
    return partitionIdx
}

const partitionTest = () => {
    let a = [2, 0, 7, 3, 4, 5]
    writeLine("---partitionTest---")
    writeLine("Orijinal array:")
    a.forEach(e => write(`${e} `))
    writeLine()

    let partitionIndex = a.partition(x => x % 2 === 0)

    writeLine("Partition Array:")


    a.forEach(e => write(`${e} `))

    writeLine()

    writeLine(partitionIndex)
}
//partitionTest()

let main = () => {


}

main()

let randomProductTest = () => {
    writeLine('---randomProductTest---')
    let products = createRandomProducts(100)
    products.forEach(p => {writeLine(`id: ${p.id}, name: ${p.name}, stock: ${p.stock}, cost: ${p.cost}, price: ${p.price}, total: ${p.getTotal()}`)})
    // Stokta bulunan ürünleri maliyet fiyatına göre pahalıdan ucuza doğru sıralayınız
    // Stokta bulunmayan ürünleri total miktarına göre sıralayınız

    writeLine("\n\n\n---Sorted according to cost with stock---\n\n\n")
    products.filter(p => p.stock > 0).sort((a, b) => b.cost - a.cost).forEach(p => {writeLine(`id: ${p.id},      name: ${p.name} \n                  stock: ${p.stock},  cost: ${p.cost},       price: ${p.price},     total: ${p.getTotal()}`)})

    writeLine("\n\n\n---Sorted according to Total---\n\n\n")
    products.filter(p => p.stock > 0).sort((a, b) => a.getTotal() - b.getTotal()).forEach(p => {writeLine(`id: ${p.id},      name: ${p.name} \n                  stock: ${p.stock},  cost: ${p.cost},       price: ${p.price},     total: ${p.getTotal()}`)})

}
//randomProductTest()

const countString = (s1, s2) => {
    let result = 0
    for(let i = -1; (i = s1.indexOf(s2, i + 1)) !== -1; )
        result++

    return result
}

const countStringTest = () => {
    const s1 = "Bugün hava çok güzel. Bu çok güzel havada ders mi yapılır"
    const s2 = "çok"
    writeLine(countString(s1, s2) === 2)
    const s3 = "aaa"
    const s4 = "aa"
    writeLine(countString(s3, s4) === 2)
}
//countStringTest()

const padLeading = (s, len, str) => {
    if(s.length < len)
        return str.repeat(len - s.length) + s
    return s
}

const padTrailing = (s, len, str) => {
    if(s.length < len)
        return s + str.repeat(len - s.length)
    return s
}
const padLeadingTest = () => {
    writeLine("---padLeadingTest---")
    writeLine(padLeading("ankara", 10, "x") === "xxxxankara")
}
//padLeadingTest()

const padTrailingTest = () => {
    writeLine("---padTrailingTest---")
    writeLine(padTrailing("ankara", 10, "x") === "ankaraxxxx")
}
//padTrailingTest()

const join = (texts, str) => {
    let result = ""
    for(let s of texts) {
        result = result.concat(s, str)
    }

    return result.substring(0, result.length - str.length)
}

const joinTest = () => {
    let texts = ["ali", "veli", "hüseyin", "fatma", "ayse"]
    writeLine('---joinTest---')
    write(join(texts, "-"))

}
//joinTest()

function countValue(array, val) {
    let count = 0
    array.forEach(e => {if(e === val)  count++ })
    return count
}



function reverseArray(a) {
    let half = Math.trunc(a.length / 2)
    for(let i = 0; i < half; i++)
        swap(a, i, a.length - i - 1)
}

function swap(a, i, j) {
    let tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
}

function nextFibonacciNumber(a) {
    if (a < 0)
        return 0

    let pre = 0
    let result = 1
    let tmp
    let i = 3
    while(1) {
        tmp = pre
        pre = result
        result += tmp
        if ( result > a)
            return result
        i++
    }
}

function fibonacciTest() {
    for(let i = 1; i < 50; i++)
        console.log(fibonacciNumber(i))
}
function fibonacciNumber(n) {
    if (n <= 1)
        return 0
    if (n === 2)
        return 1
    let pre = 0
    let result = 1
    let tmp
    for( let i = 3; i <= n; i++) {
        tmp = pre
        pre = result
        result += tmp
    }

    return result
}

function amstrongTest() {
    for(let n = 0; n <= 999_999; n++)
        if(isAmstrong(n))
            console.log(n)
}

function isAmstrong(a) {
    return  a >= 0 && a === digitsPowSum(a)
}

function digitsPowSum(a) {
    let digits = countDigits(a)
    let result = 0
    while (a !== 0){
        result += Math.pow(a % 10, digits)
        a = Math.trunc(a / 10)
    }
    return result
}

function nthPrime(n) {
    let result = 0
    let i = 2
    for(; result < n; i++){
        if (isPrime(i))
            result++
    }
    return i - 1
}

function isPrime(a) {
    if (a <= 1)
        return false

    if (a % 2 === 0)
        return a === 2

    if (a % 3 === 0)
        return a ===3

    if (a % 5 === 0)
        return a === 5

    if (a % 7 === 0)
        return a === 7

    let sqrt = Math.trunc(Math.sqrt(a))

    for (let i = 11;i <= sqrt; i += 2)
        if (a % i === 0)
            return false

    return true
}

function reverseNumber(a) {
    let result = 0
    while(a) {
        result = result * 10 + a % 10
        a = Math.trunc(a / 10)
    }
    return result
}

function findDelta(a, b, c) {
    return b * b - 4 * a * c
}

function findRoots(a, b, c) {
    let delta = findDelta(a, b, c)
    console.log(delta)
    if(delta === 0)
        return - b / 2 * a
    if(delta > 0){
        let sqrtDelta = Math.sqrt(delta)
        let x1 = (- b + sqrtDelta) / 2 * a
        let x2 = (- b - sqrtDelta) / 2 * a
        return [x1, x2]
    }
    return Number.NaN
}

function getDigitsSum(val) {
    let sum = 0
    sum += parseInt(val % 10)
    val /= 10
    sum += parseInt(val % 10)
    val /= 10
    sum += parseInt(val % 10)

    return Math.abs(sum)
}

function countDigits(a) {
    return !a ? 1 : Math.trunc(Math.log10(Math.abs(a))) + 1
}