import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "Initial Task", id: uuidv4(), isDone:false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
       setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
        setTodos((prevTodos)=>todos.filter((prevTodos) => prevTodos.id!= id));
    }

    // let upperCaseAll = () =>{
    //     setTodos( (prevTodos) => (
    //         prevTodos.map((todo) =>{
    //         return {
    //             ...todo,
    //             task: todo.task.toUpperCase(),
    //         };
    //     })
    //     ));
    // }

    let markAllDone = () =>{
        setTodos( (prevTodos) => (
            prevTodos.map((todo) =>{
            return {
                ...todo,
                isDone:true
            };
        })
        ));
    }

    // let upperCaseOne = (id) =>{
    //     setTodos( (prevTodos) => (
    //         prevTodos.map((todo) =>{
    //         if(todo.id === id)  {
    //             return {
    //                 ...todo,
    //                 task: todo.task.toUpperCase(),
    //             };
    //         }else{
    //             return todo;
    //         }
            
    //     })
    //     ));
    // }

    let markAsDone = (id) =>{
        setTodos( (prevTodos) => (
            prevTodos.map((todo) =>{
            if(todo.id === id)  {
                return {
                    ...todo,
                    isDone:true
                };
            }else{
                return todo;
            }
            
        })
        ));
    }

    return (
        <div>
            <h3 style={{color:"gray"}}><u>Todo List using REACT</u></h3>
            <br/>
            <input placeholder="Enter the task to your list" 
            value={newTodo}
            onChange={updateTodoValue} 
            style={{backgroundColor: "lightgreen"}}
            ></input>

            &nbsp; 

            <button onClick={addNewTask} 
            style={{backgroundColor: "green"}}>Add Task</button>

            <br/><br/><br/>

            <hr/>
            <h4 style={{color:"gray"}}>----Your Tasks----</h4>
            <ul>
                {todos.map((todo) => ( //Read React documentation to know why map, filter and all are used here...
                    <li key={todo.id}>
                        <span style={todo.isDone?{textDecorationLine: "line-through"}: {}}>{todo.task}</span>
                        &nbsp; 
                        <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                        &nbsp;
                        {/* <button onClick={()=> upperCaseOne(todo.id)}>UpperCase</button> */}
                        <button onClick={()=> markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
            <hr/>
        {/* <button onClick={upperCaseAll}>UpperCase All</button>     */}
        <button onClick={markAllDone}>Mark All Done</button>
        </div>
    )
}