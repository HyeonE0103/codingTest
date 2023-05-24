function solution(strings, n) {
  return strings
    .map((x) => (x = x[n] + x))
    .sort()
    .map((x) => (x = x.slice(1, x.length)));
}