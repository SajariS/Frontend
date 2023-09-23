import react from "react";

function TodoTable({todos, todoDelete}) {
    return (
        <>
            {todos.length > 0 && <table>
                <tbody>
                    <tr>
                        <th>Date</th><th>Description</th>
                    </tr>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.date}{index}</td>
                            <td>{todo.desc}</td>
                            <td><button onClick={() => todoDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table> }
        </>
    )
}

export default TodoTable;