// function solution(my_string, alp) {
//     return [...my_string].reduce((acc, s) => s === alp ? acc+=s.toUpperCase() : acc+=s,"")
// }

function solution(my_string, alp) {
    return my_string.replaceAll(alp,alp.toUpperCase())
}