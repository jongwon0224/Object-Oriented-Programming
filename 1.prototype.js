//new와 prototype을 이용
function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function () {
    return this.first + this.second;
}

var Hwang = new Person('jongwon', 10, 20);
document.write(Hwang.sum()); //30

var Lee = new Person('hyena', 20, 30);
document.write(Lee.sum());