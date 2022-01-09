function solution(n) {
    let nStr = `${n}`;
    let arrNStr = nStr.split('').reverse();
    for (let i = 0, j = arrNStr.length; i < j; i++) {
        arrNStr[i] = +arrNStr[i];
    }
    return arrNStr;
}

// n을 문자열로 치환후 split, reverse로 배열을 생성, 반전시키고
// 반복문으로써 인덱스의 값종류를 문자열에서 숫자로 변경

// --------------인상적 풀이방식


function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return arr;
}

// do while문 사용.