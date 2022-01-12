import React from "react";
const userTable = (props) => {
  return (
    <>
    <button onClick={() => { props.setEditing(true);}}>Nuevo</button>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                className="button accent-button"
                onClick={() => {
                  props.editUser(user);
                }}
              >
              Edit
              </button>
              <button
                className="button "
                onClick={() => {
                  console.log("michi", props.users);
                  props.deleteUser(user.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};
export default userTable;
