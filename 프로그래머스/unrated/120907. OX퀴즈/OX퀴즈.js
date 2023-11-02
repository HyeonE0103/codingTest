function solution(quiz) {
    let result = []
    
    for(const el of quiz){
        const modify = el.split(" ")
        
        switch(modify[1]){
            case '+':
                if((Number(modify[0]) + Number(modify[2])) === Number(modify[4])) result.push("O")
                else result.push("X")
                break;
            case '-':
                if((Number(modify[0]) - Number(modify[2])) === Number(modify[4])) result.push("O")
                else result.push("X")
                break;
            case '*':
                if((Number(modify[0]) * Number(modify[2])) === Number(modify[4])) result.push("O")
                else result.push("X")
                break;
            case '/':
                if((Number(modify[0]) / Number(modify[2])) === Number(modify[4])) result.push("O")
                else result.push("X")
                break;
            case '%':
                if((Number(modify[0]) % Number(modify[2])) === Number(modify[4])) result.push("O")
                else result.push("X")
                break;
                
        }
    }
    return result
}