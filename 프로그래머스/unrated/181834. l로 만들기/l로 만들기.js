function solution(myString) {
    s = ['a','b','c','d','e','f','g','h','i','j','k']
    return myString.split("").reduce((acc, cur)=> s.includes(cur) ? acc+="l" : acc+=cur, "")
}