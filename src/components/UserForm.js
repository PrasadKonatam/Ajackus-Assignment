import React from "react";

const UserForm = ({ formData, setFormData, handleSubmit, editing }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-2 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="ID"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            disabled={editing}
          />
        </div>
        <div className="col-md-2 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={formData.firstname}
            onChange={(e) =>
              setFormData({ ...formData, firstname: e.target.value })
            }
            required
          />
        </div>
        <div className="col-md-2 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            }
            required
          />
        </div>
        <div className="col-md-3 mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="col-md-2 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Department"
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
            required
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary btn-block">
            {editing ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
