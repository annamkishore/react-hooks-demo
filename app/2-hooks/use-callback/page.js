'use client'

// Reference
// https://www.scaler.com/topics/react/usecallback

//
// useCallback, is to further optimize rendering of Child Component created via React.memo()
//      i.e function is being created between rendering
// don't use useCallback
//      https://medium.com/@dev_one/how-to-use-usecallback-hook-35dc047aee48
//

import React, {useCallback, useState} from 'react'

import Tasks from './Tasks'

export default function App() {

    const [count, setCount] = useState(0);
    const [tasks, setTasks] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTaskMemoized = useCallback(() => {
        setTasks(t => [...t, "New Task"]);
    }, [tasks])
    // const addTask = () => {
    //     setTasks(t => [...t, "New Task"]);
    // }

    return (
        <div>
            <div className="first">
                <Tasks tasks={tasks} addTask={addTaskMemoized}/>
            </div>
            <br/>
            <div className="second">
                (Parent Comp) Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}
