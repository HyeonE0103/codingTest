function solution(s) {
    arr = s.split(" ")
    result = 0
    for(let i=0; i<arr.length; i++){
        arr[i] === 'Z' ? result -= Number(arr[i-1]) : result += Number(arr[i])
    }
    return result 
}