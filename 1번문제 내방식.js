process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    let result = '';
    for (let i = 0; i < b; i++) {
        for (let j = 0; j < a; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log(result);
});



//====================인상깊은 방식
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    console.log((('*').repeat(a) + `\n`).repeat(b))
    //('*').repeat(a)를 실행후 \n을 더하고 그 값을 다시 .repeat(b)한다.
});


// 한줄요약 'string'.repeat(number) = string을 number번 반복한다.