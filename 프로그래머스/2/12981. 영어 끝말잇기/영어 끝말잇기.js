function solution(n, words) {
    let set = new Set()
    set.add(words[0])
    
    for(let i=1; i<words.length; i+=1){
        if(words[i][0] != words[i-1][words[i-1].length-1])
            return [i%n+1, Math.floor(i/n)+1]
        if(set.has(words[i])) return [i%n+1, Math.floor(i/n)+1]
        else set.add(words[i])
    }
    
    return [0,0]
}