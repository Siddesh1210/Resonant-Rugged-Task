import React, { useState } from "react";
import "../assets/css/CartPage.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice.js";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const [orderBtnText, setOrderBtnText] = useState("Confirm Order");
  const navigate = useNavigate();

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
                      <img src={item.images[0]} alt="Product" lazy="loading" />
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
              <button
                className="confirmBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {orderBtnText}
              </button>
            </div>
          </>
        ) : (
          <>
            <h6 className="text-center">Oops...Your cart seems empty</h6>
            <button style={{width:"100%",padding:"7px",backgroundColor:"black",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",letterSpacing:"1px"}} onClick={()=>navigate("/products/allwatches")}>Let's do Shopping</button>
          </>
        )}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Resonate - A New Era
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Your Order is Placed.Thankyou!!!</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
                onClick={() => {
                  setTimeout(() => {
                    dispatch(clearCart());
                    navigate("/");
                  }, 500);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
