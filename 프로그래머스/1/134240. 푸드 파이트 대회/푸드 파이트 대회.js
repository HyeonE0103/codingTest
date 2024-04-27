function solution(food) {
    const line = food.reduce((acc,cur,i) => acc += (''+i).repeat(parseInt(cur/2)),'')
    
    return line + '0' + line.split('').reverse().join('')
}