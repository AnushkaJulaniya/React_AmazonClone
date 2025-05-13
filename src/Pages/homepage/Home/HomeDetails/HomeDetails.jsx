import "./HomeDetails.css";
// import productOfferData from "../../../../options.json";
// import productExplorePopular from "../../../../options2.json";
import axios from "axios";
import { useState, useEffect } from "react";

function HomeDetails() {

    const [offers, setOffers] = useState([]);
    const [popular, setPopular] = useState([]);

 
     useEffect(()=>{
        const fetchData = async()=>{
            try{
            const offerRes = await axios.get("https://dummyjson.com/products?limit=100")
            const popularRes = await axios.get("https://dummyjson.com/products?skip=10");

            setOffers(offerRes.data.products);
            setPopular(popularRes.data.products);
         
        
        }
        catch(error){
            console.log("Error fetching products : ", error);
        }
    }
    fetchData();

     } , []);



        return (
            <>
                <div className="HomeDetails">
                    <div className="homeDetailsLongCard">
                        <div className="homeDetailsLongCardTitle">
                            Today's Deal
                        </div>
                        <div className="homeDetailLongCardItems">

                            <div className="scrollDiv">
                                {offers.length > 0 ?
                                    (offers.map((item) => {
                                        // console.log(item);

                                        return (
                                            <div className="homeDetailsLongCard_perItem" key={item.id}>
                                                <img src={item.thumbnail || item.image} alt={item.title} className="homeDetailsLongCardItemImg" />
                                                <div className="homeDetailsLongItemImgDetail">

                                                    <div className="homeDetailLongCardItemImgTopDetails">
                                                        <div className="homeDetailPercentageOff">
                                                            Up to 20% off
                                                        </div>
                                                        <div className="limitedTimeDealHomeDetail">
                                                            Limited Time Deal
                                                        </div>
                                                    </div>

                                                    <div className="bottomHomeDetail">
                                                        {item.title}
                                                        {item.price}
                                                    </div>
                                                </div>
                                            </div>
                                        );


                                    })
                                    ) : (

                                        <p>No products available</p>
                                    )}

                            </div>
                        </div>
                    </div>



                    <div className="homeDetailsLongCard">
                        <div className="homeDetailsLongCardTitle">
                            Explore Popular
                        </div>
                        <div className="homeDetailLongCardItems">

                            <div className="scrollDiv">
                                {popular.length > 0 ?
                                    (popular.map((item) => {
                                        console.log(item);

                                        return (
                                            <div className="homeDetailsLongCard_perItem" key={item.id}>
                                                <img src={item.thumbnail || item.image} alt={item.title} className="homeDetailsLongCardItemImg" />
                                                <div className="homeDetailsLongItemImgDetail">

                                                    <div className="homeDetailLongCardItemImgTopDetails">
                                                        <div className="homeDetailPercentageOff">
                                                            Up to 20% off
                                                        </div>
                                                        <div className="limitedTimeDealHomeDetail">
                                                            Limited Time Deal
                                                        </div>
                                                    </div>

                                                    <div className="bottomHomeDetail">
                                                        {item.title}
                                                        {item.price}
                                                    </div>
                                                </div>
                                            </div>
                                        );


                                    })
                                    ) : (

                                        <p>No products available</p>
                                    )}



                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
export default HomeDetails;


// x-rapidapi-key: 11ba580efbmsh539fc0977cda084p18d793jsnfddc8cf1162a'