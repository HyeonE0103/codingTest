function solution(arr) {
    const len = arr.length
    let num = 1
    while(true){
        if(len === num) return arr
        else if(num > len){
            for(let i=arr.length; i<num ;i++) arr.push(0)
            return arr
        }
        num *= 2
    }
}