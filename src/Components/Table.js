import React from "react"

function Table({id, name, Type, Status}) {
    return (
        <div>
          <table>
            {/* <thead>
              <tr>
                <th>NAME</th>
                <th>TYPE</th>
                <th>STATUS</th>
                <th>SITE</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{Type}</td>
                <td>{Status}</td>
                <td>www.examplewebsite.com</td>
                <td><button className="button-value" onClick={() => console.log("working!!")}>value</button></td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}
export default Table;