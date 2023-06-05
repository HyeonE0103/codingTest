// function solution(my_string, is_suffix) {
//     my_string = my_string.split("").reverse().join("")
//     is_suffix = is_suffix.split("").reverse().join("")
//     return my_string.slice(0,is_suffix.length) === is_suffix ? 1 : 0
// }

function solution(my_string, is_suffix) {
    return my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0
}