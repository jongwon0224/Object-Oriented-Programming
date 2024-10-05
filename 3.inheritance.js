//상속(inheritance)
//새로운 class이름 + extends + 기존 클래스이름 {}  ==> class PersonPlus extends Person{}
//새로운 확장된 클래스 생성 후 추가하고 싶은 함수나 내용 입력하면 끝.
//class PersonPlus extends Person{avg() {return 새로운 함수}}
//var hwang = new PersonPlus('jw',10,20) => console.log(hwang.avg()); => 새로운 avg함수 출력 가능!
// Person 클래스는 name,first,second데이터 + sum함수 보유
// PersonPlus클래스는 person성질 + avg함수 보유

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

class PersonPlus extends Person{
    avg() {
        return (this.first + this.second) / 2; //super.sum()으로 대체 가능
    }
}
/*
PersonPlus extends person이랑 prototype은 성질이 같음 // 사용법은 다름

Person.prototype.avg = function () {
    return this.first / this.second;
}
*/

var kim = new PersonPlus('heyna',10,20);
console.log(kim.sum());
console.log(kim.avg());

var hwang = new Person('jongwon',20,50);
console.log(hwang.sum());
