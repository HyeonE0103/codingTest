function solution(name, yearning, photo) {
    return photo.map((x) => x.reduce((a, c) => a += yearning[name.indexOf(c)] ?? 0, 0))
}