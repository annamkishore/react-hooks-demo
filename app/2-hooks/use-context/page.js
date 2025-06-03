"use client"

import {createContext, useContext, useState} from "react";

// -----------------main component, exported-----------------

export default function UseContextDemo() {
  return <Component1 />
}

// ----------------Private/Local/Unexported Components---------------------

// feature #4(--react): useContext, reducing props passing into child components
// step 1
let UserContext = createContext()

function Component1() {
  let [user, setUser] = useState("Krsna")

  return <>
    Hello 1,
    Namaste {user}
    {/* step 2 */}
    <UserContext.Provider value={user}>
      <Component2 />
    </UserContext.Provider>
  </>
}

function Component2() {
  return <>
    Hello 2
    <Component3 />
  </>
}
function Component3() {
  return <>
    Hello 3
    <Component4 />
  </>
}
function Component4() {
  // step 3
  let userObj = useContext(UserContext)
  return <>
    Hello 4
    Dhanyavaad {userObj}
  </>
}
