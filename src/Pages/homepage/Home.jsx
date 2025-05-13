
import HomeBanner from "./Home/HomeBanner/HomeBanner.jsx";
import HomeDetails from "./Home/HomeDetails/HomeDetails.jsx";

import "./home.css";

function Home() {
    return (
        <>
            <div className="homeScreen">
                <HomeBanner />
                <HomeDetails />
            </div>
        </>
    )
}
export default Home;