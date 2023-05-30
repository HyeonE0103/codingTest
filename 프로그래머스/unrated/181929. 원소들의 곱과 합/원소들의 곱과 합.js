function solution(num_list) {
  num1 = num_list.reduce((acc, cur) => (acc += cur)) ** 2;
  num2 = num_list.reduce((acc, cur) => (acc *= cur));
  return num1 > num2 ? 1 : 0;
}