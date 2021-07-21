// 연습문제 02-03 - 가위 바위 보

function solution(aNum, bNum){
    let answer = [];
    for(let i = 0; i < aNum.length; i++){
        const dif = aNum[i] - bNum[i];
        if(dif === 1 || dif === -2){
            answer.push('A');
        } else if(dif === -1 || dif === 2){
            answer.push('B');
        } else{
            answer.push('D');
        }
    }
    console.log(answer);
    return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));