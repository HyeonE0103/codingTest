function solution(n, words) {
    let num = 0
    let set = new Set([words[0]])
    
    for(let i=1; i<words.length; i++){
        if((words[i-1][words[i-1].length-1] !== words[i][0]) || set.has(words[i])){
            num = i+1
            break
        }else{
            set.add(words[i])
        }
    }
    return num === 0 ? [0,0]: [num%n === 0 ? n : num%n, Math.ceil(num/n)]
}