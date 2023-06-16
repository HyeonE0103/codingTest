function solution(a, b) {
    let weeks = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    let months = [31,29,31,30,31,30,31,31,30,31,30,31]
    let day = b - 1
    
    for(let i=0; i<a-1; i++) day += months[i] 
    
    return weeks[day % 7]
}