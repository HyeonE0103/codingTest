function solution(lottos, win_nums) {
    rank = [6,6,5,4,3,2,1]
    let [count, zero] = lottos.reduce(([count, zero],cur) => win_nums.includes(cur) ? [++count, ++zero] : cur === 0 ? [++count, zero]:[count,zero],[0,0])
    
    return [rank[count], rank[zero]]
}