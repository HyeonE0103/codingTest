function solution(strings, n) {
  return strings
    .map((x) => (x = x[n] + x))
    .sort()
    .map((x) => (x = x.slice(1, x.length)));
}

// function solution2(strings, n) {
//   return strings.sort((s1, s2) =>
//     s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
//   );
// }