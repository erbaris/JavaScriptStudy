import {write, writeLine} from "../util/console.js"
import {randomInt} from "../util/numberUtil.mjs"

const playRound = () => {
    let firstRoll = rollTheDice()
    switch (firstRoll) {
        case 7:
        case 11:
            return true
        case 2:
        case 3:
        case 12:
            return false
        default:
            let secondRoll
            while((secondRoll = rollTheDice()) !== firstRoll) {
                if(secondRoll === 7)
                    return false
            }
            return true
    }
}

const rollTheDice = () => {
    return randomInt(1, 7) + randomInt(1, 7)
}

const playGame = (n) => {
    let win = 0
    for(let i = 0; i < n; i++)
        if(playRound())
            win++
    return win / n
}

const main = () => {
    write(`win probability: ${playGame(100_000)}`)
}

main()