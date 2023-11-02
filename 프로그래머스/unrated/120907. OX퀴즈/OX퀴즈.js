function solution(quiz) {
    let result = []
    
    for(const el of quiz){
        const ex = el.split(" ")
        if(ex[1] === '+'){
            if((Number(ex[0]) + Number(ex[2])) === Number(ex[4])) result.push("O")
            else result.push("X")
        }else{
            if((Number(ex[0]) - Number(ex[2])) === Number(ex[4])) result.push("O")
            else result.push("X")
        }
    }
    return result
}