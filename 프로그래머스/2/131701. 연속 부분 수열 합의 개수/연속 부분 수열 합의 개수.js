function solution(elements) {
    const dElements = [...elements, ...elements]
    let numSet = new Set()
    
    for(let i=0; i<elements.length; i+=1){
        let sum = 0
        for(let j=i; j<elements.length+i; j+=1){
            sum += dElements[j]
            numSet.add(sum)
        }
    }
    return numSet.size
}