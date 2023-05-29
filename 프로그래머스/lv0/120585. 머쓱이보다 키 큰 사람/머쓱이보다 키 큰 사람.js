function solution(array, height) {
    return array.reduce((acc, cur, i) => {
    height < cur ? acc++ : acc
    return acc;
  }, 0);  
}