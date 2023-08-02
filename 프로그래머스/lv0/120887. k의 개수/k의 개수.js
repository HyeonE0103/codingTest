function solution(i, j, k) {
    let result =0
    for(let n=i; n<=j; n++){
        for( let m=0; m<=n.toString().length; m++){
            if(n.toString()[m] === k.toString()) result ++
        }
    }
    return result
}