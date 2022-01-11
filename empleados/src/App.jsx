import React, { useState } from "react";
import "./App.css";
import UserTable from "./components/userTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const usersData = [
    { id: uuidv4(), name: "gerum", username: "Michi" },

    { id: uuidv4(), name: "toro", username: "Max" },

    { id: uuidv4(), name: "zoe", username: "gǘera" },
    { id: uuidv4(), name: "zoa", username: "gǘera" },
  ];

  //Estado inicial del objeto usersData
  const [users, setUsers] = useState(usersData);

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //Eliminar Usuarios
  const deleteUser = (id) => {
    console.log("toro", id);
    setUsers(users.filter((user) => user.id !== id));
  };

  //Editar Usuarios
  const [editing, setEditing] = useState(true);

  const[currentUser, setCurrentUser] = useState({
    id: null, name:'',username:''
  });
  
 
  return (
    <>
      <div className="container">
        <h1>Empleados :)</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <div>
                <h2>Editar Usuario</h2>
                <EditUserForm />
              </div>
            ) : (
              <div>
                <h2>Agregar Usuario</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="flex-large">
            <h2>Ver Usuario</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              setEditing={setEditing}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
