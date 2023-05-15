import generateLetter from "./generate";

export function gameReducer(state, action) {
  let letters = state.letters

  switch (action.type) {
    case "add-letter":
      letters.push(generateLetter())
      break
    case "hit":
      let letterObj = letters.find(item => item.val.toLowerCase() === action.data && item.display && !item.miss)
      letterObj && Object.assign(letterObj, {display: false, hit: true})
      break
    case "missed":
      let id = action.data
      letters.find(item => item.id === id).miss = true
      break
  }

  return state
}
