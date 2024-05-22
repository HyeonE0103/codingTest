function solution(citations) {
    return citations.sort((a,b)=>b-a).reduce((acc,cur,i) => {
        const num = cur <= i+1 ? cur : i+1
        return acc < num ? num : acc 
    },0)
}