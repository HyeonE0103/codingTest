function solution(spell, dic) {
    spell = spell.sort().join('')
    
    for(const el of dic){
        if(spell === el.split('').sort().join('')) return 1
    }
    return 2
}