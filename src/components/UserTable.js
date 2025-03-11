import React from "react";

const UserTable = ({ users, handleEdit, handleDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name || "N/A"}</td>
              <td>{user.username || "N/A"}</td>
              <td>{user.email || "N/A"}</td>
              <td>{user.department || "N/A"}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
