function solution(str1, str2) {
    let o = 2
    let n = 0
    for(let i = 0; i<str1.length; i++){
        if (str1[i] === str2[n]){
            n++
            if(n === str2.length){
                return 1
            }
        }else{
            n = 0
        }
    }
    return o
}