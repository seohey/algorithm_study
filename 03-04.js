// 연습문제 03-04 - 공통원소 구하기

const solution = (numA, numB) => {
    const setA = new Set(numA);
    const setB = new Set(numB);
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    const arr = [...intersection];
    arr.sort((a, b) => a - b);
    return arr;
}

const numA = [1, 3, 9, 5, 2]; // A집합 배열 입력
const numB = [3, 2, 5, 7, 10]; // B집합 배열 입력
console.log(solution(numA, numB)); // 출력