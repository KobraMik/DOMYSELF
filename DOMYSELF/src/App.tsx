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


    function addTask(inputTitle: string, id: string) {
        let NewTask = {id: v1(), title: inputTitle, checked: true}
        let todolistTasks = tasks[id];
        tasks[id] = [NewTask, ...todolistTasks]
        setTasks({...tasks});
    }

    function removeTasks(id: string) {
        let todolistTasks = tasks[id];
        tasks[id] = todolistTasks.filter(f => f.id !== id)
        setTasks({...tasks})
    }

    function changeFilter(value: filterType, id: string) {
        let todolist = todolists.find(f => f.id === id);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    function wantToChange(id: string, checked: boolean) {
        let todolistTasks = tasks[id];
        let task = todolistTasks.find(f => f.id === id)
        if (task) {
            task.checked = !checked;
            setTasks({...tasks})
        }
    }

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistId1, title: "What to learn", filter: "All"},
        {id: todolistId2, title: "What to buy", filter: "Active"},
    ])

    let [tasks, setTasks] = useState(
        {
            [todolistId1]: [
                {id: v1(), title: "HTML&CSS", checked: true},
                {id: v1(), title: "JS", checked: true},
                {id: v1(), title: "React", checked: false},
            ],
            [todolistId2]: [
                {id: v1(), title: "Milk", checked: false},
                {id: v1(), title: "Bread", checked: false},
            ]
        });

    return (
        <div className="App">
            {todolists.map(m => {
                let allTodolistTasks = tasks[m.id]
                let tasksForTodolist = allTodolistTasks;

                if (m.filter === 'Active') {
                    tasksForTodolist = allTodolistTasks.filter(f => !f.checked)
                }
                if (m.filter === 'Completed') {
                    tasksForTodolist = allTodolistTasks.filter(f => f.checked)
                }
                return <Todolist
                    key={m.id}
                    id={m.id}
                    title={m.title}
                    tasks={tasksForTodolist}
                    addTask={addTask}
                    removeTasks={removeTasks}
                    wantToChange={wantToChange}
                    filter={m.filter}
                    changeFilter={changeFilter}
                />
            })}
        </div>
    )
}

export default App;
