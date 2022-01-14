function solution(d, budget) {
    var answer = 0;
    let calcPlus = 0;
    let calcArr = d.sort((a, b) => {
        return a - b;
    })
    for (let i = 0; i < d.length; i++) {
        calcPlus += d[i];
        if (calcPlus > budget) {
            break;
        } else {
            answer++;
        }
    }
    return answer;
}

//------------------인상깊은 타인 풀이

function solution(d, budget) {
    return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// const a = 5;     // 00000000000000000000000000000101
// const b = -3;    // 11111111111111111111111111111101

// console.log(~a); // 11111111111111111111111111111010
// // expected output: -6

// console.log(~b); // 00000000000000000000000000000010
// // expected output: 2
