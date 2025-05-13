import "./Products.css";
import { IoIosStarOutline } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import ProductDetail from "./products.json";
import { useCart } from "../../../redux/Reducer/Reducer.jsx";
import { addToCart } from "../../../redux/actions/Actions.jsx";
import { useState  } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const { categoryName } = useParams(); 
    const [selectedCategory, setSelectedCategory] = useState(categoryName || "All");
    const { cart, dispatch } = useCart();


    const filteredProducts = selectedCategory === 'All'
        ? ProductDetail.product :
         ProductDetail.product.filter(product => product.category === selectedCategory)


    const handleAddCart = (item) => {
        console.log(item);
        dispatch(addToCart(item));
    }
        console.log("Filtered Products:", filteredProducts);

    return (
        <>
            <div className="productPage">
                <div className="productTopBanner">

                {/* <div className="productTopBannerItemsSubMenu" >Mobiles & Accessories</div>
                <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
                <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
                <div className="productTopBannerItemsSubMenu">Audio</div>
                <div className="productTopBannerItemsSubMenu">Cameras</div>
                <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
                <div className="productTopBannerItemsSubMenu">Smart Technology</div>
                <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
                <div className="productTopBannerItemsSubMenu">Office & Stationary</div>
 */}




            </div>
            <div className="productsPageMain">
                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        <p className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</p>
                        <p className="productsPageMainLeftCategoryContentSub">Macbooks</p>
                        <p className="productsPageMainLeftCategoryContentSub">Amazon Prime</p>
                        <p className="productsPageMainLeftCategoryContentSub">Average Customer Review</p>

                        <div className="ratingLeftBox">
                            <IoStar className="filledStar" />
                            <IoStar className="filledStar" />
                            <IoStar className="filledStar" />
                            <IoStar className="filledStar" />
                            <IoIosStarOutline className="blankStar" />
                            <span className="andUp">& Up</span>
                        </div>

                        <div className="ratingLeftBox">
                            <IoStar className="filledStar" />
                            <IoStar className="filledStar" />
                            <IoStar className="filledStar" />
                            <IoIosStarOutline className="blankStar" />
                            <IoIosStarOutline className="blankStar" />
                            <span className="andUp">& Up</span>
                        </div>

                        <div className="ratingLeftBox">
                            <IoStar className="filledStar" />
                            <IoStar className="filledStar" />
                            <IoIosStarOutline className="blankStar" />
                            <IoIosStarOutline className="blankStar" />
                            <IoIosStarOutline className="blankStar" />
                            <span className="andUp">& Up</span>
                        </div>


                        <div className="ratingLeftBox">
                            <IoStar className="filledStar" />
                            <IoIosStarOutline className="blankStar" />
                            <IoIosStarOutline className="blankStar" />
                            <IoIosStarOutline className="blankStar" />
                            <IoIosStarOutline className="blankStar" />
                            <span className="andUp">& Up</span>
                        </div>

                        <p className="productsPageMainLeftCategoryContentSub">Macbooks</p>
                        <p className="productsPageMainLeftCategoryContentSub">Amazon Prime</p>

                        <p className="productsPageMainLeftCategoryContentSub">Average Customer Review</p>
                        <p className="productsPageMainLeftCategoryContentSub">Macbooks</p>

                        <p className="productsPageMainLeftCategoryContentSub">Amazon Prime</p>
                        <p className="productsPageMainLeftCategoryContentSub">Average Customer Review</p>

                        <p className="productsPageMainLeftCategoryContentSub">Macbooks</p>
                        <p className="productsPageMainLeftCategoryContentSub">Amazon Prime</p>

                        <p className="productsPageMainLeftCategoryContentSub">Average Customer Review</p>
                        <p className="productsPageMainLeftCategoryContentSub">Macbooks</p>

                        <p className="productsPageMainLeftCategoryContentSub">Amazon Prime</p>
                        <p className="productsPageMainLeftCategoryContentSub">Average Customer Review</p>
                    </div>
                </div>


                <div className="productsPageMainRight">
                    <div className="productsPageMainRightTopBanner">

                        {

                            filteredProducts.length > 0 ?
                                (
                                    <>
                                        1-{filteredProducts.length} of {filteredProducts.length} results for <span className="productsPageMainRightTopBannerSpan">{selectedCategory}</span>
                                    </>
                                )
                                : (filteredProducts.length)
                        }

                    </div>
                    <div className="ItemsImageProductPage">

                        {filteredProducts.length > 0 ?
                            (filteredProducts.map((item) => {
                                return (
                                    <div className="ItemsImageProductPageOne" key={item.id}>
                                        <div className="imgBlockItemsImageProductPageOne">
                                            <img src={item.image} alt={item.name} className="productImageProduct" />
                                        </div>
                                        <div className="productNameProduct">
                                            <div>{item.name}</div>
                                            <div className="productNameProductRating">
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                < IoIosStarOutline />
                                            </div>
                                            <div className="priceProductDetailPage">
                                                <div className="currencyText"> <MdCurrencyRupee /> </div>
                                                <div className="rateHomeDetail">
                                                    <div className="rateHomeDetailsPrice"> ${item.price} </div>
                                                    <button className="addToBasketBtn" onClick={() => handleAddCart(item)}> Add To Cart </button>
                                                </div>
                                            </div>
                                            <div className="offProductPage"> Upto 10% off on select cards </div>
                                            <div className="freeDeliveryHomePage">  Free Delivery By Amazon </div>
                                        </div>
                                    </div>
                                )
                            })) : (
                                <p>Not Available</p>
                            )
                        }

                    </div>
                </div>
            </div>
        </div >
        </>
    )
}
export default Products;
