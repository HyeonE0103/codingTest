function solution(people, limit) {
    people = people.sort((a,b) => b-a)
    let i=0, j=people.length-1, result = 0
    while(i<j){
        if(people[i] + people[j] <= limit){
            result += 1
            i += 1
            j -= 1
        }else i += 1

    }
    return people.length - result
}