function solution(board) {
    for (let y = 0; y < board.length; y++)
        for (let x = 0; x < board[0].length; x++) {

            if (board[y][x] == 1) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (board[y + i]?.[x + j] === 0) 
                            board[y + i][x + j] = 2
                    }
                }
            }

        }

    return [...board.join()].filter(v => v == '0').length;

}