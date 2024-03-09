import React, { useState } from "react";
import "../assets/css/CartPage.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem,clearCart } from "../utils/cartSlice.js";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const [orderBtnText,setOrderBtnText]=useState("Confirm Order");
  const navigate=useNavigate();
  function handleConfirmOrder()
  {
    setOrderBtnText("Order Confirmed");
    setTimeout(()=>{
        dispatch(clearCart());
        setOrderBtnText("Confirm Order");
       navigate("/")
    },1000)
  }
  const itemCounts = {};
  cartItems.forEach((item) => {
    const key = item.productId; // Unique identifier
    itemCounts[key] = (itemCounts[key] || 0) + 1;
  });

  function handleAddItem(product) {
    dispatch(addItem(product));
  }

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  return (
    <div className="cartParent">
      <div className="wrapper">
        <div className="group">
          <table>
            <tbody>
              {Object.keys(itemCounts).map((key) => {
                const item = cartItems.find(
                  (cartItem) => cartItem.productId === parseInt(key)
                );
                return (
                  <tr key={key}>
                    <td className="item-img">
                      <img src={item.images[0]} alt="Product" />
                    </td>
                    <td className="item-details">
                      <span className="item-title">{item.productName}</span>
                      <span className="item-qty">
                        Quantity :
                        <button className="alter-btn">
                          <i
                            className="bi bi-dash"
                            onClick={() => handleRemoveItem(item)}
                          ></i>
                        </button>{" "}
                        {itemCounts[key]}{" "}
                        <button className="alter-btn">
                          <i
                            className="bi bi-plus"
                            onClick={() => handleAddItem(item)}
                          ></i>
                        </button>
                      </span>
                    </td>
                    <td className="item-price">
                      ₹{Number(item.salePrice) * Number(itemCounts[key])}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="divider"></div>
        {cartItems.length > 0 ? (
          <>
            <table>
              <tbody>
                <tr>
                  <td className="item-qty">Subtotal</td>
                  <td className="item-price">₹{totalPrice}.00</td>
                </tr>
                <tr>
                  <td className="item-qty">Shipping</td>
                  <td className="item-price">
                    {totalPrice < 500 ? "₹100.00" : "00.00"}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "17px" }} className="item-qty">
                    Total
                  </td>
                  <td style={{ fontSize: "17px" }} className="item-price">
                    ₹{totalPrice < 500 ? totalPrice + 100 : totalPrice}.00
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="group">
              <button className="confirmBtn" onClick={handleConfirmOrder}>{orderBtnText}</button>
            </div>
          </>
        ) : (
          <h6>Oops...Your cart seems empty</h6>
        )}
      </div>
    </div>
  );
};

export default CartPage;
