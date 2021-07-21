// 연습문제 02-05 - 문자열 압축

const solution = str => {
    const arr = [str[0]];
    let target = 0;
    for(let i = 1; i < str.length; i++){
        if(str[i] === str[target]){
            if(i - target === 1){
                arr.push(2);
            } else{
                let val = arr.pop();
                arr.push(++val);
            }
        } else{
            arr.push(str[i]);
            target = i;
        }
    }
    return arr.join('');
}

const str = 'KSHHEAAA'; // 문자열 입력

console.log(solution(str)); // 출력