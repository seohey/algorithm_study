// 연습문제 01 - 중복 문자 제거

const fnc = str => {
    const arr = [];
    arr.push(str[0]);
    if(str.length > 1){
        for(let s of str){
            for(let j = 0; j < arr.length; j++){
                if(s === arr[j]){
                    break;
                }
                if(j === arr.length - 1){
                    arr.push(s);
                }
            }
        }
    }
    const answer = arr.join('');
    return answer;
}

const str = 'ksekkset'; // 문자열 입력

console.log(fnc(str)); // 출력