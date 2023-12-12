function solution(arr) {
    let i=2, nums = []
    
    while(arr.length){
        if(arr.filter(x=>x%i===0).length > 0){
            nums.push(i)
            arr = arr.map(x=>x%i===0 ? x/i : x).filter(x=>x!==1)
            i = 2
        }else{
            i+=1
        }
    }
    return nums.reduce((acc,cur) => acc*=cur, 1)
}