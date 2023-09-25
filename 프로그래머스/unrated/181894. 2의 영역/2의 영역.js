function solution(arr) {
    const first = arr.indexOf(2)
    const second = arr.lastIndexOf(2)

    return first === -1 ? [-1] : arr.slice(first,second+1)
}