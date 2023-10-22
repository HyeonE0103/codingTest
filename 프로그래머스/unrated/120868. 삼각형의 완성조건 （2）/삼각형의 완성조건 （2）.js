function solution(sides) {
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    const sum = sides[0] + sides[1]
    
    let result = sum - max
    let array = []
    for (let i = max-min+1; i<max; i++){
        if(i>0) array.push(i)
    }
    return result + array.length
    
}