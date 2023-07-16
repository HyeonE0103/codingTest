function solution(n) {
    let num = 0
    let correct = 0
    for(let i=1; i<=n; i++){
        correct = 0
        for(let j=1; j<=i; j++){
            if(i%j===0) correct++
        }
        if(correct >= 3) num++
    }
    return num
}