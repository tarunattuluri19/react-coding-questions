import React, { useState } from "react";
import data from "../data.json";

function CrudUsers() {
  const [users, setUsers] = useState(data.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: ""
  });
  const [editingId, setEditingId] = useState(null);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      ...formData
    };
    setUsers([...users, newUser]);
    setFormData({ username: "", firstName: "", lastName: "" });
  };

  const updateUser = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, ...formData } : user
    ));
    setEditingId(null);
    setFormData({ username: "", firstName: "", lastName: "" });
  };

  const getUserDetails = (id) => {
    const user = users.find(user => user.id === id);
    setFormData(user);
    setEditingId(id);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const searchUser = () => {
    return users.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const searchValue = searchTerm.toLowerCase();
      return fullName.includes(searchValue) || 
             user.username.toLowerCase().includes(searchValue);
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={{ margin: "20px 0" }}>
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <button onClick={editingId ? () => updateUser(editingId) : addUser}>
          {editingId ? 'Update' : 'Add'} User
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searchUser().map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>
                <button onClick={() => getUserDetails(item.id)}>Edit</button>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudUsers;
