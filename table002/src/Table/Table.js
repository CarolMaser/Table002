import React from "react";
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table ({ columns, data }) {
    return (
        <div>
            <table>
                <TableHeader columns={columns} />
                <TableRow data={data} />
            </table>
            <br />
            <button className="button">Atualizar</button>
        </div>
    )
}

export default Table;