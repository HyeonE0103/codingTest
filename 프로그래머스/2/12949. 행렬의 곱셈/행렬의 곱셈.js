function solution(arr1, arr2) {
    const result = []
    
    for(let i=0; i<arr1.length; i++){
        const row = []
        for(let j=0; j<arr2[0].length; j++){
            let num = 0
            for(let k=0; k<arr2.length; k++){
                num += arr1[i][k] * arr2[k][j]
            }
            row.push(num)
        }
        result.push(row)
    }
    return result
}

/* 한번 더 풀어보기 */