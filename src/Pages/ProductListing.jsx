import React from 'react'
import './Page.css'
import DB from '../Database/Productlisting.json'
import { Card } from '../Components'
export const ProductListing = () => {
    return (
        <div className="page">
            
            {DB.products.map(item => {
                return <Card data={item}/>
            })}
        </div>
    )
}
