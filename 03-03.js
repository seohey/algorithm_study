// 연습문제 03-03 - 최대 매출

const solution = (nums, k) => {
    let max = 0;
    for(let i = 0; i < nums.length - k + 1; i++){
        let sum = 0;
        for(let j = i; j < i + k; j++){
            sum += nums[j];
        }
        if(sum > max){
            max = sum;
        }
    }
    return max;
}

const nums = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]; // 매출 기록 배열 입력
const k = 3; // 연속 일수 입력
console.log(solution(nums, k)); // 출력