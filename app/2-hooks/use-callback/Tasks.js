import React, {memo} from 'react'

const Tasks = ({tasks, addTask}) => {
    console.log("child rendered");
    return (
        <div>
            <h2>Child Component: Tasks list</h2>
            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default memo(Tasks)
