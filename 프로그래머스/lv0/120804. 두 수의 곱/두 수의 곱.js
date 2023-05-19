function solution(num1, num2) {
    var answer = 0;
    if ((num1 >= 0 && num1<=100) && (num2>=0 && num2 <=100)){
     answer = num1 * num2   
    }else{
        console.log("제한사항 조건X")
    }
    return answer;
}

