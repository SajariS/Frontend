import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
    const [input, setInput] = useState({desc: '', date: ''});
    const [todo, setTodo] = useState([]);

    const inputChanged =(event) => {
        setInput({...input, [event.target.name]: event.target.value});
    }

    const addTodo = () => {
        event.preventDefault();
        setTodo([...todo, input]);
    }

    const deleteTodo = (index) => {
        const updatedTodos = todo.filter((_, i) => i !== index);
        setTodo(updatedTodos);
    }

    return(
        <>
            <form onSubmit={addTodo}>
                <label htmlFor="desc">Description: </label>
                <input type="text" name="desc" value={input.desc} onChange={inputChanged} id="desc"/>
                <label htmlFor="date">Date: </label>
                <input type="text" name="date" value={input.date} onChange={inputChanged} id="date"/>
                <input type="submit" value="Add" />
            </form>
            <TodoTable todos={todo} todoDelete={deleteTodo} />
        </>
    )
}
export default TodoList;