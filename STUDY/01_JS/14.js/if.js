//조건문
//조건에 따라 프로그램의 흐름을 분기해서 특정 코드가 실행되도록 함

if(/*조건식*/){
    /*참인경우 실행될 코드*/
}
else if( /*조건식*/ ){
    /*if 문의 조건이 거짓이고, 위의 조건식이 참인경우 실행될 코드*/
}
/* 여러개의 else if... */
else if( /*조건식*/ ){
    /*위의 if, else if문의 모든 조건이 거짓이고, 위의 조건식이 참인경우 실행될 코드*/
}
else{
    /*모든 if, else if 문이 모두 실행되지 않았을 때 실행될 코드*/
}

if(true){
    console.log("true");
}else{
    console.log("false");
}

if(flase){
    console.log("1");
}else if(true){
    console.log("2");
} else if(true){
    console.log("3");
}else if(false){
    console.log("4");
}
