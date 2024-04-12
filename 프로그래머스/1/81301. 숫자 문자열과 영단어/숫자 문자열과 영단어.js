function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for(let i=0; i<numbers.length; i+=1){
        s = s.split(numbers[i]).join(i)
    }
    
    return Number(s)
}