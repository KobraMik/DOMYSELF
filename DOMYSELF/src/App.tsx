import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", checked: true},
        {id: v1(), title: "JS", checked: true},
        {id: v1(), title: "React", checked: false},
        {id: v1(), title: "React2", checked: false},
    ])

    function addTask(inputTitle: string) {
        let NewTask = {id: v1(), title: inputTitle, checked: true}
        setTasks([NewTask, ...tasks])
    }

    function removeTasks(id: string) {
        setTasks(tasks.filter(f => f.id !== id))
    }

    function wantToChange(id: string, checked: boolean) {
        let task = tasks.find(f => f.id === id)
        if (task) {
            task.checked = !checked;
        }
        setTasks([...tasks])
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      addTask={addTask}
                      removeTasks={removeTasks}
                      wantToChange={wantToChange}
            />
        </div>
    );
}

export default App;
