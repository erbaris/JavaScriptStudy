import {write, writeLine} from "./util/console.js"
import * as numberUtil from "./util/numberUtil.mjs"
import {randomInt} from "./util/numberUtil.mjs";


const coinProbabilityTest = () => {
    let n = 100_000_000
    let tailCount = 0
    while(n--)
        if (numberUtil.randomInt(0, 2) === 1)
            tailCount++
    return tailCount / 100_000_000
}

const tombalaRoundPlay = () => {
    let number1 = randomInt(1, 100)
    let number2 = randomInt(1, 100)
    while (number1 === number2)
        number2 = randomInt(1, 100)
    let number3 = randomInt(1, 100)
    while (number1 === number3 || number2 === number3)
        number3 = randomInt(1, 100)
    let total = number1 + number2 + number3
    let max = Math.max(number1, number2, number3)
    let min = Math.min(number1, number2, number3)
    return [total < 150, numberUtil.isPrime(total), max - min > total - max - min]
}

const tombalaGamePlay = (n) => {
    let winCnt = [0, 0, 0]
    let tmp = n
    while (tmp--){
        let results = tombalaRoundPlay()
        winCnt[0] += results[0]
        winCnt[1] += results[1]
        winCnt[2] += results[2]
    }
    return [winCnt[0] / n, winCnt[1] / n, winCnt[2] / n]
}

let main = () => {
    let results = tombalaGamePlay(30_000)
    writeLine('win probability1: ' + results[0])
    writeLine('win probability2: ' + results[1])
    writeLine('win probability3: ' + results[2])

    writeLine('coin probability: ' + coinProbabilityTest())
}

main()
