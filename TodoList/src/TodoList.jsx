import { useState } from "react";

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

    return(
        <>
            <form onSubmit={addTodo}>
                <label for="desc">Description: </label>
                <input type="text" name="desc" value={input.desc} onChange={inputChanged} id="desc"/>
                <label for="date">Date: </label>
                <input type="text" name="date" value={input.date} onChange={inputChanged} id="date"/>
                <input type="submit" value="Add" />
            </form>
            {todo.length > 0 && <table>
                <tbody>
                    <tr>
                        <th>Date</th><th>Description</th>
                    </tr>
                    {todo.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table> }
        </>
    )
}
export default TodoList;