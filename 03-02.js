// 연습문제 03-02 - 졸업 선물

const solution = (nums, m) => {
    nums.sort(([a, b], [c, d]) => a + b - c - d);
    let cnt = 0;
    for(let i = 0; i < nums.length; i++){
        if(m - nums[i][0] - nums[i][1] >= 0){
            m -= nums[i][0] + nums[i][1];
            cnt++;
        } else{
            const arr = nums.slice(0, i);
            nums = nums.splice(i);
            arr.sort((a, b) => a[0] - b[0]);
            if(m + arr[i-1][0] / 2 >= nums[0][0] + nums[0][1]){
                return ++cnt;
            }
            nums.sort(([a, b], [c, d]) => a / 2 + b - c / 2 - d);
            if(m >= nums[0][0] / 2 + nums[0][1]){
                return ++cnt;
            }
        }
    }
    return cnt;
}

const nums = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]; // 상품 가격 배열 입력
const m = 28; // 예산 입력
// const nums = [[8, 6], [2, 2], [4, 3], [4, 5], [6, 4]]; // 입력 예제 2
// const m = 27; // 입력 예제 2
// const nums = [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]]; // 입력 예제 3
// const m = 41; // 입력 예제 3


console.log(solution(nums, m)); // 출력

