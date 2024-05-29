import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../Table/Table";

const UserPage = () => {
  const [table, setTable] = useState([]);

  const { handleSubmit, register, reset } = useForm();

  function submit(values) {
    if (
      values.name.trim() === "" ||
      values.username.trim() === "" ||
      values.email.trim() === "" ||
      values.phone.trim() === ""
    ) {
      alert("Введите все поля ");
    } else {
      setTable([...table, values]);
      reset({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });
      console.log(table);
    }
  }

  const deleteUser = (id) => {
    setTable((prev) => prev.filter((_, i) => i !== id));
  };

  const cleanTable = () => {
    setTable([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="name"
        />
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="username"
        />
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="email"
        />
        <input
          type="text"
          {...register("phone", { required: true })}
          placeholder="phone"
        />
        <input type="text" {...register("website")} placeholder="website" />
        <button onClick={handleSubmit(submit)}>create</button>
        <button type="reset" onClick={cleanTable}>
          Clean table
        </button>
      </form>
      <div className="row header">
        <div className="cell">Name</div>
        <div className="cell">Username</div>
        <div className="cell">Email</div>
        <div className="cell">Phone</div>
        <div className="cell">Website</div>
        <div className="cell">DELETE</div>
      </div>
      {table.length > 0 ? (
        <div className="table">
          {table.map((value, id) => (
            <Table
              key={id}
              table={{
                name: value.name,
                username: value.username,
                email: value.email,
                phone: value.phone,
                website: value.website,
              }}
              deleteUser={deleteUser}
              id={id}
            />
          ))}
        </div>
      ) : (
        <p>Table is empty</p>
      )}
    </div>
  );
};

export default UserPage;
