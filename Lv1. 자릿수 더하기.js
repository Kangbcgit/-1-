function solution(n) {
    // 문자열 방식
    // let nStr = `${n}`;
    // let a = nStr.split('');
    // let answer = 0;
    // for (let i = 0, j = a.length; i < j; i++) {
    //     answer += +a[i];
    // }
    // return answer;
    // 숫자 방식
    let arr = []
    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0)
    let answer = 0;
    for (let i = 0, j = arr.length; i < j; i++) {
        answer += arr[i];
    }
    return answer;
}

//Lv1. 자연수 뒤집어 배열로 만들기.js 에서 배운점을 바탕으로 작성함.