function solution(numbers) {
    let j = 0;
    for (let i = 0; i < 10; i++) {
        j += i;
    }
    let i = numbers.reduce((a,b,i) => a + b);
    return j - i;
}

//인상깊은 풀이

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}