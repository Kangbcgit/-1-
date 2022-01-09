function solution(n, m) {
    var answer = [];
    let calcul = (a, b) => {
    if (a > b) {
        let before = a;
        let after = b;
        let and = 0;
        while (true) {
            and = before % after;
            before = after;
            after = and;
            console.log(before, after, and)
            if (and === 0) {
                return before
            }
        }
    } else {
        let before = b;
        let after = a;
        let and = 0;
        while (true) {
            and = before % after;
            before = after;
            after = and;
            if (and === 0) {
                return before;
            }
        }
    }
}
    
    answer[0] = calcul(n, m);
    answer[1] = (n * m) / answer[0]
    
    return answer;
}
// 유클리드 호제법에 의해 풀이함.
// a가 b보다 클시 a 를 b로 나누고 나머지를 r이라 한다.
// 다시한번 b를 r로 나누고 나온 나머지를 r2라고 한다
// r을 r2로 나누고... r2를 r3로 나누고.. 반복해서 나머지가 0이 나오면 
// 식의 왼쪽의 큰 수가 최대 공약수다.

//최소 공배수는 a, b 두 수를 곱하고 최대공약수로 나눈것이 최소 공배수다


//---------------------인상 깊은 다른사람 풀이
function solution(n, m) {
    let r, a = n, b = m;
    for (let nm = n * m; r = n % m; n = m, m = r) {}
    return [m, a * b / m]
}

// 깨달은점 for문을 너무 for (let i = 0; i < ??; i++) 이런식으로
// 사용하는 고정관념을 버릴수있었다