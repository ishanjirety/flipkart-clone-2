import React, { useState, useEffect } from 'react'
import './Page.css'
import { Card } from '../Components'
import { useUser } from '../Context'

export const Cart = () => {
    const { userState, userDispatch } = useUser()
    const [checkout, setCheckOut] = useState({ quantity: 0, total: 0 })
    useEffect(() => {
        let quantity = 0
        let total = 0
        userState.cart.forEach((e) => {
            quantity += e.qty
            total += e.qty * eval(e.sellingPrice)
        })
        setCheckOut({ total: total, quantity: quantity })
        
    }, [userState.cart])

    return (
        <div className="page">
            <div className="card-wrapper">
                {userState.cart.map(products => {
                    return <Card data={products} />
                })}

                {userState.saveForLater.length > 0 && <div>
                    <h1>Saved for later</h1>
                    {userState.saveForLater.map(products => {
                        return <Card data={products} />
                    })}
                </div>}
            </div>
            {userState.cart.length > 0 && <div className="checkout">
                <h1>Total</h1>
                <div>
                    <h4>Quantity</h4>{checkout.quantity}
                    <h4>Total Amount</h4>{checkout.total}
                </div>
                <button className="primary-btn">Checkout</button>
            </div>}

        </div>


    )
}
