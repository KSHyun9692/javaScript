var arr = [1,2,3,4,5];
arr.pop();
arr.shift();
arr.push(7);
arr.unshift(0);
arr.reverse();
arr.sort();

var arr1 = [1,2,3];
var arr2 = [4,5,6];
arr1.concat(arr2);
arr3=arr1.concat(arr2);

var arr4 = [1,2,3,1,2,3];
arr4.indexOf(2);
arr4.lastIndexOf(2);

var str="1,2,3,4,5";
arr = str.split(",");
/*
배열에 엘리먼트 추가/삭제하기
기본적으로 배열의 앞과 뒤에서 엘리먼트를 추가하거나 삭제할 수 있음.

.push(element) : 배열의 뒤에 엘리먼트 추가
.pop() : 배열의 뒤에서 엘리먼트 삭제하고 리턴
.shift() : 배열의 앞에서 엘리먼트 삭제하고 리턴
.unshift(element) : 배열의 앞에 엘리먼트 추가

배열 붙이기, 검색하기
arr1.concat(arr2) : arr1과 arr2 붙임
arr.indexOf(element) : arr에서 element가 있는 첫 위치를 검색
arr.lastIndexOf(element) : arr에서 element가 있는 마지막 위치를 검색

문자열 split 함수
문자열을 구분자(separator)로 나눠서 각각을 담은 배열을 반환하는 함수
*/