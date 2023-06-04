function solution(my_string, is_prefix) {
    answer = []
    for(let i=1; i<=my_string.length; i++){
        answer.push(my_string.slice(0,i))
}
    for (let i of answer){
        if(is_prefix === i)
            return 1
    }
    return 0
}