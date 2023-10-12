function solution(myString, pat) {
    const num = myString.lastIndexOf(pat)
    return myString.slice(0,num) + pat
}