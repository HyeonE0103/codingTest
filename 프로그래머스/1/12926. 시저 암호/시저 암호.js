function solution(s, n) {
    const c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let result = ''
    
    for(let i=0; i<s.length; i++)
        result += s[i] === ' ' ? ' ' : c[c.indexOf(s[i])+n]

    return result
}