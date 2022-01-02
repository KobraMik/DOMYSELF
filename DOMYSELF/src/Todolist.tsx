import React from "react";
import './App.css';

type taskType = {
    id: number;
    title: string;
    checked: boolean;
}

type propsType = {
    title: string;
    tasks: Array<taskType>
}

export function Todolist(props: propsType) {
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map(t => {
                        return <li key={t.id}>
                                <input type="checkbox"
                                       checked={t.checked}/>
                                <span>{t.title}</span>
                            </li>
                    })}
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