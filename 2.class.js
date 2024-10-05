//class, constructor함수 사용
//constructor 함수를 사용해야  class를 사용할수있음 !
//constructor 제대로 입력해야됨.
//constructor에는 데이터 입력만 (함수 x)
//함수 입력시 새로운 객체 생성 => sum() {return this.first + this.second};

class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

//kim 객체의 sum함수값을 hwang과 다르게 하고 싶으면 kim.sum = function(){return 변경내용} 입력하면됨.
var kim = new Person('heyna',10,20);
kim.sum = function() {
    return this.first * this.second;
}
console.log(kim.sum());


var hwang = new Person('jongwon',20,50);
console.log(hwang.sum());