// function solution(s){
//     s = s.toLowerCase()
//     let num = 0
//     for(let i=0; i<s.length; i++){
//         if(s[i] === 'p') num++;
//         else if(s[i] === 'y') num --;
//     }
//     if (num !== 0) return false
//     else return true   
// }

// function solution(s){
//     s = s.toLowerCase()
//     return ([...s].reduce((acc, cur)=> cur === 'p' ? acc+= 1 : cur === 'y' ? acc-= 1 : acc , 0) === 0) 
// }

function solution(s){
    s = s.toLowerCase()
    return (s.split('p').length - 1 === s.split('y').length - 1)
}

