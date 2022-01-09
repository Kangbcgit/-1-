function solution(arr) {
    var answer = [];
    
    if (arr.length <= 1) {
        return [-1];
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)),1);
        answer = arr;
    }
    
    return answer;
}
//Math.min() 메소드를 사용해서 해결.

//-------------------인상깊은 다른 사람 풀이 방식

function solution(arr) {
    if(arr.length<=1)return[-1];
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr;
}