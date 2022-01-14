//1 첫번쨰 풀이
function solution(s, n) {
    let answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = alphabet.split('');
    let i = 0, j = s.length;
    while (i < j) {
        let sInArr = alphabetArr.indexOf(s[i].toLowerCase());
        if (+s[i] === 0) {
        answer += ' ';
        i++;
        } else if (s[i] === alphabetArr[sInArr]/*알파베싱 소문자일때*/) {
            if (sInArr + n > alphabetArr.length - 1) {
                answer += alphabetArr[(sInArr + n) - (alphabetArr.length - 1) - 1];
                i++;
            } else {
                answer += `${alphabetArr[sInArr + n]}`;
                i++;
            }
        } else /*알파벳이 대문자일때*/{
            if (sInArr + n > alphabetArr.length - 1) {
                answer += alphabetArr[(sInArr + n) - (alphabetArr.length - 1) - 1].toUpperCase();
                i++;
            } else {
                answer += `${alphabetArr[sInArr + n].toUpperCase()}`;
                i++;
            }
        }
    }
    return answer;
}

//2 두번쨰 풀이
function solution(s, n) {
    let answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz', lower = alphabet.split(''), upper = [];
    for (let i = 0, j = lower.length; i < j; i++) {
        upper[i] = lower[i].toUpperCase();
    }
    
    for (let i = 0, j = s.length; i < j; i++) {
        let sIndex = s[i];
        if (sIndex === ' ') {
            answer += ' '
            continue;
        }
        let sIn = lower.includes(sIndex) ? lower : upper, sInLength = sIn.length;
        let ofPlusN = sIn.indexOf(sIndex) + n
        if (ofPlusN > sInLength - 1) {
            answer += sIn[ofPlusN - sInLength];
        } else {
            answer += sIn[ofPlusN]
        }
    }
    return answer;
}

//-------------------------인상깊은 타인 풀이

function solution(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}