import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterType = 'All' | 'Active' | 'Completed'
export type todolistsType = {
    id: string,
    title: string,
    filter: filterType
}

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", checked: true},
        {id: v1(), title: "JS", checked: true},
        {id: v1(), title: "React", checked: false},
        {id: v1(), title: "React2", checked: false},
    ])



    return (
        <div className="App">
            return <Todolist />
        </div>
    )
}

export default App;