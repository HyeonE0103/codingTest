function solution(food) {
    const foods = food.reduce((acc,cur,i) => acc += (''+i).repeat(parseInt(cur/2)),'')
    
    return foods + '0' + [...foods].reverse().join('')
}