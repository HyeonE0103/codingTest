function gcdFn(a, b){
    return (a%b)? gcdFn(b, a%b) : b;
}

function solution(numer1, denom1, numer2, denom2) {
    let [numer, denom] = [denom1*numer2 + denom2*numer1, denom1*denom2]
    let gcd = gcdFn(numer, denom)
    
    return [numer/gcd, denom/gcd]
}