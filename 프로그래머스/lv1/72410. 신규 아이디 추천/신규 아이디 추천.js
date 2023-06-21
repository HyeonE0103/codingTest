function solution(new_id) {
  const id = new_id
  .toLowerCase()
  .replace(/[^\w-_.]/g, "") /*처음부터 영문,숫자,-,_,.가 아닌 것 모든 문자를 검색*/
  .replace(/\.+/g, ".") /*이스케이프 .이 1회 이상 연속으로 반복되는 문자에 가능한 많이 일치 모든 문자를 검색*/
  .replace(/^\.|\.$/g, "") /*줄 시작에서 이스케이프 . 또는 이스케이프 . 끝에서 일치  모든 문자를 검색*/
  .replace(/^$/, "a") /*줄 시작에서 줄 끝 일치 */
  .slice(0, 15)
  .replace(/\.$/, "") /* 이스케이프. 줄의 끝에서 일치 */
  return id.padEnd(3, id[id.length-1])
}
