function solution(ineq, eq, n, m) {
    s = ineq + eq
    switch(s){
        case '>=':
            return n >= m ? 1 : 0
        case '<=':
            return n <= m ? 1 : 0
        case '<!':
            return n < m ? 1 : 0
        case '>!':
            return n > m ? 1 : 0
    }
}