import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    department: "",
  });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Number of users displayed per page

  // Fetch users
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.org/users")
      .then((response) => setUsers(response.data))
      .catch(() => setError("Failed to fetch users."));
  }, []);

  // Add/Edit user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      axios
        .put(`https://jsonplaceholder.org/users/${formData.id}`, formData)
        .then(() => {
          setUsers(
            users.map((user) => (user.id === formData.id ? formData : user))
          );
          setEditing(false);
          setFormData({
            id: "",
            firstname: "",
            lastname: "",
            email: "",
            department: "",
          });
        })
        .catch(() => setError("Failed to update user."));
    } else {
      axios
        .post("https://jsonplaceholder.typicode.com/users", formData)
        .then((response) => {
          setUsers([...users, response.data]);
          setFormData({
            id: "",
            firstname: "",
            lastname: "",
            email: "",
            department: "",
          });
        })
        .catch(() => setError("Failed to add user."));
    }
  };

  // Delete user
  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.org/users/${id}`)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch(() => setError("Failed to delete user."));
  };

  // Edit user
  const handleEdit = (user) => {
    setEditing(true);
    setFormData(user);
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container mt-5 p-3 shadow rounded bg-light">
      <h1 className="text-center text-primary m-5">User Management</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <UserForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        editing={editing}
      />
      <UserTable
        users={currentUsers} // Ensure this uses the paginated users
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} // Pass this to handle page changes
      />
    </div>
  );
};

export default App;
