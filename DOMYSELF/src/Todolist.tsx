import React, {useState} from "react";
import './App.css';

type taskType = {
    id: string;
    title: string;
    checked: boolean;
}

type propsType = {
    title: string;
    tasks: Array<taskType>
    addTask: (inputTitle: string) => void
}

export function Todolist(props: propsType) {
    let [inputTitle, setInputTitle] = useState('')

    function addTask() {
        props.addTask(inputTitle)
        setInputTitle('')
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInputTitle(e.currentTarget.value)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input onChange={onChangeHandler}
                           onKeyPress={(e) => {
                               if (e.key === 'Enter') {
                                       addTask()
                               }
                           }}
                    />
                    <button onClick={addTask}
                    >+
                    </button>
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