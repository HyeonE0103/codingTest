function solution(n) {
    let arr = Array.from(Array(n), () => new Array(n).fill(0))
    let [x, y, l, num] = [0, 0, n, 1]
    while(num <= n*n){
        for(let i=0; i<l; i++){
            arr[y][x] = num++
            x++
        }
        x--, y++
        for(let i=0; i<l-1; i++){
            arr[y][x] = num++
            y++
        }
        x--, y--
        for(let i=0; i<l-1; i++){
            arr[y][x] = num++
            x--
        }
        x++, y--
        for(let i=0; i<l-2; i++){
            arr[y][x] = num++
            y--
        }
        x++, y++, l-=2
    }
    return arr
}