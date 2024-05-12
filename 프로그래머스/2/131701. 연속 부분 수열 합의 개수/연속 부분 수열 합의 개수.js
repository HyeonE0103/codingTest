function solution(elements) {
    const circular = elements.concat(elements)
    //작은 배열은 spread가 큰 크기의 배열 합치기는 concat이 효율이 좋다는 레퍼런스 참고
    //큰 배열일 경우 spread를 이용할시 메모리 부족으로 오류 발생할 수 있음
    let sequence = new Set()
    
    for(let i=0; i<elements.length; i+=1){
        let sum = 0
        for(let j=0; j<elements.length; j+=1){
            sum += circular[i+j]
            sequence.add(sum)
        }
    }
    
    return sequence.size
}