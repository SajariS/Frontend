import { useState } from "react";
import { useRef } from 'react';
import TodoTable from "./TodoTable";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/fi";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function TodoList() {
    const [input, setInput] = useState({description: '', date: null, priority: '', dateFormat: null});
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const inputChanged =(event) => {
        setInput({...input, [event.target.name]: event.target.value});
    }

    const dateChanged = (date) => {
        const newDate = date.add(3, 'h');
        const formattedDate = dayjs(newDate).format('DD/MM/YYYY');
        setInput({...input, date: newDate, dateFormat: formattedDate});
    }

    const addTodo = () => {
        event.preventDefault();
        setTodos([...todos, input]);
    }

    const deleteTodo = () => {
        event.preventDefault();
        if(gridRef.current.getSelectedNodes().length > 0) {      
            setTodos(todos.filter((todo, index) => 
                index != gridRef.current.getSelectedNodes()[0].id));
        }
        else {
            alert("Select row first!");
        }

    }

    return(
        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fi">
                <form>
                    <TextField
                        label="Description: "
                        variant="standard"
                        name="description"
                        value={input.desc}
                        onChange={inputChanged} />
                    <DatePicker label="date" value={input.date} onChange={(date) => dateChanged(date)} />
                    <TextField
                        label="Prioritty: "
                        variant="standard"
                        name="priority"
                        value={input.priority}
                        onChange={inputChanged} />
                    <Button onClick={addTodo} variant="contained">Add</Button>
                    <Button onClick={deleteTodo} variant="contained">Delete</Button>
                </form>
                <TodoTable todos={todos} todoDelete={deleteTodo} gridRef={gridRef} />
            </LocalizationProvider>
        </Stack>
    )
}
export default TodoList;