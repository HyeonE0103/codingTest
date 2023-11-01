function solution(polynomial) {
    let arr = polynomial.split(" + ")
    let [x, y] = [0, 0]
    
    // for(const el of polynomial.split(' + ')){
    //     if(el.includes('x')) x += el.length > 1 ? Number(el[0]) : 1
    //     else y += Number(el)
    // }
    
    for (let i = 0; i < arr.length; i++){
        let last = arr[i].length
        if(arr[i][last - 1] === 'x' && arr[i].length > 1){
            x += Number(arr[i].slice(0,  last - 1 ))
        } else if(arr[i][last - 1] === 'x' && arr[i].length === 1){
            x ++
        } else{
            y += Number(arr[i])
        }
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