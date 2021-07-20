// 연습문제 05 - 재귀함수를 이용한 이진수 출력

const fnc = num => {
    if(num > 1){
        return fnc(Math.floor(num / 2)) * 10 + (num % 2);
    }
    return 1;
}

const num = 20; // 자연수 입력

console.log(fnc(num)); // 출력