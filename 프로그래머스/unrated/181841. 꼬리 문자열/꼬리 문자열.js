function solution(str_list, ex) {
  return str_list.reduce((acc, s) => (s.includes(ex) ? acc : (acc += s)), "");
}
