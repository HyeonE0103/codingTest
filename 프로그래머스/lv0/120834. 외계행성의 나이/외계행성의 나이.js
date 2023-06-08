function solution(age) {
    s = ["a","b","c","d","e","f","g","h","i","j"]
    return [...String(age)].reduce((acc,cur)=>acc+=s[cur],"")
}