import React from "react";

function TableRow( { data }) {
    const keys = Object.keys(data || {});
    return (

        <tbody>
            {
                <tr>
                    {keys.map(key => <td key={key}>{data[key]}</td>)}
                </tr>
            }
        </tbody>
    )
}

export default TableRow;