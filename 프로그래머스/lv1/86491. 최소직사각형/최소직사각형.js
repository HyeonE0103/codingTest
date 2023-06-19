function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {    //for에 비해 forEach가 빠름
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}