function solution(cards1, cards2, goal) {
    let num = -999
    let c = true
    for(let i=0; i<cards1.length; i++){
        if(num < goal.indexOf(cards1[i]) && c) num = goal.indexOf(cards1[i])
        else if(goal.indexOf(cards1[i]) === -1) c = false
        else return 'No'
    }
    num = -999
    c = true
    for(let i=0; i<cards2.length; i++){
        if(num < goal.indexOf(cards2[i]) && c) num = goal.indexOf(cards2[i])
        else if(goal.indexOf(cards2[i]) === -1) c = false
        else return 'No'
    }
    return 'Yes'
    
}