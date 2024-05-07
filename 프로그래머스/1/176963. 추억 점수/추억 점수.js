function solution(name, yearning, photo) {
    return photo.map(picture => picture.reduce((score, people) => score += yearning[name.indexOf(people)] ?? 0, 0))
}