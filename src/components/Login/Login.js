import React from "react";
import classes from "./Login.module.css";
import google from "../assets/google.png";
import facebook from "../assets/face.png";
export default function Login() {
  return (
    <div className={classes.login_component}>
      <div className={classes.login_container}>
        <div className={classes.login_buttons}>
          <h1>KB</h1>
          <button
            className={`${classes.login_facebook} , ${classes.login_media}`}
          >
            <img className={classes.icon} src={facebook} alt="google"></img>
            Continue with facebook
          </button>
          <button className={`${classes.login_gog} , ${classes.login_media}`}>
            <img className={classes.icon} src={google} alt="google"></img>
            Continue with google
          </button>
          <div>
            <span className={classes.account_or}>
              <p>—————————— OR ——————————</p>
            </span>
            <h3 className={classes.didn_signup}>Don't Have an Account?</h3>
            <h3 className={classes.signup_here}>Signup Here</h3>
          </div>
          <form className={classes.input}>
            <div>
              <input
                className={classes.login_inputs}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className={classes.login_inputs}
                type="password"
                id="pwd"
                name="pwd"
                placeholder="Password"
              ></input>
            </div>
            <a className={classes.login_login} href="#">
              Forgot Password?
            </a>
            <button className={`${classes.login_web} ${classes.login_media}`}>
              LOGIN
            </button>
          </form>
          <div className={classes.privacy_policy}>
            <p>
              By continuing,you agree to accept our
              <a href="#">Privacy Policy</a>&<a href="#">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
