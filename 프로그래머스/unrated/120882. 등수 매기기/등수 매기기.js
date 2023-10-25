function solution(score) {
    const ave = score.map(x=>(x[0]+x[1])/2)
    const sort = [...ave].sort((a,b) => b-a)
    
    return ave.map((x)=>sort.indexOf(x)+1)

}