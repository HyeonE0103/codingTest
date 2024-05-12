function solution(cards1, cards2, goal) {
    cards1.reverse()
    cards2.reverse()
    
    for(let i=0; i<goal.length; i+=1){
        if(cards1[cards1.length-1] === goal[i]) cards1.pop()
        else if(cards2[cards2.length-1] === goal[i]) cards2.pop()
        else return "No"
    }
    
    return "Yes"
}