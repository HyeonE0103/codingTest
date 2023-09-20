function solution(num_list) {
    let result = 0
    for (let i=0; i<num_list.length; i++){
        result += operation(num_list[i])
    }
    return result
}

function operation(num){
    let answer = 0
    while(num !== 1){
        if(num % 2 === 0){num = num / 2}
        else{num = (num-1)/2}
        answer ++
    }
    return answer
}