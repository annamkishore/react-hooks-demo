let random = max => Math.floor(Math.random() * max)

let sequenceId = 1

export default function generateLetter() {
  return {
    id: sequenceId++,
    val: String.fromCharCode(0x41 + random(26)),  // letter
    row: 0,
    col: random(innerWidth - 50),

    speed: 100 + random(100),
    jump: 10,
    display: true
  }
}
