
import "./loginPage.css";
import { useState } from 'react';
import { auth } from "../firebase/Firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                if (authUser) {
                    navigate("/")
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <>
            <div className="loginPage">
                <form className="login-form" onSubmit={signIn}>
                    <h1 className="AccountHeading">Sign-In</h1>

                    <label htmlFor="" className="label">Email</label>
                    <input className="input" placeholder="Enter your Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <br />
                    <label htmlFor="">Password</label>
                    <input className="input" type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <br />
                    <button className ="loginBtn" type="submit">Login</button>

                    <p className="noAccount">Don't have an account ?</p>

                    <Link to="/signUp" >Sign Up </Link>
                </form>
            </div>
        </>
    )
}
export default LoginPage;