function solution(numbers) {
    numbers = numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
    let num = numbers.length-1
    return numbers[num] * numbers[num-1]
}