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
}

export function Todolist(props: propsType) {
    return (
        <div className="App">

            <div>
                <h3>{props.name}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map(m =>
                        <li>
                            <input type="checkbox"
                                   checked={m.checked}
                            />
                            <span>{m.title}</span>
                            <button>X</button>
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