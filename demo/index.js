const a = 1
const b = 3
if (a === b) {
  console.log(a, b)
}

function test(...arg) {
  console.log(arg)
}
test()

const d = a > b ? 1 : 0
if (d) {
  console.log(d)
}
