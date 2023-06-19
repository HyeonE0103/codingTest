function solution(num) {
    let turn = 0
    return num === 1 ? 0 : check(num, turn) >= 500 ? -1 : check(num , turn)
}

function check(num, turn){
    if(num === 1){
        return turn
    }else{
        num = num % 2 ? (num*3)+1 : num/2
        return check(num, turn + 1)
    }
}