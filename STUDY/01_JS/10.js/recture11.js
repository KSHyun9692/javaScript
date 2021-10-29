// 2 * 3 > 4 + 5 && 6 / 3 == 2 || !false

// 1순위 : ++, --
// 2순위 : !
// 3순위 : *, /, %
// 4순위 : +, -
// 5순위 : <, <=, >, >=
// 6순위 : ==, !=
// 7순위 : &&
// 8순위 : ||
/**
 * 연산자 우선순위
수학에서 곱하기를 더하기보다 먼저 계산하는 것 처럼, Javascript에서도 연산자에 우선순위가 존재.
 */

/**
 * 괄호
우선순위를 명시하기 위해 괄호를 사용. 괄호안의 계산식이 먼저 계산됨.

부가적 효과
    코드의 가독성 향상
    연산자 우선순위 실수 방지
 */