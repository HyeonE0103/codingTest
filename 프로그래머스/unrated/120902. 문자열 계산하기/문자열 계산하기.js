function solution(my_string) {
    const array = my_string.split(" ")
    let result = Number(array[0])
    for(let i=1; i<array.length-1; i+=2){
        array[i] === '+' ? result += Number(array[i+1]) : result -= Number(array[i+1])
    }
    return result
}