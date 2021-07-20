// 연습문제 04 - 괄호 문자 제거

const fnc = str => {
    const arr = str.split('');
    const answer = [];
    let cnt = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '('){
            cnt++;
        } else if(arr[i] === ')'){
            cnt--;
        }
        if(cnt === 0 && arr[i] !== ')'){
            answer.push(arr[i]);
        }
    }
    return answer.join('');
}

const str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)'; // 문자열 입력

console.log(fnc(str)); // 출력