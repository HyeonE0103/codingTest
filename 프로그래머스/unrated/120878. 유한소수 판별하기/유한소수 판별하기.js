function solution(a, b) {
    let i = 2, n = 1
    for(let i=1; i<=Math.min(a,b); i++){
        if(a%i===0 && b%i===0) n = i
    }
    b/=n
    while(i<=b){
        if(b % i === 0){
            if(i === 2 || i === 5){
                b/=i
                i=2
            }
            else return 2
        }else i++
    }
    return 1
}