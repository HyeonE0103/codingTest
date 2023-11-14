function solution(k, score) {
    let honor = []
    let result = []
    for(let i=0; i<score.length; i++){
        if(honor.length < k){
            honor.push(score[i])
            result.push(Math.min(...honor))
        }
        else{
            if(Math.min(...honor) < score[i]){
                honor[honor.indexOf(Math.min(...honor))] = score[i]
                result.push(Math.min(...honor))
            }else result.push(Math.min(...honor))
        }
    }
    return result
}