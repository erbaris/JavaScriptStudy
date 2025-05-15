import {write, writeLine} from "./console.mjs"
import {randomInt} from "./numberUtil.mjs"

export const randomText = (n, text) => {
    let str = ""
    let len = text.length;

    for (let i = 0; i < n; ++i)
        str += text.charAt(randomInt(0, len))

    return str
}
export const randomTextTR = (n) => randomText(n, "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZabcçdefgğhıijklmnoöprsştuüvyz")

export const randomTextsTR = (n, min, bound) => {
    let result = [];

    while (n--)
        result.push(randomTextTR(randomInt(min, bound)))

    return result
}

export const randomTextEN = (n) =>  randomText(n, "ABCDEFGHIJKLMNOPQRSTUWXVYZabcdefghijklmnopqrstuwxvyz")

export const randomTextsEN = (n, min, bound) => {
    let result = [];

    while (n--)
        result.push(randomTextEN(randomInt(min, bound)))

    return result
}

export const countString = (s1, s2) => {
    let result = 0
    for(let i = -1; (i = s1.indexOf(s2, i + 1)) !== -1; )
        result++

    return result
}

const countStringTest = () => {
    writeLine("---countStringTest---")
    const s1 = "Bugün hava çok güzel. Bu çok güzel havada ders mi yapılır"
    const s2 = "çok"
    writeLine(countString(s1, s2) === 2)
    const s3 = "aaa"
    const s4 = "aa"
    writeLine(countString(s3, s4) === 2)
}
//countStringTest()

export const padLeading = (s, len, str) => {
    if(s.length < len)
        return str.repeat(len - s.length) + s
    return s
}

export const padTrailing = (s, len, str) => {
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

export const join = (texts, str) => {
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

