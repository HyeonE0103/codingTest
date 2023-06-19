function solution(sizes) {
    num = sizes.map(x=>x.sort((a,b)=>a-b)).reduce((acc,cur)=>{
        acc[0] = Math.max(acc[0],cur[0])
        acc[1] = Math.max(acc[1],cur[1])
        return acc
    },[0,0])
    return num[0] * num[1]
    
    
}