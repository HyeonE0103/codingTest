function solution(n, words) {
    let set = new Set().add(words[0])
    
    for(let i=1; i<words.length; i+=1){
        let [pre, cur] = [words[i-1], words[i]]
        
        if ((pre[pre.length - 1] != cur[0]) || (set.has(cur)))
            return [i%n+1, Math.floor(i/n)+1]
        
        set.add(cur)
    }
    
    return [0, 0]
}