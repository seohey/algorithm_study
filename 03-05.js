// 연습문제 03-05 - 연속 부분수열

const solution = (nums, m) => {
    let answer = 0;
    for(let i = 0; i < nums.length; i++){
        if((nums.length >= m) && (i <= nums.length - m)){
            let sum = 0;
            for(let j = i; j < j + m; j++){
                sum += nums[j];
                if(sum === m){
                    answer++;
                } else if(sum > m){
                    break;
                }
            }
        } else{
            let sum = 0;
            for(let j = i; j < nums.length; j++){
                sum += nums[j];
                if(sum === m){
                    answer++;
                } else if(sum > m){
                    break;
                }
            }
        }
    }
    return answer;
}

const nums = [1, 2, 1, 3, 1, 1, 1, 2]; // 수 배열 입력
const m = 6; // 구하려는 부분수열의 합 입력
console.log(solution(nums, m)); // 출력