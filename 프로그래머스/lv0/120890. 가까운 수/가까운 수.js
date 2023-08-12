function solution(array, n) {
    let result;
    let abs = 999
    const arr = array.sort((a,b) => a-b)
    for(let i=0; i<arr.length; i++){
        if(Math.abs(arr[i]-n) < abs){
            result = arr[i]
            abs = Math.abs(arr[i]-n)
        }
    }
    return result 
}