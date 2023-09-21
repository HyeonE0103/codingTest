function solution(my_string, indices) {
    let string = my_string.split("")
    for(let i=0; i<indices.length; i++){
        string.splice(indices[i],1,0)
    }
    return string.join("").split('0').join("")
}