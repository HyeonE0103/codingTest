function solution(quiz) {
    let result = [];
    for(const el of quiz){
        const [x, sign, y, _, z] = el.split(" ")
        
        let an = 0;
        sum = sign === '+' ? Number(x) + Number(y) : Number(x) - Number(y)
        
        sum === Number(z) ? result.push("O") : result.push("X")
    }
    
    return result
}