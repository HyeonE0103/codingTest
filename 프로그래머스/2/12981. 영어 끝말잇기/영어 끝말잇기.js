function solution(n, words) {
    let set = new Set([words[0]])
    
    for(let i=1; i<words.length; i++){
        if((words[i-1][words[i-1].length-1] !== words[i][0]) || set.has(words[i])){
            return [i%n+1, Math.floor(i/n)+1]
        }else set.add(words[i])

    }
    return [0,0]
}