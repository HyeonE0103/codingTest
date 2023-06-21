function solution(new_id) {
  const id = new_id
  .toLowerCase()
  .replace(/[^\w-_.]/g, "") 
  .replace(/\.+/g, ".")
  .replace(/^\.|\.$/, "")
  .replace(/^$/, "a") 
  .slice(0, 15)
  .replace(/\.$/, "")
  return id.padEnd(3, id[id.length-1])
}