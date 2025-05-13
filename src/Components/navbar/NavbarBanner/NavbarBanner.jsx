import '../NavbarBanner/navbarBanner.css';
// import { IoMdArrowDropdown } from "react-icons/io";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


function NavbarBanner() {

    const options = [
        { name:"New Technology" },
        { name:"Amazon miniT" },
        { name:"Sell" },
        { name:"Best Sellers" },
        { name:"Today's Deals" },
        { name:"Mobiles" },
        { name:"Electronics" },
        { name:"Prime" },
        { name:"Customer Service" },
        { name:"Fashion" },
        { name:"Home & Kitchen"}


    ]


    return (
        <>

            <div className="navbarBanner">
                <div className="NavbarBannerOptionLeft">
                    <div className="optionsNavbarBanner">
                        <GiHamburgerMenu className="optionsNavbarBannerIcon" />
                        <div className="allOptionsNavbarBanner">All</div>
                    </div>

                    { options.map((item, index) => {
                        return (
                            <Link to={`/products/${item.name}`} className="optionsNavbarBanner" key={index} >
                            <div className="allOptionsNavbarBanner" >{item.name}</div>
                             </Link>
                        )
                       })
                    }

                </div>

                <div className="navbarBannerRightSide">
                    <img className="ImgNavbarBanner" src="https://f.media-amazon.com/images/G/31/img19/SiddMiniTV/26MayHero/SWM_400x391._CB557661637_.jpg" alt="amazonPrimeLogo" />
                </div>
            </div>

        </>
    )
}
export default NavbarBanner;