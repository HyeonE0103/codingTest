function solution(sizes) {
    let [w,h] = [0,0]
    
    for(let i=0; i<sizes.length; i++){
        if(w < Math.max(...sizes[i])) w = Math.max(...sizes[i])
        if(h < Math.min(...sizes[i])) h = Math.min(...sizes[i])
    }
    
    return w*h
}