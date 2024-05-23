import React from 'react'
import Cardproduct from '../Components/Cardproduct'
import './Productpage.css'
import ProductDetail from '../Components/ProductDetail'
import { FaShoppingCart, FaUserCircle, FaRegBell, FaPhoneAlt, FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Placeholder } from 'react-bootstrap';
import { GET_ALL_PRODUCTS } from '../Services/Productservice';


function Productpage() {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     GET_ALL_PRODUCTS()
    //         .then((res) => {
    //             setProducts(res.data);
    //             console.log(res);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [products]);
    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((res) => {
                setProducts(res.data);
                console.log(products); // Log the 'product' state
            })
            .catch((error) => {
                console.log("Error is:", error);
            });

    }, [products]); // Add 'product' to the dependency array

    return (
        <div className='all-pro'>

            <ProductDetail />

            <div className="row bg">
                <div className="col-sm-12 col-md-2 col-lg-2 menu-product">
                <h1>hh</h1>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-10  all-cardp">
                    <div className="row card-bg">
                        <div className="row">
                            {products && products.length > 0 && products.map((products, index) => (
                                <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-2 card-p">
                                    <Cardproduct products={products} />
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