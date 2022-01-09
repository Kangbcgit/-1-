function solution(n) {
    let a = 0, b = Math.sqrt(n);
    Number.isInteger(b) ? a = (b + 1) **2 : a = -1;
    return a;
}

//Number.insInteger(number) 라는 정수 판별 메소드, Math.sqrt(number)라는 number에 루트를 씌우는 메소드 사용.