// function solution(s) {
//   let words = new Map([
//         ['zero', 0],
//         ['one', 1],
//         ['two', 2],
//         ['three', 3],
//         ['four', 4],
//         ['five', 5],
//         ['six', 6],
//         ['seven', 7],
//         ['eight', 8],
//         ['nine', 9],
//   ])
  
//   let string = "";
//   let answer = "";
//   for (let i = 0; i < s.length; i++) {
//     if (!isNaN(s[i])) {
//       answer += s[i];
//     }else{
//         string += s[i];
//         if (words.get(string) !== undefined) {
//         answer += words.get(string);
//         string = "";
//     }
//     }
//   }
//   return Number(answer)
// }

function solution(s) {

    var numArr = [0,1,2,3,4,5,6,7,8,9];
    var wordArr = ['zero', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for(var i = 0; i < numArr.length; i++){               
        if(s.includes(wordArr[i])){            
            s = s.replaceAll(wordArr[i], numArr[i]);
        }
    }

    return Number(s);
}