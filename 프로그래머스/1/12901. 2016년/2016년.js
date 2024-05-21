function solution(a, b) {
    const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    let day = b-1
    
    for(let i=0; i<a-1; i+=1) day += month[i]
    
    return week[day % 7]
    
}