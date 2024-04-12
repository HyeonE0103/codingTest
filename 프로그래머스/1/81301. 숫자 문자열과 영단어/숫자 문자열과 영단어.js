function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    let result = ''
    let world = ''
    let arr = []
    
    for(let i=0; i<s.length; i+=1){
        if(isNaN(s[i])){
            world += s[i]
            const n = numbers.indexOf(world)
            if(n !== -1){
                result += n
                world = ''
            }
        }else result += s[i]
    }
    return +result
}