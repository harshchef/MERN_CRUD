
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  // receiving single user data
  const getSingleData = async () => {
    const response = await fetch(`http://localhost:5000/${id}`);
    const result = await response.json();

    if (response.ok) {
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    }
  };

  // passing edited data to backend
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age };
    const response = await fetch(`http://localhost:5000/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const result = await response.json();

    if (response.ok) {
      setError("");
      navigate("/read");
    } else {
      setError(result.error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <div className="container my-5">
      <div className="card p-4 shadow">
        <h1 className="h1 text-center mb-4">Edit Data</h1>
        {error && <div className="alert alert-danger"> {error} </div>}
        <form className="row g-3" onSubmit={handleUpdate}>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-info">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
