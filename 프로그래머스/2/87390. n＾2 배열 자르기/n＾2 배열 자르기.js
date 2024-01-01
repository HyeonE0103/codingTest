function solution(n, left, right) {
    let result = []
    for(let i=left; i<=right; i++){
        result.push(Math.max(Math.floor(i/n), i%n) +1 )
    }
    
    return result
    
}
//숫자넣기 규칙: 열과 행중 더 큰 숫자 + 1, 만약 (1,0)이면 1+1=2로 2가 들어감
//해당 행과 열 규칙: 행은 n으로 나눈 정수, 열은 n으로 나눈 나머지, 만약 n=3이고 8일경우 (2,2)가 되며 인덱스는 0부터 시작