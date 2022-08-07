import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");
  const [loginStatus, setLoginStatus] =
    useState(null); /* processing, success, error */

  const emailAddresschangeHandler = (e) => {
    setEmailAddress(e.target.value);
  };

  const passwordchangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordchangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const signupHandler = () => {
    setLoginStatus("processing");
    const data = {
      email: emailAddress,
      password: password,
    };
    console.log("request data:", data);
    axios
      .post("https://reqres.in/api/register", data)
      .then((res) => {
        console.log("restister res: ", res.data);
        setToken(res.data.token);
        setLoginStatus("success");
      })
      .catch((err) => {
        console.log("err: ", err);
        setLoginStatus("error");
      });
  };

  const showPasswordHandler = () => {
    setShowPassword(showPassword ? false : true);
  };

  let hasValues = emailAddress && password && confirmPassword;
  let isPasswordMatch =
    password && confirmPassword && password === confirmPassword;
  let isValid = hasValues && isPasswordMatch;
  return (
    <div id={"LoginForm"}>
      {loginStatus === "success" ? (
        <div>
          <h3>Login Successful</h3>

          {token}
        </div>
      ) : (
        <>
          <h1>Login aaasd Here</h1>
          {loginStatus === "error" ? <div>Something went wrong</div> : ""}
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
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={passwordchangeHandler}
              />
              {/* <button onClick={() => showPasswordHandler()} type={"button"}>
            {showPassword ? "Hide" : "Show"} Password
          </button> */}
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
            {loginStatus === "processing" ? (
              <div>Processing</div>
            ) : (
              <button
                disabled={!isValid}
                type={"button"}
                onClick={() => signupHandler()}
              >
                Register
              </button>
            )}
          </form>{" "}
        </>
      )}
    </div>
  );
}

export default LoginForm;
