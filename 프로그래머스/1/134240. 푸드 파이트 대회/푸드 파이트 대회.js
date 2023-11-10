function solution(food) {
    let result = "0"
    for(let i=food.length-1; i>0; i--){
        const n = Math.floor(food[i]/2)
        const s = i.toString().repeat(n)
        result = s + result + s
    }
    
    return result
}