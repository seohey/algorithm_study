// 연습문제 03 - 뒤집은 소수

const fnc = nums => {
    const arr = nums.map(num => Number(String(num).split('').reverse().join('')));
    const answer = arr.filter(num => isPrime(num));
    return answer;
}

const isPrime = num => {
    if(num === 1){
        return false;
    }
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

const nums = [32, 55, 62, 20, 250, 370, 200, 30, 100]; // 배열 입력

console.log(fnc(nums)); // 출력