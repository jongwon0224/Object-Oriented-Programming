//부모클래스의 성질을 상속받고 추가로 상속받은 성질을 수정하고 싶을때
//super 사용 => 부모가 갖고 있는 기능 + 내용 추가/삭제 가능

//부모 클래스 Person
class Person {
    constructor (name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}
//PersonPlus클래스 자식 => 상속받은 기능을 추가하고 싶을때 super함수 사용
class PersonPlus extends Person {
    constructor (name, first, second, third) {      // 1. constructor에 third라는 매개변수 추가
        super(name, first, second);                 // 2. 부모객체의 데이터를 super(name, first, second)로 대체
        this.third = third;                         // 3. 새로운 데이터 값만 입력 => this.third = third 입력
    }
    sum() {
        return super.sum() + this.third;            // 4. super.sum() === this.first + this.second랑 동일 // 부모 클래스 sum함수
    }
    avg () {
        return (super.sum() + this.third) / 3;      // 5. super.sum() === this.first + this.second랑 동일 //부모 클래스 sum함수
    }
}

var jong = new Person('jongwon', 10, 20);
var young = new PersonPlus('younga', 80, 10, 50);   // 6. 인자에 50추가 <==> third매개변수에 대입

console.log(jong.sum()); // 30
console.log(young.sum()); // 140
console.log(young.avg()); // 46.6666


/* super함수를 안썻을때 상속받으려면 코드의 하기 내용과 같이 반복이 심함.

class man1 {
    constructor (name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

class man2 extends man1 {
    constructor(name, first, second, third) {
        this.name = name;                       //super(name, first, second);
        this.first = first;                     //this.third = third;
        this.second = second;
        this.third = third;
    }
    sum() {
        return this.first + this.second + this.third;   // super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second + this.third) / 2; //(super.sum + this.third) / 2
    }
}

var jong = new man2('justine', 50, 60);
console.log(jong.avg());
*/