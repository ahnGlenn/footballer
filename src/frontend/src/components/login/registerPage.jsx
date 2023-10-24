import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import "./Login.css";

function RegisterPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPasword, setConfirmPasword] = useState("");

  // 디스패치 호출
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
    setConfirmPasword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
//    if (Password === ConfirmPasword) {
//      let body = {
//        email: Email,
//        name: Name,
//        password: Password,
//      };
//      dispatch(registerUser(body)).then((res) => {
//        alert("가입이 정상적으로 완료되었습니다");
//        props.history.push("/login");
//      });
//    } else {
//      alert("비밀번호가 일치하지 않습니다");
//    }
  };

    return (
        <div>
          <form onSubmit={onSubmitHandler}>
            <div class="wrap">
                <div class="login">
                    <h2>Sign-in</h2>
                    <div class="login_id">
                        <label>Email</label>
                        <input type="email" value={Email} onChange={onEmailHandler} />
                    </div>
                    <div class="login_id">
                        <label>Name</label>
                        <input type="test" value={Name} onChange={onNameHandler} />
                    </div>
                    <div class="login_pw">
                        <label>Password</label>
                        <input type="password" value={Password} onChange={onPasswordHanlder} />
                    </div>
                    <div class="login_pw">
                        <label>ConfirmPasword</label>
                        <input type="password" value={ConfirmPasword} onChange={onConfirmPasswordHandler} />
                    </div>
                    <br />
                    <div class="regist">
                        <button type="submit">
                            sign-in
                        </button>
                    </div>
                </div>
            </div>
          </form>
        </div>
      );
}

export default RegisterPage