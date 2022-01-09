

// 내 풀이 방식
function solution(phone_number) {
    let answer = '';
    let length = phone_number.length;
    let star = phone_number.substr(length - 4, 4);
    let frontNumber = phone_number.substring(0, length - 4);
    for (let i = 0, j = frontNumber.length; i < j; i++) {
        answer += '*';
    }
    answer += star;
    return answer;
}

//====================인상깊은 다른사람의 풀이방식
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log("결과 : " + hide_numbers('01033334444'));