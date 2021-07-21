// 연습문제 02-07 - Least Recently Used

const solution = (nums, s) => {
    let arr = new Array(s).fill(0);
    for(let num of nums){
        const idx = arr.indexOf(num);
        if(idx === -1){
            arr = [num, ...arr];
            arr.pop();
        } else{
            arr.splice(idx, 1);
            arr = [num, ...arr];
        }
    }
    return arr;
}

const nums = [1, 2, 3, 2, 6, 2, 3, 5, 7]; // 작업 번호 배열 입력
const s = 5; // 캐시의 크기 입력

console.log(solution(nums, s)); // 출력