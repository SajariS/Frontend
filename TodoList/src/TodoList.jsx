import { useState } from "react";

const [input, setInput] = useState({desc: '', date: ''});
const [todo, setTodo] = useState([]);

const inputChanged =(event) => {
    setInput({...input, [event.target.name]: event.target.value});
}

const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todo, input]);
}

return(
    <>
        <form onSubmit={addTodo}>
            <label for="desc">Description</label>
            <input type="text" value={input.desc} onChange={inputChanged} id="desc"/>
            <label for="date">Date</label>
            <input type="text" value={input.date} onChange={inputChanged} id="date"/>
            <input type="submit" value="Add Todo" />
        </form>
    </>
)