function solution(polynomial) {
    let arr = polynomial.split(" + ")
    let [x, y] = [0, 0]
    
    for(const el of polynomial.split(' + ')){
        if(el.includes('x')) x += el.length > 1 ? Number(el.slice(0, el.length-1)) : 1
        else y += Number(el)
    }

    
    if(x === 0 && y === 0) return ""
    if(x === 0) return `${y}`
    if(x === 1){
        if(y === 0) return "x"
        else return `x + ${y}`
    }
    if(y === 0) return `${x}x`
    else return `${x}x + ${y}`
}