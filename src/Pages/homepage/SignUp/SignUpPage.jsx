import "./signUppage.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../firebase/Firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const navigate = useNavigate();

    const [UserName, setUserName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    // const [ errorMsg , setErrorMsg] = useState("");
    // const[ successMsg , setSuccessMsg] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                if (authUser) {
                    updateProfile(authUser.user, {
                        displayName: UserName,
                    }).then(() => {
                        navigate("/");
                    }).catch((error) => {
                        console.log("Profile update error :", error);
                    })
                }


            })
            .catch(error => alert(error.message));

        // signIn(auth)
        //     .then(() => {
        //         alert("Logged out successfully!");
        //         // window.location.href = "/loginPage";
        //         navigate("/signUp")//Homepage
        //     })
        //     .catch((error) => {
        //         console.log("Error during logout:", error);
        //     })
    }





    return (
        <>
            <div className="signUpContainer">
                <form action="" className="signUp-form" onSubmit={handleSubmit} >
                    <p className="createAccountHeading">Create Account</p>

                    <input type="text" placeholder="First and Last Name" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                    <br />

                    <input type="tel" placeholder="Mobile Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                    <br />

                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />

                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />

                    <textarea className="signuptextarea" placeholder="Enter your Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <br />

                    <button className="signUpBtn" type="submit" >Sign Up</button>
                    <div className="alreadySpanDiv">
                        <span className="alreadySpan">Already Have an Account ?</span>
                        < Link to="/login" className="signIn"> Sign In </Link>
                    </div>
                </form>
            </div>
        </>
    )
}
export default SignUp;