// 연습문제 02-01 - 대문자 찾기

function solution(str){
    let answer = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) < 97){
            answer++;
        }
    }
    return answer;
}
console.log(solution("KoreaTimeGood"));