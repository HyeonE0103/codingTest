function solution(my_string) {
    let n = 0
    let result = 0
    for (let i=0; i<my_string.length; i++){
        if(isNaN(my_string[i])){
            result+=Number(n)
            n=0
        }else{
            n+=my_string[i]
        }
    }
    return result + Number(n)
}