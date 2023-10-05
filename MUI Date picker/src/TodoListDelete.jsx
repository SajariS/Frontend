import { useState } from "react";
import { useRef } from 'react';
import TodoTable from "./TodoTable";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function TodoList() {
    const [input, setInput] = useState({description: '', date: null, priority: ''});
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const inputChanged =(event) => {
        setInput({...input, [event.target.name]: event.target.value});
    }

    const dateChanged = (newDate) => {
        setInput({...input, date: newDate});
    }

    const addTodo = () => {
        event.preventDefault();
        setTodos([...todos, input]);
    }

    const deleteTodo = () => {
        if(gridRef.current.getSelectedNodes().length > 0) {      
            setTodos(todos.filter((todo, index) => 
                index != gridRef.current.getSelectedNodes()[0].id));
        }
        else {
            alert("Select row first!");
        }

    }

    return(
        <>
            <form onSubmit={addTodo}>
                <label htmlFor="desc">Description: </label>
                <input type="text" name="description" value={input.desc} onChange={inputChanged} id="desc"/>
                <DatePicker label="date" value={input.date} format="DD-MM-YYYY" onChange={(newDate) => dateChanged(newDate)} />
                <label htmlFor="priority">Priority: </label>
                <input type="text" name="priority" value={input.priority} onChange={inputChanged} id="priority"/>
                <input type="submit" value="Add" />
            </form>
            <button onClick={deleteTodo}>Delete</button>
            <TodoTable todos={todos} todoDelete={deleteTodo} gridRef={gridRef} />
        </>
    )
}
export default TodoList;