function solution(s){
    let num = 0
    for(let el of s){
        if(el === "("){
            num++
        }else{
            num--
            if(num<0){
                return false
            }
        }
    }
    return num === 0 ? true : false
}