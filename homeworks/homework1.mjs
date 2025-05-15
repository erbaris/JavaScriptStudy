function main() {
    printRelationsTest()
    signumTest()
}
main()

function write(a) {
    process.stdout.write(a.toString())
}

function writeLine(a) {
    write(a === undefined ? '\n' : `${a}\n`)
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