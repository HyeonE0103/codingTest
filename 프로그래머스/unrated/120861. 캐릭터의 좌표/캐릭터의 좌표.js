function solution(keyinput, board) {
    const [w,h] = [parseInt(board[0]/2), parseInt(board[1]/2)]
    let result = [0,0]
    
    for(const el of keyinput){
        switch(el){
            case 'left': if(result[0] > -w) result[0]--; break
            case 'right': if(result[0] < w) result[0]++; break
            case 'up': if(result[1] < h) result[1]++; break
            case 'down': if(result[1] > -h) result[1]--; break
        }
    }
    return result
}