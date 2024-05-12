function solution(cards1, cards2, goal) {
    let a=0, b=0
    
    for(let i=0; i<goal.length; i+=1){
        if(cards1[a] === goal[i]) a+=1
        else if(cards2[b] === goal[i]) b+=1
        else return 'No'
    }
    
    return 'Yes'
}