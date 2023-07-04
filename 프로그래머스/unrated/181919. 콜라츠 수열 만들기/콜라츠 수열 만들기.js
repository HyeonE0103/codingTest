function solution(n) {
    let num = [n]
    while(true){
        if (n === 1) return num
        else if(n%2 === 0){
            n = n/2
            num.push(n)
        }
        else{
            n = 3*n+1
            num.push(n)
        }
    }
}