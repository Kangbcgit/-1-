function solution(n, lost, reserve) {
    var answer = 0;
    let countList = [];
    countList.length = n + 1;
    countList.fill(1, 1);
    countList[0] = -1

    for (let i = 0, j = lost.length; i < j; i++) {
        countList[+lost[i]] -= 1;
    }

    for (let i = 0, j = reserve.length; i < j; i++) {
        countList[+reserve[i]] += 1;
    }
    for (let i = 1, j = countList.length; i < j; i++) {
        if (countList[i] === 2) {
            if (countList[i - 1] === 0) {
                countList[i] -= 1;
                countList[i - 1] += 1;
            } else if (countList[i + 1] === 0) {
                countList[i] -= 1;
                countList[i + 1] += 1;
            }
        }
    }
    for (let i = 1, j = countList.length; i < j; i++) {
        if (countList[i] > 0) {
            answer += 1;
        }
    }

    return answer;

}