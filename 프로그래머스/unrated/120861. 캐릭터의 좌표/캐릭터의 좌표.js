function solution(keyinput, board) {
    let result = [0,0]
    for(const el of keyinput){
        if(el === 'left' && result[0] !== -parseInt(board[0]/2)) result[0]--
        if(el === 'right' && result[0] !== parseInt(board[0]/2)) result[0]++
        if(el === 'up' && result[1] !== parseInt(board[1]/2)) result[1]++
        if(el === 'down' && result[1] !== parseInt(-board[1]/2)) result[1]--
    }
    
    return result
}