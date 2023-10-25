function solution(id_pw, db) {
    const [id, pw] = id_pw
    db = new Map(db);
    return db.has(id) ? (db.get(id) === pw ? 'login' : 'wrong pw') : 'fail'
}