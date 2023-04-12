import React from "react";

function TableRow( { data }) {
    const keys = Object.keys(data.length?data[0]:{});
    return (

        <tbody>
            {
                data.map(value =>
                <tr>
                    {keys.map(key => <td key={key}>{value[key]}</td>)}
                </tr>
                )
            }
        </tbody>
    )
}

export default TableRow;