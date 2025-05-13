
import "../HomeBanner/HomeBanner.css";
import homeBannerItemProduct from "../../../../HomeProduct.json";
import bannerImg1 from "./src/Assets/bannerImg1.jpg";
function HomeBanner() {
    return (
        <>
            <div className="homeBanner">
                <img src={bannerImg1} alt="" className="homeBannerImg" />
                <div className="grayBackgroundHomeBanner"></div>
                <div className="homeBannerItemDiv">
                    {
                        homeBannerItemProduct.product.map((item, ind) => {
                            return (
                                <div className="homeBannerItemDivCard" key={ind}>
                                    <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                    <div className="imgHomeBannerItemDivCard">
                                        {
                                            item.imgs.map((itemImg, index) => {
                                                // console.log(item.imgs)
                                                return (
                                                    <div className="imgBannerHomeDiv" key={index}>
                                                        <img src={itemImg.src} alt="cushion" className="imgBannerHomeDivImg" />
                                                        <div className="imgBannerImgName">{itemImg.name}</div>
                                                    </div>
                                                )
                                            })
                                        }


                                    </div>

                                    <div className="seeMoreHomeBanner">See More</div>

                                </div>
                            )
                        })
                    }



                </div>
            </div>

        </>
    )
}
export default HomeBanner;