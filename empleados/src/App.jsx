import React, { useState } from "react";
import "./App.css";
import UserTable from "./components/userTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const usersData = [
    { id: uuidv4(), name: "julio", username: "usr-julio" },

    { id: uuidv4(), name: "pablo", username: "usr-pablo" },

    { id: uuidv4(), name: "diana", username: "usr-diana" },
    { id: uuidv4(), name: "anahi", username: "usr-anahi" },
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
  const [editing, setEditing] = useState(false);

  const[currentUser, setCurrentUser] = useState({
    id: null, name:'',username:''
  });
  const editUser = (user) =>{
    console.log("editar",user)
    setEditing(true);
		setCurrentUser(user);
  }
  const updateUser = (id, updateUser) =>{
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }
 
  return (
    <>
      <div className="container">
        <h1>Empleados :)</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <div className="formGen">
                <h2>Editar Usuario</h2>
                <EditUserForm
                
                currentUser={currentUser}
                updateUser={updateUser}
                />
              </div>
            ) : (
              <div className="formGen">
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
              editUser={editUser}
              
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
