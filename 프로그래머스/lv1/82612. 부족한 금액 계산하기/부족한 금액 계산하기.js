function solution(price, money, count) {
    num = count*((price + price*count)/2) - money
    return num >= 0 ? num : 0
}