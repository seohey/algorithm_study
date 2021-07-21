// 연습문제 02 - 회문 문자열

const fnc = str => {
    const s = str.toLowerCase();
    const l = s.length;
    for(let i = 0; i < (l - (l % 2))/2; i++){
        if(s[i] !== s[l - 1 - i]){
            return "NO";
        }
    }
    return "YES";
}

const str = 'gooG'; // 문자열 입력

console.log(fnc(str)); // 출력