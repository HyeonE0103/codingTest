function solution(my_string, letter) {
    my_string = [...my_string]
    my_string =  my_string.map(function(i){
        if(i !== letter) return i
    })
    return my_string.join('')
}