function solution(a, b) {
    for(let i=2; i<=a; i++){
        if(a%i===0 && b%i===0){
            a /= i
            b /= i
            i = 2
        }
    }
    
    let i = 2
    while(i<=b){
        if(b % i === 0){
            if(i === 2 || i === 5){
                b /= i
                i = 2
            }
            else return 2
        }else i++
    }
    return 1
}