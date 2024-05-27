import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../Table/Table";

const UserPage = () => {
  const [table, setTable] = useState([]);
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { handleSubmit, register, reset } = useForm();
  function submit(values) {
    if (
      input.name.trim() === "" ||
      input.username.trim() === "" ||
      input.email.trim() === "" ||
      input.phone.trim() === ""
    ) {
      alert("Введите все поля ");
    } else {
      setTable([...table, values]);
      reset(
        setInput({
          name: "",
          username: "",
          phone: "",
          email: "",
          website: "",
        })
      );
      console.log(table);
    }
  }

  const deleteUser = (id) => {
    setTable((prev) => prev.filter((_, i) => i !== id));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setInput({
      ...input,
      [name]: event.target.value,
    });
  };

  const cleanTable = () => {
    setTable([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} onChange={handleChange}>
        <input
          type="text"
          value={input.name}
          {...register("name", { required: true })}
          placeholder="name"
        />
        <input
          type="text"
          value={input.username}
          {...register("username", { required: true })}
          placeholder="username"
        />
        <input
          type="text"
          value={input.email}
          {...register("email", { required: true })}
          placeholder="email"
        />
        <input
          type="text"
          value={input.phone}
          {...register("phone", { required: true })}
          placeholder="phone"
        />
        <input
          type="text"
          value={input.website}
          {...register("website")}
          placeholder="website"
        />
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
            // <div className="row " key={id}>
            //   <div className="cell column">{value.name}</div>
            //   <div className="cell column">{value.username}</div>
            //   <div className="cell column">{value.email}</div>
            //   <div className="cell column">{value.phone}</div>
            //   <div className="cell column">{value.website}</div>
            //   <button className="cell column" onClick={() => deleteUser(id)}>
            //     DELETE
            //   </button>
            // </div>
          ))}
        </div>
      ) : (
        <p>Table is empty</p>
      )}
    </div>
  );
};

export default UserPage;
