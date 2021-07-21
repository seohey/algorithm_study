// 연습문제 02-02 - 대소문자 변환

const solution = str => {
    let answer = '';
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) < 97){
            answer += str[i].toLowerCase();
        } else{
            answer += str[i].toUpperCase();
        }
    }
    return answer;
}

const str = 'gattBG'; // 문자열 입력

console.log(solution(str)); // 출력