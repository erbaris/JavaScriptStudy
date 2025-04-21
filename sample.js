function main() {

    let a = [1, 2, 3, 4, 5]

    reverseArray(a)

    writeLine(a)

    //console.log("test)

    fibonacciTest()
    console.log(nextFibonacciNumber(1343))
    
}
main()

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

function write(a) {
    process.stdout.write(a)
}

function writeLine(a) {
    write(a === undefined ? '\n' : `${a}\n`)
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