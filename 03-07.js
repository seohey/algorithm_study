// 연습문제 03-07 - 공주 구하기

const solution = (n, k) => {
    let arr = new Array(n).fill().map((i, j) => j + 1);
    while(arr.length > 1){
        if(arr.length > k){
            let spliced = [];
            if(arr.length % k > 0){
                spliced = arr.splice(arr.length - (arr.length % k));
            }
            arr = arr.filter((i, j) => (j + 1) % k !== 0);
            arr = [...spliced, ...arr];
        } else if(arr.length === k){
            arr.pop();
        } else{
            const spliced = arr.splice(k % arr.length);
            arr.pop();
            arr = [...spliced, ...arr];
        }
    }
    return arr[0];
}

const n = 8; // 왕자의 수 입력
const k = 3; // 제외할 숫자 입력

console.log(solution(n, k)); // 출력