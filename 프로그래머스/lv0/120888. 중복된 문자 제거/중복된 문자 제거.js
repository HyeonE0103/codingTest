function solution(my_string) {
    result = new Set(my_string.split(""))
    result = Array.from(result)
    return result.join("")
}