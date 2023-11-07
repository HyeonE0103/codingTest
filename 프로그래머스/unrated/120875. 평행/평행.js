function solution(dots) {
    //모든 기울기를 비교하는 것인 아닌 두개씩 짝을 지었을때 그 두개를 판별해야함
    (dots[0][0]-dots[1][0])/(dots[0][1]-dots[1][1])
    if(((dots[0][0]-dots[1][0])/(dots[0][1]-dots[1][1])) === ((dots[2][0]-dots[3][0])/(dots[2][1]-dots[3][1])) || ((dots[0][0]-dots[2][0])/(dots[0][1]-dots[2][1])) === ((dots[1][0]-dots[3][0])/(dots[1][1]-dots[3][1])) || ((dots[0][0]-dots[3][0])/(dots[0][1]-dots[3][1])) === ((dots[1][0]-dots[2][0])/(dots[1][1]-dots[2][1]))) return 1
    else return 0
}