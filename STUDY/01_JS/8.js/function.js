function 함수이름(인자1, 파라미터2){
    /*
        실행될 코드
    */
    return 반환값;
}

function return_test(){
    return;
    console.log("실행되지 않는 코드");
}

function print(message){
    console.log("print function in");
    console.log(message);
    console.log("print function out");
}

function sum(arg1, arg2){
    var result = arg1 = arg2;
    return result;
}

/**
 * 파라미터 : 함수의 정의부분에 나열되어 있는 변수
여러개인 경우 콤마(,)로 구분.
파라미터가 필요없는 경우 없어도 됨
함수 안의 코드에서 변수처럼 활용 가능

return 구문 : 함수의 출력으로 내보낼 값
    eturn 구문을 만나면 함수는 즉시 종료됨
    함수를 호출한 표현식은 반환값으로 대치됨
 */
/*
함수의 정의
    호출에 의해 여러번 실행할 수 있는 코드 블럭
    반복되는 코드 감소
    코드의 개발 및 수정 용이
*/