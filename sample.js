import {write, writeLine} from "./util/console.js"
import * as numberUtil from "./util/numberUtil.mjs"
import * as arrayUtil from "./util/arrayUtil.mjs"
import * as stringUtil from "./util/stringUtil.mjs"
import {Complex} from "./math/Complex.js";
import {randomInt, isPrime} from "./util/numberUtil.mjs";
import {Fraction} from "./math/Fraction.js";

const count = 3

let main = () => {
    //let count = 0
    //const interval = setInterval(() => find3RandomPrime(count), 1000)

    let f1 = new Fraction(1, 5)
    writeLine(f1)
    let f2 = new Fraction(2, 4)
    writeLine(f2)
    writeLine("add")
    writeLine(f1.add(f2))

    writeLine("compareTo")
    writeLine(f2.compareTo(f1))

    writeLine("equals")
    writeLine(f2.equals(f1))
    writeLine(f1.equals(f1))

    writeLine("subtract")
    writeLine(f1.subtract(f2))

    writeLine("set denominator 11")
    f1.denominator = 11
    writeLine(f1)
    writeLine("inc")
    f1.inc()
    writeLine(f1)
    writeLine("dec")
    f1.dec()
    f1.dec()
    writeLine(f1)

    writeLine("addwithInt 5")
    writeLine(f1.addWithInt(5))

    writeLine("subtractwithInt 4")
    writeLine(f1.subtractWithInt(4))

    writeLine("---mult ve div----")
    writeLine(f1)
    writeLine(f2)
    writeLine(f1.multiply(f2))
    writeLine(f1.divide(f2))

    writeLine("----multiply divide int---")
    writeLine(f1.multiplyWithInt(2))
    writeLine(f1.divideWithInt(2))

    writeLine("-------")
    let f3 = new Fraction(0, 5)
    writeLine(f3)

    try {
        let f4 = new Fraction(3, 0)
    }
    catch(e) {
        writeLine(e)
    }
    try {
        f1.denominator = 0
        writeLine(f1)
    }
    catch(e) {
        writeLine(e)
    }
    try {
        let f5 = new Fraction(0, 0)
    }
    catch(e) {
        writeLine(e)
    }

}

main()

const find3RandomPrime = (count) => {
    //let count = 0

    let tmp = randomInt(2, 10000)
    if(isPrime(tmp)){
        writeLine(tmp)
        count++
    }

}
