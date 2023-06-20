function solution(numbers) {
    let set = new Set();
    let num = numbers.length
    for (let i = 0; i<num-1; i++){
        for(let j = i+1; j<num; j++){
            set.add(numbers[i]+numbers[j])
        }
    }
    return Array.from(set).sort((a,b)=>a-b)
}