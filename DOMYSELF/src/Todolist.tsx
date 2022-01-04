import React, {useState} from "react";
import './App.css';
import {filterType} from "./App";

type taskType = {
    id: string;
    title: string;
    checked: boolean;
}

type propsType = {
    title: string;
    tasks: Array<taskType>
    addTask: (inputTitle: string) => void
    removeTasks: (id: string) => void
    wantToChange: (id: string, checked: boolean) => void
    filter: filterType
    setFilter: (value: filterType) => void
}

export function Todolist(props: propsType) {
    let [inputTitle, setInputTitle] = useState('')

    function addTask() {
        props.addTask(inputTitle);
        setInputTitle('');
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setInputTitle(e.currentTarget.value)
    }

    function onChangeButtonsHandler (value: filterType){
        props.setFilter (value)
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

                        function removeTasks() {
                            props.removeTasks(t.id)
                        }

                        function wantToChange() {
                            props.wantToChange(t.id, t.checked)
                        }

                        return <li key={t.id}>
                            <input type="checkbox"
                                   checked={t.checked}
                                   onChange={wantToChange}
                            />
                            <span>{t.title}</span>
                            <button onClick={removeTasks}>X</button>
                        </li>
                    })}
                </ul>
                <div>
                    <button onClick={()=>onChangeButtonsHandler('All')}>All</button>
                    <button onClick={()=>onChangeButtonsHandler('Active')}>Active</button>
                    <button onClick={()=>onChangeButtonsHandler('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    )
}