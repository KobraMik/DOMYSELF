import React, {useState} from "react";
import './App.css';
import {filterType} from "./App";

type tasksType = {
    id: string
    title: string
    checked: boolean
}
type propsType = {
    name: string
    tasks: Array<tasksType>
    addTask: (input: string) => void
}

export function Todolist(props: propsType) {
    let [input, setInput] = useState('')

    function addTask () {
        if(input.trim() !== '') {
            props.addTask(input)
        }
        setInput('')
    }
    function onChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.currentTarget.value)
    }
    return (
        <div className="App">
            <div>
                <h3>{props.name}</h3>
                <div>
                    <input value={input}
                           onChange={onChangeHandler}
                           onKeyPress={(e)=>{if(e.key === 'Enter') {
                               addTask()
                           }}}
                    />
                    <button onClick={addTask}>+</button>
                </div>
                <ul>
                    {props.tasks.map(m =>
                        <li>
                            <input type="checkbox"
                                   checked={m.checked}
                            />
                            <span>{m.title}</span>
                            <button onClick={()=>{}}>X</button>
                        </li>
                    )}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}