

// import Flag_of_India from '../../../Assets/Flag_of_India.svg';
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useCart } from "../../../redux/Reducer/Reducer.jsx";
import { useAuth } from "../../../Pages/homepage/auth/Auth.jsx";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import amazonLogo  from "../../../Assets/amazonLogo.svg";
import IndianFlag from "../../../Assets/Flag_of_India.svg.webp";

import '../NavbarBelt/navbarBelt.css';



function NavbarBelt() {
    const { user } = useAuth();
    const { cart } = useCart();
    const navigate = useNavigate();


    function handleSwitchAccount(path){
      const auth = getAuth();
      signOut(auth)
      .then(() => {
        navigate(path);
      }).catch((error)=> {
        console.log("Sign-out error" ,error);
      })
    }


    const items = cart?.items ?? [];
    const itemCount = items.reduce((total, item) => total + (item.quantity || 0), 0);

    return (
        <>

            <div className="navbarBelt">
                <div className="leftNavbarBelt">
                    <Link to={'/'} className="leftNavBeltLogo">
                        <img className="amazonLogoNavbar" src={amazonLogo} alt="amazonLogo" />
                        <span className="navbar_inLogo">.in</span>
                    </Link>

                    {/* locaton div */}
                    <div className="navbarBeltLocation">
                        <div className="navbarBeltLocationImg">
                            <CiLocationOn className="navbarBeltLocationImgIcon" />
                        </div>

                        <div className="navbarBeltLocationPlace">
                            <div className="navbarBeltLocationTop">
                                Delivering to Indore 465768
                            </div>
                            <div className="navbarBeltLocationBottom">Update Location </div>
                        </div>
                    </div>
                </div>

                <div className="NavbarBeltSearchBox">
                    <div className="navbarBeltSearchDiv">
                        <div className="navbarBeltSearchBoxAll">
                            <div className="navbarBeltSearchBoxAllText">All</div>
                            <IoMdArrowDropdown className="navbarBeltSearchBoxAllTextIcon" />
                        </div>

                        <input type="text" className="navbarBeltInputSearchBox" placeholder="Search Amazon.in" />

                        <div className="searchIconNavbarBelt">
                            <IoSearch className="searchIconNavbarBeltIcon" />
                        </div>
                    </div>

                </div>


                <div className="rightNavbarBelt">
                    <div className="indiaFlagCode">
                        <img src={IndianFlag} alt="indianFlag" className="indiaFlag" />
                        <div className="indiaCodeNavbarBelt">
                            EN <IoMdArrowDropdown className="IndianFlagDopDownIcon" />
                        </div>
                    </div>


                    {/* user account */}
                    {user ? 
                    (
                        <Link to="/account" className="helloSignInNavbarBelt">
                            <div className="helloTopNavbarBelt">
                                Hello {user.displayName || user.email || 'User'}
                            </div>
                            <div className="indiaCodeNavbarBelt">
                                Accounts & Lists
                            </div>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="helloSignInNavbarBelt" onClick = {() => handleSwitchAccount("/login")}>
                                <div className="helloTopNavbarBelt">Hello, Sign In</div>
                                <div className="indiaCodeNavbarBelt">Accounts & Lists</div>
                            </Link>
                            
                            <Link to="/signUp" className="helloSignInNavbarBelt" onClick = {() => handleSwitchAccount("/signUp")}>
                                <div className="helloTopNavbarBelt">New Customer?</div>
                                <div className="indiaCodeNavbarBelt">Start here</div>
                            </Link>
                        </>
                    )
                } 
                

                    {/* return & order */}
                    <div className="orderReturnNavbarBelt">
                        <div className="helloTopNavbarBelt">
                            Returns
                        </div>
                        <div className="indiaCodeNavbarBelt">
                            & Orders
                        </div>
                    </div>

                    {/* cart  */}
                    <Link to={'/cart'} className="cartNavbarBelt">
                        <span className="CartItemNumberNavbarBelt">{itemCount}</span>
                        <div className="helloTopNavbarBelt">
                            <IoCartOutline className="cartIconNavbarBelt" />
                            <span className="CartTitle">Cart</span>
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
}
export default NavbarBelt;