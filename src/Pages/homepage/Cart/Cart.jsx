import "./cart.css";
import { useCart } from "../../../redux/Reducer/Reducer.jsx";
import { removeFromCart } from "../../../redux/actions/Actions.jsx";

function Cart() {
 const { cart, dispatch } = useCart(); 
 const items = cart?.items ?? [];
  console.log(items);
//    const handleUpdateQty = (itemId , quantity) => {
//     dispatch(updateCartQty(itemId, quantity));
//    }
     const handleRemove = (id)=>{
        dispatch(removeFromCart(id));
     }

    //  const handleClearCart = () => {
    //   dispatch(clearCart());
    //  }

    const calculateTotal= () => {
        return items.reduce((total,item) => total + item.price * item.quantity, 0);
    }
    return (
        <>
            <div className="cart">
                <div className="topLeftCart">
                    <h1 className="topLeftCartTitle">Shopping Cart</h1>
                    <p className="deSelectAllCart">Deselect all items</p>
                    <p className="cartPriceTexDivier">Price</p>

                    <div className="cartItemsDiv">
                      
                        {items.length > 0 ?
                         (items.map((item) => {
                            return(
                            <div className="cartItemBlock" key={item.id}>
                                <div className="cartItemLeftBlock">
                                    <div className="cartItemLeftBlockImage">
                                        <img className="cartItemLeftBlockImg" src={item.imageUrl} alt={item.name}/>
                                    </div>
                                    <div className="cartItemLeftBlockDetails">
                                        <div className="cartItemProductName">
                                            {item.name}
                                        </div>
                                        <p className="inStock">In stock</p>
                                        <div className="elgFreeShip">Eligible for FREE Shipping</div>
                                        <div className="amazonFullFilledImg">
                                            <img className="amazFullFillImg" src="src/Assets/amazon_fullfill.jpg" alt="" />
                                        </div>
                                        <div className="removeFromBasket" onClick = {() => handleRemove(item.id)}> Remove from Basket</div>
                                    </div>
                                </div>
                                <div className="cartItemRightBlock">
                                    Rs {item.price * item.quantity}
                                </div>
                            </div>
                         )
                        })) : (
                            <p>your cart is empty</p>
                        )}


                    </div>
                </div>

                <div className="topRightCart">
                    <div className="subTotalTitle">
                        SubTotal ({items.length} items) : {" " } 
                        <span className="subTotalTitleSpan">Rs {calculateTotal()}</span></div>
                    <div className="giftAddTo">
                        <input type="checkbox" />
                        <label className="">This order contains a gift </label>
                    </div>
                    <button className="proceedToBuy">Proceed To Buy</button>
                </div>

            </div>
        </>
    )

}
export default Cart;