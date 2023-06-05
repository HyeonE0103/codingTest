function solution(my_string, num1, num2) {
    let s = my_string[num1]
    let s2 = my_string[num2]
    
    string = [...my_string]
    
    string[num1] = s2
    string[num2] = s
    
    return string.join("")
}