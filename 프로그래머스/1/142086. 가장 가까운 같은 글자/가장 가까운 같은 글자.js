function solution(s) {
    return [...s].map((c, i) => {
        const num = s.slice(0, i).lastIndexOf(c)
        return num === -1 ? num : i - num
    })
}