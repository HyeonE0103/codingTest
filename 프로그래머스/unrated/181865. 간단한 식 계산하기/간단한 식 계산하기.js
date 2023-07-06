function solution(binomial) {
    s = binomial.split(" ")
    switch(s[1]){
        case '+':
            return Number(s[0]) + Number(s[2])
        case '-':
            return Number(s[0]) - Number(s[2])
        case '*':
            return Number(s[0]) * Number(s[2])
    }
}