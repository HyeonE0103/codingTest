function solution(N, stages) {
    let map = new Map()
    let people = stages.length
    for(let i=1; i<=N; i++){
        let num = 0
        for(let j=0; j<stages.length; j++){
            if(i === stages[j]) num++
        }
        map.set(i, num/people)
        people -= num
    }
    return [...map].sort((a,b) => b[1] - a[1]).map(x=>x[0])
    
}