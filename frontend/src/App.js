import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table/Table";

function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const load = async () => {

    const url = 'http://localhost:3003/data'
    const res = await fetch(url)
    const data = await res.json()    
    setData(data.dataRows)
    setColumns(data.dataHeader)

  };

  useEffect(() => {
    load();
  }, []);
  
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
