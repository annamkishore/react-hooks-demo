import generateLetter from "./util-generate";

/**
 *
 * Reducer State Object..
 *
 * {
 *   letters: []
 *   hitCount: 0
 *   missCount: 0
 * }
 */
export function gameReducer(state, action) {
  let letters = state.letters

  switch (action.type) {
    case "add-letter":
      letters.push(generateLetter())
      break
    case "hit":
      let letterObj = letters.find(item => item.val.toLowerCase() === action.data && item.display && !item.miss)
      if(letterObj) {
        Object.assign(letterObj, {display: false, hit: true})
        state.hitCount++
      }
      break
    case "missed":
      let id = action.data
      letters.find(item => item.id === id).miss = true
      state.missCount++
      break
  }

  return state
}
