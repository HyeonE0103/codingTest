function solution(k, score) {
    let hall = []
    
    return score.reduce((answer, n) => {
        hall.push(n)
        hall = hall.sort((a, b) => b - a).slice(0, k)
        return [...answer, Math.min(...hall)]
    }, [])
}