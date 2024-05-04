function solution(k, score) {
    let result = [score[0]]
    let hall = [score[0]]
    
    for(let i=1; i<score.length; i+=1){
        if(hall.length < k){
            hall.push(score[i])
            hall.sort((a,b) => b - a)
            result.push(hall[hall.length-1])
        }else{
            if(hall[k-1] < score[i]){
                hall.pop()
                hall.push(score[i])
                hall.sort((a,b) => b - a)
                result.push(hall[hall.length-1])
                
            }else result.push(hall[k-1])
        }
    }
    
    return result
}