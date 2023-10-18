function solution(a, b) {
    let answer = '';
    const length = Math.max(a.length, b.length);
    a = "0".repeat(length - a.length) + a;
    b = "0".repeat(length - b.length) + b;

    let add = false;

    for(let i = length - 1; i >= 0; i--) {
        let num = parseInt(a[i]) + parseInt(b[i]) + (add ? 1 : 0);
        add = num >= 10;
        if(add) num -= 10;
        answer = num + answer;
    }

    if(add) answer = "1" + answer;
    
    return answer;
}