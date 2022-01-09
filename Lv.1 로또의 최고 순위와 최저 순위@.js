function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    let zeroCount = 0;

    for (let i = 0, minI = lottos.length; i < minI; i++) {
        for (let j = 0, winI = win_nums.length; j < winI; j++) {
            if (lottos[i] === win_nums[j]) {
                count += 1;
            }
        }
        if (lottos[i] === 0) {
            zeroCount += 1;
        }
    }
    let num = 7;
    for (let i = 0; i <= 6; i++) {
        if (count >= i) {
            answer[1] = num - i;
            answer[0] = answer[1] - zeroCount;
        }
    }
    for (let i = 0, j = answer.length; i < j; i++) {
        if (answer[i] > 6) {
            answer[i] = 6;
        }
    }
    return answer;
}