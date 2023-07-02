function solution(code) {
    let mode = 0
    let s = ""
    for(let i=0; i<code.length; i++){
        if(code[i] === "1"){
            mode === 0 ? mode = 1 : mode = 0
        }else{
            if(mode === 0){
                if(i % 2 === 0) s += code[i]
            }else{
                if(i % 2 !== 0) s += code[i]
            }
        }
    }
    return s.length === 0 ? "EMPTY" : s
}