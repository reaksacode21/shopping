import React from 'react'
import Cardproduct from '../Components/Cardproduct'
import './Productpage.css'
import ProductDetail from '../Components/ProductDetail'
import { FaShoppingCart, FaUserCircle, FaRegBell, FaPhoneAlt, FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Placeholder } from 'react-bootstrap';

function Productpage() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((res) => {
                setProduct(res.data);
                console.log(product); // Log the 'product' state
            })
            .catch((error) => {
                console.log("Error is:", error);
            });

    }, [product]); // Add 'product' to the dependency array

    return (
        <div className='all-pro'>
          
            <ProductDetail />

            <div className="row bg">
                <div className="col-sm-12 col-md-2 col-lg-2 menu-product">

                    {/* <ul className='all-menu'>
                        <li><FaUserCircle
                            style={{ width: '3rem', height: '3rem' }} /></li>
                        <li ><FaShoppingCart
                            style={{ width: '3rem', height: '3rem' }} /></li>

                        <li><FaPhoneAlt
                            style={{ width: '3rem', height: '3rem' }} /></li>
                        <li><FaRegBell
                            style={{ width: '3rem', height: '3rem' }} /></li>
                        <li><FaAlignJustify
                            style={{ width: '3rem', height: '3rem' }} /></li>
                    </ul> */}

                </div>
                <div className="col-sm-12 col-md-10 col-lg-10  all-cardp">
                    <div className="row card-bg">
                        <div className="row">
                            {product.map((product, index) => (
                                <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-2 card-p">
                                    <Cardproduct product={product} />
                                </div>
                            ))}
                        </div>


                    </div>
                </div>

            </div>
           
        </div>
    )
}

export default Productpage