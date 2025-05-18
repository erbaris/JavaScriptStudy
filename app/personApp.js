import {randomTextTR} from "../util/stringUtil.mjs";
import {randomInt} from "../util/numberUtil.mjs";
import {write, writeLine} from "../util/console.js";
import {durationByYear, getAge} from "../util/DateTimeUtil.mjs";


const Person = function (fullName, TCNo, birthDate, address) {
    this.fullName = fullName
    this.TCNo = TCNo
    this.birthDate = birthDate
    this.address = address
    this.age = getAge(birthDate)
}

const generatePersonArray = (n) => {
    let personArray = []
    for (let i = 0; i < n; i++) {
        let year = randomInt(1970, 2020)
        let month = randomInt(1, 12)
        let day = randomInt(1, 30)
        let d = new Date(year, month, day, 0 , 0 , 0)
        personArray.push(new Person(randomTextTR(10), randomInt(10_000_000_000, 99_999_999_999), d, randomTextTR(10)))
    }
    return personArray
}

const printPersonArray = (personArray) => {
    for (let i = 0; i < personArray.length; i++) {
        writeLine(personArray[i].fullName + " " + personArray[i].TCNo + " " + personArray[i].birthDate.toString() + " " + personArray[i].address)
    }
}

const averageAges = (personArray) => {
    let sum = 0
    for (let i = 0; i < personArray.length; i++) {
        sum += personArray[i].age
    }
    return sum / personArray.length
}

const main = () => {
    let d = new Date(1982, 6, 20, 0 , 0 , 0)
    writeLine(getAge(d))
    writeLine("----")
    let people = generatePersonArray(100)
    writeLine(people.length)
    printPersonArray(people)
    writeLine('average age: ' + averageAges(people))
}
main()