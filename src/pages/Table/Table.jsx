import React from "react";

const Table = ({ table, deleteUser, id }) => {
  return (
    <div className="row ">
      <div className="cell column">{table.name}</div>
      <div className="cell column">{table.username}</div>
      <div className="cell column">{table.email}</div>
      <div className="cell column">{table.phone}</div>
      <div className="cell column">{table.website}</div>
      <button className="cell column" onClick={() => deleteUser(id)}>
        DELETE
      </button>
    </div>
  );
};

export default Table;
