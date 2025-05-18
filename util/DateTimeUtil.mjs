import {randomInt} from "./numberUtil.mjs";
import {isValidDate} from "./csdDate.js";
import {writeLine} from "./console.js";

const daysStrTR = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
const monthsStrTR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
const daysStrEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthsStrEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const durationTillNow = (start) => duration(first, new Date())

const duration = (start, end) => {
    return end.getTime() - start.getTime()
}

const durationByYear = (start, end) => {
    return Math.trunc(duration(start, end) / (1000 * 60 * 60 * 24 * 365))
}

const getAge= (birthDate) => durationByYear(birthDate, new Date())

const durationByMonth = (start, end) => {
    return Math.trunc(duration(start, end) / 1000 * 60 * 60 * 24 * 30)
}

const durationByDay = (start, end) => {
    return Math.trunc(duration(start, end) / 1000 * 60 * 60 * 24)
}

const randomDate = (startYear, endYear) => {
    if(startYear !== undefined && endYear === undefined) {
        endYear = startYear
    }
    if(startYear === undefined) {
        startYear = new Date().getFullYear()
        endYear = startYear
    }
    let year = randomInt(startYear, endYear + 1)
    let month = randomInt(0, 12)
    let day = randomInt(1, 32)
    while(!isValidDate(day, month, year))
        day = randomInt(0, 31)
    return new Date(year, month, day)
}

const displayDateTR = (date) => writeLine(`${date.getDate()} ${monthsStrTR[date.getMonth()]} ${date.getFullYear()} ${daysStrTR[date.getDay()]}`)

const displayDateEN = (date) => writeLine(`${date.getDate()} ${monthsStrEN[date.getMonth()]} ${date.getFullYear()} ${daysStrEN[date.getDay()]}`)

const randomDateTest = () => {
    writeLine('---randomDateTest---')
    let d = randomDate()
    writeLine(d)
    displayDateTR(d)
    displayDateEN(d)
    d = randomDate(2020)
    writeLine(d)
    displayDateTR(d)
    displayDateEN(d)
    d = randomDate(2010, 2015)
    writeLine(d)
    displayDateTR(d)
    displayDateEN(d)
}
randomDateTest()


export {durationTillNow, duration, durationByYear, getAge, durationByMonth, durationByDay, randomDate, displayDateTR, displayDateEN}