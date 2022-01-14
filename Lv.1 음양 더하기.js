function solution(absolutes, signs) {
    var answer = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i]
        } else {
            answer -= absolutes[i]
        }
    }
    
    
    return answer;
}

//-------인상깊은 풀이
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}