import React from 'react';
import "./Login.css";
import { connect } from 'react-redux'

const LoginPage = (props) => {
    return(
        <div class="wrap">
                <div class="login">
                    <h2>[{props.login}] FootBallers</h2>
                    <div class="login_sns">
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    </div>
                    <div class="login_id">
                        <h4>E-mail</h4>
                        <input type="email" name="" id="" placeholder="email" />
                    </div>
                    <div class="login_pw">
                        <h4>Password</h4>
                        <input type="password" name="" id="" placeholder="Password" />
                    </div>
                    <div class="login_etc">
                        <div class="checkbox">
                        <input type="checkbox" name="" id="" /> Remember Me?
                        </div>
                        <div class="forgot_pw">
                        <a href="">Forgot Password?</a>
                    </div>
                    </div>
                    <div class="submit">
                        <input type="submit" value="Login" />
                    </div>
                    <div class="">
                        <input type="submit" value="register now" />
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
