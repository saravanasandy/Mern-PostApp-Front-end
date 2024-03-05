import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
const Register = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formdata;

  const onChange = (e) => {
    setFormdata((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  };
  const onSubmit = (e) => {
    e.preventDefault()

  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an Account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter Your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter Your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter  password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
           <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
