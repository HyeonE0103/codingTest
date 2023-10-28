function solution(n) {
    let result = 1, i=1
    let arr = []
    while(i<n){
        result++
        if(result % 3 === 0 || result.toString().includes('3')){
            
        }else{
            i++
        }
    }
    return result
}