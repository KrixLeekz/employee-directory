import React from "react";
import Body from "../Body";

function Table({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
      >
        <thead>
          <tr>
            {headings.map(({ name }) => {
              return (
                <th
                  className="col"
                  key={name}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <Body users={users} />
      </table>
    </div>
  );
}

export default Table;