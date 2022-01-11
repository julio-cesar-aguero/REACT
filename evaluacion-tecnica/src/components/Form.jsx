import React, { useState } from "react";
import "./form.css";
const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <ul className="lista__empleados">
         <div className="item">
             <li>Michi</li>
             <div className="buttons buttons-item">
            <button >Anterior</button>
            <button >Siguiente</button>
            </div>
         </div>
         <div className="item">
             <li>Zoe</li>
             <div className="buttons buttons-item">
            <button >Anterior</button>
            <button >Siguiente</button>
            </div>
         </div>
         <div className="item">
             <li>Max</li>
             <div className="buttons buttons-item">
            <button >Anterior</button>
            <button >Siguiente</button>
            </div>
         </div>
         
        </ul>
      </div>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" onChange={handleChange} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" onChange={handleChange} type="text" />
        </div>

        <p>{JSON.stringify(values)}</p>
      </form>
    </>
  );
};

export default Form;
