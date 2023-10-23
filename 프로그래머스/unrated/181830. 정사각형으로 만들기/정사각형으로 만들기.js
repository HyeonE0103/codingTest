function solution(arr) {
    if(arr.length > arr[0].length){
        for(let i=0; i<arr.length; i++){
            for(let j=arr[i].length; j<arr.length; j++)
                arr[i].push(0)
         }
        
    }else{
        for(let i=arr.length; i<arr[0].length; i++){
            arr.push(Array(arr[0].length).fill(0))
        }
    }
    return arr
}