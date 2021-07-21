// 연습문제 02-04 - 격자판 최대 합

const solution = arr => {
    const array = [];
    let leftDiaSum = 0;
    let rightDiaSum = 0;
    for(let i = 0; i < arr.length; i++){
        let colSum = 0;
        let rowSum = 0;
        for(let j = 0; j < arr.length; j++){
            colSum += arr[j][i];
            rowSum += arr[i][j];
        }
        array.push(colSum);
        array.push(rowSum);
        leftDiaSum += arr[i][i];
        rightDiaSum += arr[arr.length - 1 - i][i];
    }
    array.push(leftDiaSum);
    array.push(rightDiaSum);
    return Math.max(...array);
}

const arr = [[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]]; // 격자 배열 입력

console.log(solution(arr)); // 출력