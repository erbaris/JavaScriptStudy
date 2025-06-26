export class Matrix {
    constructor(row, col) {
        //TODO - DONE
        this._matrix = new Array(row)
        for(let i = 0; i < row; i++)
            this._matrix[i] = new Array(col)
    }

    get row() {
        //TODO - DONE
        return this._matrix.length
    }

    get col() {
        //TODO - DONE
        return this._matrix[0].length
    }

    setElement(i, j, e) {
        //TODO - DONE
        this._matrix[i][j] = e
    }

    getElement(i, j) {
        // New by me
        return this._matrix[i][j]
    }

    transposed() {
        //TODO: Returns new matrix which is the transpose of "this" - DONE
        const result = new Matrix(this.col(), this.row())
        for(let i = 0; i < this.row(); i++)
            for(let j = 0; j < this.col(); j++)
                    result.setElement(j, i, this.getElement(i ,j))
        return result
    }

    add(other) {
        //TODO: Returns the sum of two matrices. It is not needed to check that the matrices can be addable. - DONE
        const result = new Matrix(this.row(), this.col())
        for(let i = 0; i < this.row(); i++)
            for(let j = 0; j < this.col(); j++)
                result.setElement(i, j, this._matrix[i][j] + other.getElement(i, j))
        return result
    }

    subtract(other) {
        //TODO: Returns the difference of two matrices. It is not needed to check that the matrices can be subtractable. - DONE
        const result = new Matrix(this.row(), this.col())
        for(let i = 0; i < this.row(); i++)
            for(let j = 0; j < this.col(); j++)
                result.setElement(i, j, this._matrix[i][j] - other.getElement(i, j))
        return result

        //or => other.multiplyBy(-1); return this.add(other)
    }

    multiply(other) {
        //TODO: Returns the multiplication of two matrices. It is not needed to check that the matrices can be multiplied. - DONE
        //Link: https://en.wikipedia.org/wiki/Matrix_multiplication
        const result = new Matrix(this.row(), other.col())
        const n = this.col()
        for(let i = 0; i < result.row(); i++)
            for(let k = 0; k < result.col(); k++){
                let e = 0
                for(let j = 0; j < n; j++)
                    e += this.getElement(i, j) * other.getElement(j, k)
                result.setElement(i, k, e)
            }
        return result
    }

    addBy(value) {
        //TODO: add value by all elements - DONE
        for(let i = 0; i < this.row(); i++)
            for(let j = 0; j < this.col(); j++)
                this.setElement(i, j, this.getElement(i, j) + value)
    }

    subtractBy(value) {
        //TODO: subtract value by all elements - DONE
        this.addBy(-value)
    }

    multiplyBy(value) {
        //TODO: multiply value by all elements - DONE
        for(let i = 0; i < this.row(); i++)
            for(let j = 0; j < this.col(); j++)
                this.setElement(i, j, this.getElement(i, j) * value)
    }

    divideBy(value) {
        //TODO: divide value by all elements - DONE
        this.multiplyBy(1 / value)
    }

    toString() {
        // New by me
        for(let i = 0; i < this.row(); i++){
            for(let j = 0; j < this.col(); j++)
                write(`${this.getElement(i, j)}\t`)
            writeLine()
        }
    }

    //...
}