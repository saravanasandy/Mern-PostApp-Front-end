import React, { useState } from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa';

const Login = () => {
    const [formdata, setFormdata] = useState({
     
        email: "",
        password: "",
     
      });
    
      const {  email, password,  } = formdata;
    
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
              <FaSignInAlt />
              Login
            </h1>
            <p>Login and start setting goals</p>
          </section>
          <section className="form">
            <form onSubmit={onSubmit}>
             
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
               <button type="submit" className="btn btn-block">Login </button>
              </div>
            </form>
          </section>
        </>
      );
    };

export default Login