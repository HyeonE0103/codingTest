function solution(n, arr1, arr2) {
  let a, b, answer = [];
  for (let i = 0; i < arr1.length; i++) {
    a = arr1[i].toString(2).padStart(n, "0").split("");
    b = arr2[i].toString(2).padStart(n, "0");
    answer.push(a.reduce((acc,cur,i)=>Number(cur)+Number(b[i])>=1?acc+="#":acc+=" ",""))
  }
  return answer
}