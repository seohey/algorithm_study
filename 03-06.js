// 연습문제 03-06 - 올바른 괄호

const solution = str => {
    let depth = 0;
    for (let char of str){
        if(char === '('){
            depth++;
        } else{
            depth--;
        }
        if(depth < 0){
            return 'NO';
        }
    }
    return depth === 0 ? 'YES' : 'NO';
}

const str = '(()(()))(())'; // 문자열 입력
console.log(solution(str)); // 출력