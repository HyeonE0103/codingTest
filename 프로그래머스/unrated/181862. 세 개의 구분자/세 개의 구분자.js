function solution(myStr) {
    let result = myStr.split("a").join("_").split("b").join("_").split("c").join("_").split("_").filter(x=>x!=="")
    return result.length !== 0 ? result : ["EMPTY"]
}