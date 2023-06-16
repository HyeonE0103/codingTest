function solution(arr1, arr2) {
    let arr = new Array(arr1.length).fill(0).map(()=> new Array(arr1[0].length))
    
    for (let i = 0; i<arr.length; i++){
        for(let j=0; j<arr[0].length; j++){
            arr[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    
    return arr
}