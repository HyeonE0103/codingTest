function solution(n, arr1, arr2) {
    let result = []
    
    for(let i=0; i<arr1.length; i+=1){
        let n1 = arr1[i].toString(2).padStart(n,0)
        let n2 = arr2[i].toString(2).padStart(n,0)
        
        let s = ""
        for(let j=0; j<n; j+=1){
            if(n1[j] === '0' && n2[j] === '0') s += " "
            else s += "#"
        }
        result.push(s)
    }
    
    return result
}