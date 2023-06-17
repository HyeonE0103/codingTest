function solution(n) {
    s = ['수','박']
    let answer = ""
    for(let i = 0; i<n; i++)
        answer += s[i%2]
    return answer
}