function solution(s) {
    return [...s].map((el, i) => {
        const count = s.slice(0, i).lastIndexOf(el)
        return count < 0 ? count : i - count 
    })
}