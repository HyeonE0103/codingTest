function solution(people, limit) {
    let i = 0
    people.sort((a,b) => a-b)
    
    for(let j=people.length; i<j; j--){
        if(people[i] + people[j] <= limit) i+=1
    }
    
    return people.length - i
}