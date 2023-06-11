function solution(numbers, direction) {
    const num = (numbers.length)-1
    return direction === "right" ? [numbers[num], ...numbers.slice(0,num)] : [...numbers.slice(1), numbers[0]]
}