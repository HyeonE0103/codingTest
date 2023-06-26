function solution(str1, str2) {
    return str1.split("").reduce((acc,_,i)=>acc+=str1[i]+str2[i] ,"")
}