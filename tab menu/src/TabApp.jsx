import React, { useState} from 'react';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab';
import TodoListDelete from './TodoListDelete';

function TabApp() {
    const [tab, setTab] = useState('home');

    const handleChange = (event, value) => {
        setTab(value);
    }

    return(
        <>
            <Tabs value={tab} onChange={handleChange}>
                <Tab value="home" label="Home" />
                <Tab value="todos" label="Todos" />
            </Tabs>
            {tab === 'home' && <div>Welcome to the todolist</div>}
            {tab === 'todos' && <TodoListDelete />}
        </>
    )
}

export default TabApp