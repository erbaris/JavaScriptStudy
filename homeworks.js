function main() {
    printRelationsTest()
    signumTest()
    primeFactorTest()
    printBallGameShapeTest()
    findPrimeSumTest()
    printDiamondTest()
    printDurationTest()
    isAllConditionTest()
}
main()

function write(a) {
    process.stdout.write(a.toString())
}

function writeLine(a) {
    write(a === undefined ? '\n' : `${a}\n`)
}

// HOMEWROK 2

function primeFactorTest() {
    writeLine('--primeFactorTest--')
    write('12: ')
    primeFactor(12)
    writeLine()
    write('5: ')
    primeFactor(5)
    writeLine()
    write('27: ')
    primeFactor(27)
    writeLine()
    write('2345: ')
    primeFactor(2345)
    writeLine()
}
function primeFactor(a) {
    let divider = 2
    while(a !== 1) {
        while(a % divider === 0){
          a /= divider
          write(divider + ' ')
        }
        divider++
    }
}

function printBallGameShapeTest() {
    writeLine('---printBallGameShapeTest---')
    writeLine(' 12 x 3: ')
    printBallGameShape(12, 3)
    writeLine(' 1 x 2: ')
    printBallGameShape(1, 2)
    writeLine(' 10 x 5: ')
    printBallGameShape(10, 5)
    writeLine(' 10 x 1: ')
    printBallGameShape(10, 1)
    writeLine(' 20 x 4: ')
    printBallGameShape(20, 4)
    writeLine('----------')
}

function printBallGameShape(height, width) {
    let pointer = 0
    let forward = true
    for(let i = 0; i < height; i++){
        write('|')
        printBlank(pointer)
        write('*')
        if(pointer + 1 <= width)
            printBlank(width - pointer - 1)
        write('|')
        if(width !== 1){
            if(forward){
                if(pointer === width - 1){
                    pointer--
                    forward = false
                }
                else
                    pointer++
            }
            else {
                if(pointer === 0){
                    pointer++
                    forward = true
                }
                else
                    pointer--
            }
        }
        writeLine()
    }
}

function printBlank(a) {
    while(a--)
        write(' ')
}

function findPrimeSumTest() {
    writeLine('12: ')
    findPrimeSum(12)
    writeLine('16: ')
    findPrimeSum(16)
    writeLine('56: ')
    findPrimeSum(56)
    writeLine('1346: ')
    findPrimeSum(1346)
}

function findPrimeSum(a) {
    let i = 2
    while(++i <= Math.trunc(a / 2))
        if(isPrime(i) && isPrime(a - i)){
            write(i + " + " + (a - i))
            writeLine()
        }

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
function printDiamondTest() {
    let n = 10
    while(n--){
        writeLine('Diamond Test: ' + n)
        printDiamond(n)
        writeLine()
    }
}

function printDiamond(n) {
    for(let i = 0; i < n; i++){
        printBlank(n - i)
        printStar(2 * i + 1)
        writeLine()
    }
    if(n !== 1)
        for(let i = n - 2; i >= 0; i--){
            printBlank(n - i)
            printStar(2 * i + 1)
            writeLine()
        }

}

function printStar(n) {
    while(n--){
        write('*')
    }
}

function printDurationTest() {
    write('0: ')
    printDuration(0)
    write('15: ')
    printDuration(15)
    write('70: ')
    printDuration(70)
    write('120: ')
    printDuration(120)
    write('170: ')
    printDuration(170)
    write('2342440: ')
    printDuration(2342440)
    write('3601: ')
    printDuration(3601)
}


function printDuration(s) {
    let second = s % 60
    let totalMin = Math.trunc(s / 60)
    let min = totalMin % 60
    let hour = Math.trunc(totalMin / 60)
    if (hour)
        write(hour + ' saat ')
    if(min)
        write(min + ' dakika ')
    if(second)
        write(second + ' saniye ')
    writeLine()
}

function isAllConditionTest() {
    write('113: ' + isAllConditions(113))
    writeLine()
    write('112: ' + isAllConditions(112))
    writeLine()
    let n = 1000
    while (n--)
        if(isAllConditions(n))
            writeLine(n + ' provides all conditions.')
}

function isAllConditions(val) {
    let a = Math.trunc(val / 100)
    let b = Math.trunc(val / 10) % 10
    let c = val % 10
    let abc = a * 100 + b * 10 + c
    let cba = c * 100 + b * 10 + a
    let ab = 10 * a + b
    let bc = 10 * b + c
    let cb = 10 * c + b
    let ba = 10 * b + a
    return cba > abc && isPrime(abc) && isPrime(cba) && isPrime(ab) && isPrime(bc) && isPrime(cb) && isPrime(ba)
}


// HOMEWROK 1

function printRelationsTest() {
    writeLine('--primeFactorTest--')
    printRelations(10, 20,30)
    writeLine()
    printRelations(30, 10,20)
    writeLine()
    printRelations(10, 10,15)
    writeLine()
    printRelations(40, 50,50)
    writeLine()
}


function printRelations(a, b, c) {
    let min = findMin(a, b, c)
    let max = findMax(a, b, c)
    let midVal = mid(a, b, c) //a + b + c - min - max
    write(min)
    if(min === midVal)
        write('=')
    else
        write('<')
    write(midVal)
    if (max === midVal)
        write('=')
    else
        write('<')
    write(max)

}
function findMin(a, b, c) {
    if(a <= b && a <= c)
        return a
    if(b <= c && b <= a)
        return b
    return c
}
function findMax(a, b, c) {
    if(a >= b && a >= c)
        return a
    if(b >= c && b >= a)
        return b
    return c
}

function mid(a, b, c) {
    if(a <= b && a >= c || a <= c && a >= b)
        return a
    if(b <= c && b >= a || b <= a && b >= c)
        return b
    return c
}

function signumTest() {
    writeLine('--signumTest--')
    writeLine('0 is: ' + signum(0))
    writeLine('-5 is: ' + signum(-5))
    writeLine('15 is: ' + signum(15))
    writeLine('-0.1 is: ' + signum(-0.1))

}
function signum(a) {
    if(a < 0)
        return -1
    if(a > 0)
        return 1
    return 0
}