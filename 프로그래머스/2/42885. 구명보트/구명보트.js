function solution(people, limit) {
    people.sort((a,b) => b-a)
    let i = 0, j = people.length-1, answer = 0
    
    while(i<=j){
        if(people[i] + people[j] <= limit) j-=1
        i += 1, answer += 1
    }
    
    return answer
}