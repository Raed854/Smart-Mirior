import React from 'react';
import './LoginForm.css';
import sidebarImage from'../Assets/login.jpg'

function LoginForm() {
    return (
      <div className="container">
        <div className="photo-section">
          <img src={sidebarImage} alt="Sidebar" />
        </div>
        <div className="form-section">
          <div className="container">
            <form action="" className="form">
              <div className="heading">Sign In</div>
              <div className="form-content">
                <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
                <input required className="input" type="password" name="password" id="password" placeholder="Password" />
                <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
                <input className="login-button" type="submit" value="Sign In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default LoginForm;