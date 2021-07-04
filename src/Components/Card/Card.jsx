import React, { useState } from 'react'
import './Card.css'
import { useNavigate } from 'react-router'
import { useUser } from '../../Context'


export const Card = ({ data }) => {
    const { brand, costPrice, id, imgUrl, name, offer, sellingPrice, size } = data
    const { route, userDispatch, userState } = useUser()
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const navigate = useNavigate()

    function addTocart() {
        setIsAddedToCart(true)
        userDispatch({ type: "ADD-TO-CART", payload: data })
    }


    return (
        <div className="card">
            <img src={imgUrl} alt="" className="card-img" />
            <p className="card-brand">{brand}</p>
            <h3 className="card-name">{name}</h3>
            <span>Size {size}</span>
            <div>
                <span className="card-sellingprice">₹{sellingPrice}</span>
                <span className="card-costprice">₹{costPrice}</span>
                <span className="card-offer">{offer}</span>
            </div>
            <div className="card-action">
                {route === "Home" && !isAddedToCart && <button className="primary-btn" onClick={addTocart}> Add to Cart</button>}
                {route === "Home" && isAddedToCart && <button className="primary-btn" onClick={() => navigate('/cart')}> Go to cart</button>}
                {route === "Cart" && !userState.saveForLater.find(e => e.id === id) && <button className="primary-btn" onClick={() => userDispatch({ type: "SAVE-FOR-LATER", payload: { ...data, qty: userState.cart.find(ele => ele.id === id).qty } })}>Save for later</button>}
                {route === "Cart" && (!userState.saveForLater.find(e => e.id === id) ? <button className="primary-btn" onClick={() => userDispatch({ type: "REMOVE-FROM-CART", payload: id })}> Remove From Cart</button> :
                <button className="primary-btn" onClick={() => userDispatch({ type: "REMOVE-FROM-SAVE", payload: id })}> Remove From Saved</button>)}

                {route === "Cart" && <div>
                    <button onClick={() => userDispatch({ type: "DECREMENT-QUANTITY", payload: id })}>-</button>
                    <span>{userState.cart.find(ele => ele.id === id)?.qty}</span>
                    <button onClick={() => userDispatch({ type: "INCREMENT-QUANTITY", payload: id })}>+</button>
                </div>}
            </div>
        </div >
    )
}
