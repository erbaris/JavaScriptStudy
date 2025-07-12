/*
Sınıf Çalışması: Bir kesri temsil eden Fraction isimli sınıfı aşağıdaki açıklamalara göre yazınız
Açıklamalar:
+•	Sınıf Matematikteki bir kesri temsil ettiğinden pay (numerator) ve payda (denominator) değerleri tutulacaktır.
+•	Sınıfın ilgili set ve get property elemanları yazılacaktır.
•	Pay'ın sıfırdan farklı veya sıfır VE paydanın sıfır olması durumunda uygun mesajlar ile error fırlatılacaktır
+•	Kesir her durumda sadeleşmiş bir biçimde tutulacaktır. Örneğin kesrin pay ve paydası sırasıyla 4 ve 18 olarak verildiğinde kesir 2 / 9 olarak tutulacaktır.
+•	Kesir negatif ise işaret payda bulunacaktır. Örneğin kesrin pay ve paydası sırasıyla 3 ve -4 olarak verilmişse kesir -3 / 4 biçiminde tutulacaktır.
+•	Kesrin pay ve paydasının her ikisinin birden negatif olması durumunda kesir pozitif olarak tutulacaktır.
+•	Kesrin payının sıfır olması durumunda payda ne olursa olsun 1(bir) yapılacaktır.
+•	Sınıfın iki kesri toplayan, bir kesir ile bir tamsayıyı toplayan metotları olacaktır. Aynı işlemler çıkarma, çarpma ve bölme için de yapılacaktır.
+•	Sınıfın kesri 1(bir) artıran ve bir azaltan inc ve dec metotları yazılacaktır.
+•	Sınıfın toString metodu şu formatta yazı döndürecek şekilde override edilecektir. Örneğin 3 / 10 kesri için -> 3 / 10 = 3.333333 10 / 1 kesri için -> 10 Ondalık kısımda 6 basamak gösterilecektir. Geri kalan basamaklar yuvarlanacaktır.
+•	Sınıfın equals metodu iki kesrin eşitlik karşılaştırması için yazılacaktır.
+•	Sınıfın compareTo metodu iki kesrin büyüklük küçüklük karşılaştırmasını yapacaktır. String sınıfının compareTo metodunun mantığına göre tasarlayınız.
+•	Kesrin double türden ondalık değerini döndüren realValue property elemanı yazılacaktır.


 */

const gcd = (a, b) => {
    let min = Math.abs(a) < Math.abs(b) ? Math.abs(a) : Math.abs(b)
    for(let i = min; min > 0; min--)
        if(a % i === 0 && b % i === 0)
            return i
}

const checkError = (numerator, denominator) => {
    if(numerator === 0 && denominator === 0)
        throw new Error('Indeterminate')
    if(denominator === 0)
        throw new Error('Invalid denominator')

}

const simplify = (numerator, denominator) => {
    checkError(numerator, denominator)
    let divider
    while((divider = gcd(numerator, denominator)) !== 1) {
        numerator = numerator / divider
        denominator = denominator / divider
    }
    return [numerator, denominator]
}

export class Fraction {
    constructor(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator;
        if(this._denominator < 0) {
            this._denominator *= -1
            this._numerator *= -1
        }
        if(this._numerator === 0)
            this._denominator = 1
        else
            [this._numerator, this._denominator] = simplify(this._numerator, this._denominator)
        this._realValue = this._numerator / this._denominator
    }

    set numerator(value) {
        this._numerator = value
        if(this._numerator === 0)
            this._denominator = 1
        else
            [this._numerator, this._denominator] = simplify(this._numerator, this._denominator)
        this._realValue = this._numerator / this._denominator
    }

    get numerator() {
        return this._numerator
    }

    set denominator(value) {
        this._denominator = value
        if(this._denominator < 0) {
            this._denominator *= -1
            this._numerator *= -1
        }
        [this._numerator, this._denominator] = simplify(this._numerator, this._denominator)
        this._realValue = this._numerator / this._denominator
    }

    get denominator() {
        return this._denominator
    }

    get realValue() {
        return this._realValue
    }

    compareTo(other) {
        let result = this.numerator * other.denominator - other.numerator * this.denominator
        if(result < 0)
            return -1
        else if(result === 0)
            return 0
        else
            return 1
    }

    equals(other) {
        return this.numerator.equals(other.numerator) && this.denominator.equals(other.denominator)
    }

    inc() {
        this._numerator += this._denominator
        [this._numerator, this._denominator] = simplify(this._numerator, this._denominator)
    }

    dec() {
        this._numerator -= this._denominator
        [this._numerator, this._denominator] = simplify(this._numerator, this._denominator)
    }

    add(other) {
        this._numerator = this._numerator * other.denominator + other.numerator * this._denominator
        this._denominator *= other.denominator
        [this._numerator, this._denominator] = simplify(this._numerator, this._denominator)
    }

    addWithInt(value) {
        this.numerator += value * this._denominator
    }

    subtract(other) {
        this._numerator = this._numerator * other.denominator - other.numerator * this._denominator
        this._denominator *= other.denominator
        [this._numerator, this._denominator] = simplify(this._numerator, this._denominator)
    }

    subtractWithInt(value) {
        this.numerator -= value * this._denominator
    }

    multiply(other) {
        this.numerator = this._numerator * other.denominator
        this.denominator = this._denominator * other.denominator
    }

    multiplyWithInt(value) {
        this.numerator *= value
    }

    divide(other) {
        this.numerator *= other.denominator
        this.denominator = other.numerator
    }

    divideWithInt(value) {
        this.denominator *= value
    }

    toString() {
        return this.denominator === 1 ? `${this.numerator}` : `${this.numerator} / ${this.denominator} = ${this.realValue.toFixed(6)}`
    }
}