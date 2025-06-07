'use client'

import {useFormState} from 'react-dom'
import {greetUser} from './actions'

export default function ServerActionTestPage() {
  // server action
  const [state, formAction] = useFormState(greetUser, {message: ''})

  return (
    <div className="p-4">
      <form action={formAction}>
        <input name="name"/>
        <button type="submit">Greet</button>
      </form>

      {state.message &&
        <p className="mt-4 text-green-700 font-semibold">{state.message}</p>
      }
    </div>
  )
}
