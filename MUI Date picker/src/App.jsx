import './App.css'
import TodoListDelete from "./TodoListDelete";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TodoListDelete />
    </LocalizationProvider>
  );
}

export default App
