import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", checked: true},
        {id: v1(), title: "JS", checked: true},
        {id: v1(), title: "React", checked: false},
    ])

    function addTask(inputTitle: string) {
        let NewTask = {id: v1(), title: inputTitle, checked: true}
        setTasks([NewTask, ...tasks])
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
