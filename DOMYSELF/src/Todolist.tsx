import React, {useState} from "react";
import './App.css';
import {filterType} from "./App";

type propsType = {

}

export function Todolist(props: propsType) {
    return (
        <div className="App">
            <div>
                <h3>название</h3>
                <div>
                    <input />
                    <button >+</button>
                </div>
                <ul>
                    return <li >
                    <input type="checkbox"/>
                    <span>название</span>
                    <button>X</button>

                </li>
                    )
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