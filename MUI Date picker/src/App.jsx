import './App.css'
import TodoListDelete from "./TodoListDelete";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "dayjs/locale/de";

function App() {
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <TodoListDelete />
    </LocalizationProvider>
  );
}

export default App
