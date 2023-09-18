function solution(myStr) {
    let result =  myStr.split(/[a-c]/g).filter(x=>x)
    return result.length ? result : ["EMPTY"]
}