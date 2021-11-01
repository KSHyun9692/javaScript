// 반복문
// 조건에 따라 프로그램의 일정 코드를 반복적으로 수행할 수 있도록 하는 구문

// while
// 조건이 만족하는 동안 반복실행될 코드를 계속 실행

// while( /*조건식*/ ){
//     /* 반복 실행될 코드 */
// }

// continue, break;
// continue : 남은 반복실행될 코드를 모두 skip
// break : 반복문에서 즉시 탈출

var count = 0;
while(true){
    var ans;
    ans = parseInt(prompt("1+1=?"));
    if(ans != 2){
        console.log( ++(count) + "번 틀렸습니다.");
        continue;
    }

    ans = parseInt(prompt("7+1=?"));
    if(ans != 8){
        console.log( ++(count) + "번 틀렸습니다.");
        continue;
    }

    ans = parseInt(prompt("9+1=?"));
    if(ans != 10){
        console.log( ++(count) + "번 틀렸습니다.");
        continue;
    }
    break;  
}
console.log("참 잘했어요!");