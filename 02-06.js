// 연습문제 02-06 - 멘토링

// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
// 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.

// 입력설명
// 매개변수 nums배열에 M개의 수학테스트 결과가 학생번호로 주어진다.
// 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
// 만약 2차원 배열의 한 행에 테스트 결과가 3 4 1 2로 입력되었다면 테스트를 본 학생수는 4 명이고,
// 결과는 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다. 모든 테스트는 N명으로 동일합니다.

const solution = arr => {
    let answer = 0;
    for(let i = 0; i < arr[0].length - 1; i++){
        const num = arr[0][i];
        let set = new Set(arr[0].slice(i+1));
        for(let j = 1; j < arr.length; j++){
            const idx = arr[j].indexOf(num);
            const newSet = new Set(arr[j].slice(idx + 1));
            set = new Set([...set].filter(x => newSet.has(x)));
            if(newSet.size === 0){
                break;
            }
        }
        answer += set.size;
    }
    return answer;
}

const arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]; // 2차원 배열 입력


console.log(solution(arr)); // 출력