function solution(my_string) {
    let answer = new Set();
    
    for(let i = 0; i<my_string.length; i++){
        answer.add(my_string.slice(i,my_string.length))
    }
    return Array.from(answer).sort()
}