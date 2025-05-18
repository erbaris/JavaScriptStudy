import {write, writeLine} from "./console.js";

Array.prototype.partition = (pred) => {
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

export {reverseArray, swap}
