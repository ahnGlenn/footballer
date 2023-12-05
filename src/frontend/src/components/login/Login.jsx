import React from 'react';
import "./Login.css";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
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
                        <input type="email" name="" id="" placeholder="email" maxlength="30"/>
                    </div>
                    <div className="login_pw">
                        <h4>Password</h4>
                        <input type="password" name="" id="" placeholder="Password" maxlength="30"/>
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
                        <input type="submit" value="Login" />
                    </div>
                    <div className="regist">
                        <button><Link to="/RegisterPage">Sign-in</Link></button>
                    </div>
                </div>
            </div>
    )
}

// to connect with redux
const mapStateToProps = (state) =>{
    return{
        login: state.status
    }
}

export default connect(mapStateToProps)(LoginPage)
