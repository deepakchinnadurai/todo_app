import * as React from "react";
import {useState} from "react";
import {AddTask} from './AddTask'

export  const Header = () =>{
    return(
        <div>
        <h1 class = "todo">TodoList</h1>
        <p class="total">Total tasks</p>
        </div>
    );
}