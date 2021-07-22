// 연습문제 03-01 - K번째 큰 수

const solution = (nums, k) => {
    const arr = [];
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let l = j + 1; l < nums.length; l++){
                arr.push(nums[i] + nums[j] + nums[l]);
            }
        }
    }
    const set = new Set([...arr]);
    const array = [...set].sort((a, b) => b - a);
    return array[k-1];
}

const nums = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]; // 카드 숫자 배열 입력
const k = 3; // k값 임력
// const nums = [5, 5, 5, 4, 4, 3, 2, 1]; // 입력 예제 2
// const k = 2; // 입력 예제 2

console.log(solution(nums, k)); // 출력

