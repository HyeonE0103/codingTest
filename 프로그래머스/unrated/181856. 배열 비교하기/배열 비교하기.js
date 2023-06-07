function solution(arr1, arr2) {
    num = arr1.reduce((acc,cur) => acc += cur ,0)
    num2 = arr2.reduce((acc,cur) => acc += cur ,0)
    
    if(arr1.length > arr2.length) return 1
    else if(arr1.length === arr2.length){
        if(num > num2) return 1
        else if(num === num2) return 0
        else return -1
    }else return -1
}