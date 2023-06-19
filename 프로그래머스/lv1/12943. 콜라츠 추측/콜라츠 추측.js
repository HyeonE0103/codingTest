function solution(num) {
    let turn = 0
    while(num !== 1 && turn !== 500){
        num = num % 2 ? (num * 3) + 1 : num / 2
        turn ++
    }
    return num === 1 ? turn : -1
}