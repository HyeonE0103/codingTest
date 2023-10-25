function solution(score) {
    let result = []
    const ave = score.map(x=>(x[0]+x[1])/2)
    const sort = [...ave].sort((a,b) => b-a)

    for(let i=0; i<ave.length; i++){
        result.push(sort.indexOf(ave[i])+1)
    }
    return result
}