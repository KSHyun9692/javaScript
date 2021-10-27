var empty = {};
typeof(empty_obj);
var man = { name:"홍길동", age:20, height:183};
console.log(man);
console.log(man.name);
console.log(man["name"]);
man.name="가나다";
console.log(man.name);
man["age"]=198;
console.log(man.age);
console.log(man);


/*
객체를 만드는 법
    중괄호 {} 를 사용해 정의 가능
    객체는 속성의 집합으로 이뤄짐
    각 속성은 이름과 값으로 이뤄짐
    객체 정의 시 속성이름:값의 형태로 속성 정의 가능
    속성의 값은 모든 자료형이 가능, object 포함

객체의 속성에 접근하는 법
    객체 이름 뒤에 점(.)을 사용하고 속성 이름에 접근 할 수 있음
    객체 이름 뒤에 대괄호([]) 안에 속성 이름을 문자열로 접근할 수 있음

객체의 속성의 값을 변경하는 법
    객체 속성에 접근해서 변수에 값을 저장하듯이 사용
*/