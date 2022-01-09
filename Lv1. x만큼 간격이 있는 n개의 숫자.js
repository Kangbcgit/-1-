// 내 풀이 방식
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}
//=======================인상깊은 다른사람의 풀이방식
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
/* 사용된 메소드 Array(), array.fill , array.map
    
    Array(n) = > length가 n인 빈 배열을 만듦

    array.fill(x) = > 배열 전체 인덱스값을 x로 바꿈.
    array.fill(x, y) = > y번 인덱스부터 배열의 끝까지 인덱스 값을 x로 바꿈.
    array.fill(x, y, z) = > array[y] ~ array[z - 1] 까지 의 값을 x로 바꿈

    array.map(x => x * 2) => 모든 인덱스의 값이 2배가 됨
*/