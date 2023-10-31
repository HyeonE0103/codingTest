function solution(rank, attendance) {
    const arr = rank.filter((_, i) => attendance[i]).sort((a,b) =>a-b)
    
    let result = []
    
    for(let i=0; i<3; i++) result.push(rank.indexOf(arr[i]))
    
    return result[0] * 10000 + result[1] * 100 + result[2] * 1

    
}