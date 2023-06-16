function solution(price, money, count) {
    num = count*(2*price+(count-1)*price)/2 - money
    return num >= 0 ? num : 0
}