import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

let [tasks, setTasks] = useState([
    {id: 1, title: "HTML&CSS", checked: true},
    {id: 2, title: "JS", checked: true},
    {id: 3, title: "React", checked: false},
    ])
//
// function addTask () {
//     let NewTask = {id: 1, title: "HTML&CSS", checked: true}
//     setTasks([NewTask, ...tasks])
// }

function App() {
    return (
        <div className="App">
           <Todolist title="What to learn"
                     tasks={tasks}
           />
       </div>
    );
}

export default App;
