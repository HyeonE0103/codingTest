function solution(n) {
    let num = n+1
    n = n.toString(2).match(/1/g).length
    
    while(true){
        let twoNum = num.toString(2).match(/1/g).length
        if(n === twoNum) return num
        num += 1
    }
    
}