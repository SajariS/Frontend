import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function Carlist() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const [columnDefs] = useState([
        {field: 'brand', sortable: true, filter: true},
        {field: 'model', sortable: true, filter: true},
        {field: 'color', sortable: true, filter: true},
        {field: 'year', sortable: true, filter: true, width: 100},
        {field: 'fuel', sortable: true, filter: true, width: 110},
        {field: 'price', sortable: true, filter: true},
        {
            cellRenderer: params => <Button size="small" onClick={() => deleteCar(params.data._links.car.href)}>Delete</Button>,
            width: 120
        }
    ]);

    const fetchCars = () => {
        fetch('https://carrestapi.herokuapp.com/cars')
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                throw new Error("Error in fetch:" + response.statusText);
            }
        })
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
    }

    const deleteCar = (url) => {
        if(window.confirm("Are you sure?")) {
            fetch(url, {method: 'DELETE'})
            .then(response => {
                if(response.ok) {
                    fetchCars();
                }
                else {
                    throw new Error("Error in DELETE:" + response.statusText)
                }
            })
            .catch(err => console.error(err))
        }
    }

    return(
        <>
            <div className="ag-theme-material" style={{ width: '100%', height: 600}}>
                <AgGridReact 
                rowData={cars}
                columnDefs={columnDefs}
                pagination={true}
                paginationAutoPageSize={true}
                />
            </div>
        </>
    )
}

export default Carlist;