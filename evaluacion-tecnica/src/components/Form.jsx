import React, { useState } from "react";
import "./form.css";
const Form = () => {
  const [values, setValues] = useState({
    name: "Julio",
    email: "julio",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" onChange={handleChange} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" onChange={handleChange} type="text" />
        </div>
        <p>{values.name}</p>
      </form>
    </>
  );
};

export default Form;
