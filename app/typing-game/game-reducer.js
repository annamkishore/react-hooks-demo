import generateLetter from "./generate";

export function gameReducer(state, action) {
  switch (action.type) {
    case "add-letter":
      state.letters.push(generateLetter())
      return state
    case "hit":
      let index = state.letters.findIndex(item => item.val.toLowerCase() === action.data && item.display && !item.miss)
      if (index > -1) {
        state.letters[index].display = false
        state.letters[index].hit = true
        return state
      }
      return state
    case "missed":
      let id = action.data
      state.letters.find(item => item.id === id).miss = true
      return state
  }
}
