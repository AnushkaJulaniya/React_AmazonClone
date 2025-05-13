import { useState } from "react";
import { useAuth } from "../auth/Auth.jsx";
import { updateProfile , signOut } from "firebase/auth";
import { auth } from '../firebase/Firebase.js';
import { useNavigate } from "react-router-dom";

function Account() {

    const { user } = useAuth();
    const [newName, setNewName] = useState("");
   const navigate = useNavigate();

    const handleNameUpdate = () => {
        updateProfile(user, {
            displayName: newName
        })
            .then(() => {
                alert("Name updated!");
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error updating name:", error);
            });
    };

    const handleLogOut = () => {
        signOut(auth)
        .then(() => {
            alert("Logged out successfully!");
            // window.location.href = "/loginPage";
            navigate("/login")//Homepage
        })
        .catch((error) => {
            console.log("Error during logout:",error);
        })
        
    }
    return (
        <>
            <div className="account">
                <h2>My Account </h2>
                {user ? (
                    <>
                        <p>Name : {user.displayName || "Not set"}</p>
                        <p>Email : {user.email} </p>
                        <button onClick = {handleLogOut}>LogOut</button>
                    </>
                ) : (
                    <p>You are not logged in.</p>
                )}

                <h3>Change Display Name</h3>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter new name"
                />
                <button onClick={handleNameUpdate}>Update Name</button>


                {/* <button type="submit" onClick={handleLogOut}>LogOut</button> */}
            </div>

        </>
    )
}
export default Account;