function solution(s) {
    const reg = /^\d{6}$|^\d{4}$/;
    return reg.test(s)
}