function solution(board) {
    let result = 0
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === 1){
                if(i !== 0){
                    if(board[i-1][j] === 0) board[i-1][j] = 2
                }
                if(i !== board.length-1){
                    if(board[i+1][j] === 0) board[i+1][j] = 2
                }
                if(j !== 0){
                    if(board[i][j-1] === 0) board[i][j-1] = 2
                }
                if(j !== board[0].length-1){
                    if(board[i][j+1] === 0) board[i][j+1] = 2
                }
                if(i !== 0 && j !== 0){
                    if(board[i-1][j-1] === 0) board[i-1][j-1] = 2
                }
                if(i !== board.length-1 && j !== board[0].length-1){
                    if(board[i+1][j+1] === 0) board[i+1][j+1] = 2
                }
                if(i !== 0 && j !== board[0].length-1){
                    if(board[i-1][j+1] === 0) board[i-1][j+1] = 2
                }
                if(i !== board.length-1 && j !== 0){
                    if(board[i+1][j-1] === 0) board[i+1][j-1] = 2
                }
                
            }
        }
    }

    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === 0) result++
        }
    }
    return result
}