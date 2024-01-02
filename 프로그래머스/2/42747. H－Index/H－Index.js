function solution(citations) {
    let arr = []
    citations.sort((a,b) => b-a)
    
    for(let i=0; i<citations.length; i++) arr.push(Math.min(citations[i], i+1))

    return Math.max(...arr)
}

/* H-index란 정확히 무엇인지에 대해 알아야 하는데 a번 이상 인용된 논문이 b편 이상이면 a와 b중 작은 값이 hIndex

만약 [9, 7, 6, 2, 1] 의 인용횟수를 가진 교수가 있다면
9번 이상 인용 횟수를 가진 논문은 1편 이때 H-Index는 1
7번 이상 인용 횟수를 가진 논문은 2편 이때 H-Index는 2
6번 이상 인용 횟수를 가진 논문은 3편 이때 H-Index는 3
2번 이상 인용 횟수를 가진 논문은 4편 이때 H-Index는 2
1번 이상 인용 횟수를 가진 논문은 5편 이때 H-Index는 1
*/