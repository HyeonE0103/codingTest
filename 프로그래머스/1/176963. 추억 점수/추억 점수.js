function solution(name, yearning, photo) {
    let result = []
    
    for(let i=0; i<photo.length; i+=1){
        let n = 0
        for(let j=0; j<photo[i].length; j+=1){
            const num = name.indexOf(photo[i][j])
            if(num !== -1) n += yearning[num]
        }
        result.push(n)
    }
    return result
}