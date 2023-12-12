import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/login/actions';
import "./Login.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate 훅 사용

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { email, password });

            // 서버에서 "LOGIN_SUCCESS"를 받았을 때 페이지 이동
            if (response.data === 'LOGIN_SUCCESS') {
                navigate('/mainPage');
            } else {
                alert("Not exist login Information.");
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    useEffect(() => {
        // 이 부분에서 필요한 처리가 있다면 추가할 수 있습니다.
    }, []); // useEffect의 두 번째 매개변수는 빈 배열로 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 설정

    return(
        <div className="wrap">
                <div className="login">
                    <h2>[{props.login}] FootBallers</h2>
                    <div className="login_sns">
                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                        <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                    </div>
                    <div className="login_id">
                        <h4>E-mail</h4>
                        <input type="text" name="email" placeholder="Email" maxLength="30" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login_pw">
                        <h4>Password</h4>
                        <input type="password" name="password" placeholder="Password" maxLength="30" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="login_etc">
                        <div className="checkbox">
                            <input type="checkbox" name="" id="" /> Remember Me?
                        </div>
                        <div className="forgot_pw">
                            <a href="">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Login" onClick={handleLogin} />
                    </div>
                    <div className="regist">
                        <button><Link to="/RegisterPage">Sign-in</Link></button>
                    </div>
                </div>
            </div>
    )
}

export default LoginPage
