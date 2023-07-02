function solution(code) {
    let mode = 0
    let s = ""
    for(let i=0; i<code.length; i++){
        if(code[i] === "1"){
             mode = mode === 0 ? 1 : 0
        }else{
            if(mode === 0 && i % 2 === 0){
                s += code[i]
            }else if(mode === 1 && i % 2 !== 0){
                s += code[i]
            }
        }
    }
    return s.length === 0 ? "EMPTY" : s
}