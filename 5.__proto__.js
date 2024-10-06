// 전통적인 방법으로 상속 <==> 클래스 사용으로 상속과는 다름
//prototype과 .__proto__의 차이점?
//생성자 함수 => new(), constructor(){} 등. 찾아보자

var superObj = {superVal : 'super'};
var subObj = {subVal : 'sub'}; //클래스가 아닌 인스턴스, 즉 객체를 다른 객체의 자식으로 만들수있음(자바스크립트만 가능)

subObj.__proto__ = superObj; // .__proto__ 를 사용하면 자식객체로 만들수있음
console.log(subObj.superVal); //super 출력 <superObj를 상속받음>

subObj.superVal = 'sub'; //superVal의 값을 sub로 바꾸면 그냥 subObj의 객체에 'sub'라는 값을 생성 == {subVal : sub, superVal : super}
console.log(subObj.superVal); //sub (superVal 객체의 값은 변화없음)


//__proto__의 대체재 => Object.create();
//__proto__보다 Object.create()를 사용해서 상속하는게 좋은 방법.
var subObj = Object.create(superObj); //1. superObj객체를 인자로 주는 새로운 객체를 만들어
                                      //2. superObj를 부모로하는 새로운 객체는 subObj이다.

console.log(subObj.superVal = 'sub'); //sub출력 //__proto__보다 Object.create()를 사용해서 상속하는게 좋은 방법.
console.log(subObj); // subObj의 superVal값이 sub로바뀜.

/*
자바스크립트 디버거 사용하는 방법.
1. 객체상태 찾기위해 해당 객체 밑에 debugger;입력 
2. 크롬 개발자도구 => 소스 => scope의 global부분에서 찾기 or watch에서 해당 객체 검색!
*/

//수작업으로 만든 객체를 상속시키는 방법 / constructor함수 사용 x
// 1. Object.create(인자값으로 부모객체) 사용 후 새로운 객체 변수 대입 ==> __proto__사용하기 싫어서 생긴 함수
// ex) var lee = Object.create(kim); => kim을 부모객체로하는 lee자식객체 생성
// 2. __proto__ 사용
// ex) lee.__proto__ = kim;
// 결론 = __proto__ 나 Object.create는 같음. 사용하기 나름.

var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function () {
        return this.first + this.second
    }
} 
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 20;
lee.avg = function () {
    return (this.first + this.second) / 2;
}
/*
var lee = { // lee라는 새로운 객체의 sum함수 값 변경하고 싶을때 __proto__사용
    name : 'lee',
    first : 20,
    second : 30,
    avg : function () {
        return (this.first + this.second) / 2; //lee만 avg함수 갖음
    }
}
lee.__proto__ = kim; //kim을 부모객체로 가져옴
*/
console.log(lee.sum()); // 50
console.log(lee.avg()); // 15

console.log(kim.sum()); // 30 , avg함수없음
