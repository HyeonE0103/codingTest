function solution(s) {
  let words = new Map([
        ['zero', 0],
        ['one', 1],
        ['two', 2],
        ['three', 3],
        ['four', 4],
        ['five', 5],
        ['six', 6],
        ['seven', 7],
        ['eight', 8],
        ['nine', 9],
  ])
  let string = "";
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    string += s[i];
    if (!isNaN(s[i])) {
      answer += s[i];
      string = "";
    }
    if (words.get(string) !== undefined) {
      answer += words.get(string);
      string = "";
    }
  }
  return Number(answer)
}