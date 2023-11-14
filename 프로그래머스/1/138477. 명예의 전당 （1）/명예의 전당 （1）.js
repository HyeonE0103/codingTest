function solution(k, score) {
    let result = []
    return score.reduce((acc, cur) => {
        result.push(cur);
        result = result.sort((a, b) => b - a).slice(0, k);
        return [...acc, Math.min(...result)];
    }, []);
}