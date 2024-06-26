function solution(numbers) {
    let set = new Set();
    const len = numbers.length
    
    for(let i=0; i<len-1; i++){
        for(let j=i+1; j<len; j++){
            set.add(numbers[i]+numbers[j])
        }
    }
    
    // return Array.from(set).sort((a,b) => a-b)
    return [...set].sort((a,b) => a-b)
}