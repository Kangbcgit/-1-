function solution(n) {
    if (n < 10) return n;
    let nStr = `${n}`,
        nStrLength = nStr.length,
        arr = [],
        answer = '';

    for (let i = 0; i < nStrLength; i++) arr[i] = nStr[i];
    arr.sort();

    for (let i = nStrLength - 1; i >= 0; i--) answer += arr[i];
    return +answer;

}
// n을 문자열로 치환하여 해결함.

// ------------------------인상깊은 타인의 풀이
function solution(n) {
    const newN = n + "";
    const newArr = newN
        .split("")
        .sort()
        .reverse()
        .join("");

    return +newArr;
}

// .split() 함수로(.split('') ()안에 '' 를 삽입시 문자열 인덱스 하나 하나 마다 쪼개서 배열로 넣음)
// 문자열을 쪼개서 배열로 만들고 sort()로 내림차순 배열 후
// .reverse로 반전시켜 오름차순 배열로 만든 후 .join('')으로 배열의 문자열을 하나로 합쳤다.
// ('')없이 사용시 각 배열 인덱스 사이에 , 가 붙음