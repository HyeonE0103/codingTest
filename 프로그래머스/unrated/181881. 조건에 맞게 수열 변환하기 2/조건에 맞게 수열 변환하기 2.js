function solution(arr) {
   let result = 0
   let a = arr
   let b = arr
   while(true){
       b = change(a)
       result ++
       if(JSON.stringify(a) === JSON.stringify(b)) return result-1
       a = b
   }
}

function change(arr){
    let array = []
    for(let i=0; i<arr.length; i++){
       if(arr[i] >= 50 && arr[i]%2===0) array.push(arr[i]/2)
        else if(arr[i] < 50 && arr[i]%2!==0) array.push(arr[i]*2+1)
        else array.push(arr[i])
    }
    return array
}