function solution(n) {
    return [...Array(n*3)].map((_, i) => i).filter((n) => n % 3 !==0 && !n.toString().includes('3'))[n-1]
}