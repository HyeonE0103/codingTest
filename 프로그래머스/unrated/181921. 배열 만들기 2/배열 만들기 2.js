function solution(l, r) {
    let nums = []
    let num
    for(let i=l; i<=r; i++){
        num = i.toString()
        if(!num.includes(1)&&!num.includes(2)&&!num.includes(3)&&!num.includes(4)&&!num.includes(6)&&!num.includes(7)&&!num.includes(8)&&!num.includes(9)) nums.push(i)
    }
    return nums.length === 0 ? [-1] : nums
}