


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const result1 = await response.json();
    if (!response.ok) {
      setError(result1.error);
    }
    if (response.ok) {
      console.log("deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  }

  async function getData() {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();
    console.log("result..", result);
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
      setError("");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2" style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      {error && <div className="alert alert-danger"> {error} </div>}
      
      <h1 >        All Users</h1>
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.age}</p>
                <Link to={`/${ele._id}`} className="btn btn-primary mr-2">
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(ele._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
