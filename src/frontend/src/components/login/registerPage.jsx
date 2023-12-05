import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import "./Login.css";

function RegisterPage(props) {

  // variables management
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPwd, setConfirmPwdd] = useState("");

  // call dispatch :
  const dispatch = useDispatch();

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPwdd(e.currentTarget.value);
  };

//  const handleChange = (e) => {
//    const { name, value } = e.target;
//    if (name === "email") setEmail(value);
//    else if (name === "name") setName(value);
//    else if (name === "password") setPassword(value);
//    else if (name === "confirmPassword") setConfirmPassword(value);
//  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // button이 submit을 연속으로(계속)할경우 리프레시 현상 방지용.
    alert("제출"); console.log("[비밀번호 그대로 노출]\n제출합니다 \n", "email = ", Email, "\n pwd = ", Password );

    if (Password === ConfirmPwd) {
      let body = {
        email: Email,
        name: Name,
        password: Password,
      };
      dispatch(registerUser(body)).then((res) => {
        alert("가입이 정상적으로 완료되었습니다");
        props.history.push("/login");
      });
    } else {
      alert("비밀번호가 일치하지 않습니다");
    }
  };

    return (
        <div>
          <form onSubmit={onSubmitHandler}>
            <div className="wrap">
                <div className="login">
                    <h2>Sign-in</h2>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" value={Email} onChange={onEmailHandler} />
                    </div>
                    <div className="nm">
                        <label>Name</label>
                        <input type="text" value={Name} onChange={onNameHandler} />
                    </div>
                    <div className="pw">
                        <label>Password</label>
                        <input type="password" value={Password} onChange={onPasswordHanlder} />
                    </div>
                    <div className="pw_re">
                        <label>ConfirmPasword</label>
                        <input type="password" value={ConfirmPwd} onChange={onConfirmPasswordHandler} />
                    </div>
                    <br />
                    <div className="regist">
                        <button type="submit">sign-in</button>
                    </div>
                </div>
            </div>
          </form>
        </div>
      );
}

export default RegisterPage