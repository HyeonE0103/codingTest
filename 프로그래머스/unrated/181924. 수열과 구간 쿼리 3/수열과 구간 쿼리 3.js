function solution(arr, queries) {
    for(let i=0; i<queries.length; i++){
        num = arr[queries[i][0]]
        num2 = arr[queries[i][1]]
        arr[queries[i][0]] = num2
        arr[queries[i][1]] = num
    }
    return arr
}