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

    let [filter, setFilter] = useState<filterType>('All')
    let newArrayTasks = tasks;
    if (filter === 'Active') {
        newArrayTasks = tasks.filter(f => f.checked)
    }
    if (filter === 'Completed') {
        newArrayTasks = tasks.filter(f => !f.checked)
    }

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: v1(), title: "What to learn", filter: "Active"},
        {id: v1(), title: "What to buy", filter: "Completed"},
    ])

    return (
        <div className="App">
            {todolists.map(m => {
                return <Todolist
                    key={m.id}
                    id={m.id}
                    title={m.title}
                    tasks={newArrayTasks}
                    addTask={addTask}
                    removeTasks={removeTasks}
                    wantToChange={wantToChange}
                    filter={m.filter}
                    setFilter={setFilter}
                />
            })}
        </div>
    )
}

export default App;
