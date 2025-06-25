const swap = (matrix, i, j, m, n) => {
    let tmp = matrix[i][j]
    matrix[i][j] = matrix[m][n]
    matrix[m][n] = tmp
}

export class Matrix {
    constructor(row, col) {
        //TODO
        this._matrix = new Array(row)
        for(let i = 0; i < row; i++)
            this._matrix[i] = new Array(col)
    }

    get row() {
        //TODO
        return this._matrix.length
    }

    get col() {
        //TODO
        return this._matrix[0].length
    }

    setElement(i, j, e) {
        //TODO
        this._matrix[i][j] = e
    }

    transposed() {
        //TODO: Returns new matrix which is the transpose of "this"
        for(let i = 0; i < this.row(); i++)
            for(let j = 0; j < this.col(); j++)
                if(i !== j)
                    swap(this._matrix, i, j, j, i)
    }

    add(other) {
        //TODO: Returns the sum of two matrices. It is not needed to check that the matrices can be addable.
    }

    subtract(other) {
        //TODO: Returns the difference of two matrices. It is not needed to check that the matrices can be subtractable.
    }

    multiply(other) {
        //TODO: Returns the multiplication of two matrices. It is not needed to check that the matrices can be multiplied.
        //Link: https://en.wikipedia.org/wiki/Matrix_multiplication
    }

    addBy(value) {
        //TODO: add value by all elements
    }

    subtractBy(value) {
        //TODO: subtract value by all elements
    }

    multiplyBy(value) {
        //TODO: multiply value by all elements
    }

    divideBy(value) {
        //TODO: divide value by all elements
    }

    //...
}