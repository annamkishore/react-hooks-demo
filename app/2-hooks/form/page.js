"use client"
import {useState} from "react";

export default function App() {
    let [item, setItem] = useState(1)
    let itemOnChange = e => {
        console.log("Krishna, itemOnChange", e.target.value)
        setItem(e.target.value)
    }

    console.log("Krishna, Component..")
    return (
        <div style={{padding: '2rem'}}>
            form demo <br />
            Item: <input value={item} onChange={itemOnChange}/>
        </div>
    )
}