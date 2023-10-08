import react from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';


function TodoTable({todos, todoDelete, gridRef}) {

    const columns = [
        {field: "description", sortable: true, filter: true, floatingFilter: true},
        {field: "dateFormat", sortable: true, filter: true, floatingFilter: true},
        {field: "priority", sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? {color: 'red' }: {color: 'black'} }
    ];

    return (
        <>
            <div className="ag-theme-material" style={{height: '700px', width: '100%', amrgin: 'auto'}} >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={todos} 
                    animateRows={true}>
                </AgGridReact>
            </div>
        </>
    )
}

export default TodoTable;