import {write, writeLine} from "./util/console.js"
import * as numberUtil from "./util/numberUtil.mjs"
import * as arrayUtil from "./util/arrayUtil.mjs"
import * as stringUtil from "./util/stringUtil.mjs"
import {Complex} from "./math/Complex";

let main = () => {
    let a = new Complex(3, -5)
    writeLine(a)
}

main()
