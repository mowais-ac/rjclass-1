import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  // const [isValid, setIsValid] = useState(false);

  // let hasValues = emailAddress && password && confirmPassword;
  // let isPasswordMatch =
  //   password && confirmPassword && password === confirmPassword;
  // let isValid = hasValues && isPasswordMatch;

  // if (!emailAddress || !password || !confirmPassword) {
  //   isValid = false;
  // } else {
  //   if (password === confirmPassword) {
  //     isValid = true;
  //   } else {
  //     isValid = false;
  //   }
  // }

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <hr /> */}
      {/* <About /> */}

      <LoginForm />

      {/* <h1>Form</h1>
      {isValid ? "Form is Valid" : "Form is not valid"}
      <form className={"form"}>
        {!hasValues ? (
          <div className={"invalid"}>All Fields are required</div>
        ) : (
          ""
        )}
        {!isPasswordMatch ? (
          <div className={"invalid"}>Invalid Password</div>
        ) : (
          ""
        )}
        <div className={"form-group"}>
          <label>Email address:</label>
          <input
            name={"emailAddress"}
            value={emailAddress}
            onChange={emailAddresschangeHandler}
          />
        </div>
        <div className={"form-group"}>
          <label>Password:</label>
          <input
            name={"password"}
            type={"password"}
            value={password}
            onChange={passwordchangeHandler}
          />
        </div>
        <div className={"form-group"}>
          <label>Confirm Password:</label>
          <input
            name={"confirm_password"}
            type={"password"}
            value={confirmPassword}
            onChange={confirmPasswordchangeHandler}
          />
        </div>
        <button disabled={!isValid} type={"button"}>
          Register
        </button>
      </form> */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
