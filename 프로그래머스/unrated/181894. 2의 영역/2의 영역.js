function solution(arr) {
    const first = arr.indexOf(2)
    const second = arr.lastIndexOf(2)
    
    const sliceArr = arr.slice(first,second+1)
    return sliceArr.length ? arr.slice(first,second+1) : [-1]
}