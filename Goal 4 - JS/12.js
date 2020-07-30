//without ES6

var calculator1 = function(amount) {
    this.amount = amount;
}

calculator1.prototype.add = function(num) {
    this.amount += num;
    return this;
}
calculator1.prototype.substract = function(num) {
    this.amount -= num;
    return this;
}
calculator1.prototype.multiply = function(num) {
    this.amount *= num;
    return this;
}
calculator1.prototype.divide = function(num) {
    this.amount /= num;
    return this;
}

var calc = new calculator1(0);
var overallAmount1 = calc.add(5).multiply(2).add(20).divide(3); //should return 10
console.log(overallAmount1);

//Using ES6

class calculator2 {
    constructor(amount) {
        this.amount = amount;
    }
    add(num) {
        this.amount += num;
        return this;
    }
    substract(num) {
        this.amount -= num;
        return this;
    }
    multiply(num) {
        this.amount *= num;
        return this;
    }
    divide(num) {
        this.amount /= num;
        return this;
    }
}

var calc2 = new calculator2(0);
var overallAmount2 = calc2.add(5).multiply(2).add(20).divide(3); //should return 10
console.log(overallAmount2);