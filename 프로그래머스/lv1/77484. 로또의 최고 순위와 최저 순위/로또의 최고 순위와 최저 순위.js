function solution(lottos, win_nums) {
    let result = [7,7]
    lottos.forEach(n=>{
        if(win_nums.includes(n)){
            result[0]--
            result[1]--
        }else if(n === 0) result[0]--
    })
    return result[0] === 7 ? [6,6] : result[1] === 7 ? [result[0],6] : result
    
}