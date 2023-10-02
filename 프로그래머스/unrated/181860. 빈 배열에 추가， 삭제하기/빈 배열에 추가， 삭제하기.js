function solution(arr, flag) {
    let result = []
    for(let i=0; i<arr.length; i++){
        if(flag[i]){
            result = [...result, ...new Array(arr[i] * 2).fill(arr[i])]
        }else{
            for(let j=0; j<arr[i]; j++) result.pop()
        }
    }
    return result
}