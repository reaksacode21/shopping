import React from 'react'
import Cardproduct from '../Components/Cardproduct'
import './Productpage.css'
import ProductDetail from '../Components/ProductDetail'
// import { FaShoppingCart, FaUserCircle, FaRegBell, FaPhoneAlt, FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Placeholder } from 'react-bootstrap';
import { GET_ALL_PRODUCTS } from '../Services/Productservice';
import Placehodercard from '../Components/Placehodercard';
 import { counbooking } from '../Utils/count.js';
function Productpage() {

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        GET_ALL_PRODUCTS()
            .then(

                data => {
                    let filterProduct = data
                    setProducts(filterProduct.sort((a, b) => a.id - b.id));
                    setisLoading(false);
                }

            )
            .catch((error) => {
                console.log(error);
            });
    }, [products]);

    const Placehodercardproduct = (number) => {
        let placeholders = [];
        for (let i = 0; i < number; i++) {
            placeholders.push(
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2 card-p">
                    <Placehodercard />
                </div>
            )
        }
        return placeholders;
    }
    // const [count, setCount] = useState(0);
    // const counbooking = () => {



    //     setCount(count + 1);
    //     // console.log(setCount);
    //     return setCount;
    // }
    
        const [count, setCount] = useState(0);
      
        function handleClick() {
         setCount(count + 1);
        //   console.log(setCount);
          counbooking(count + 1);
        }
    return (
        <div className='all-pro'>

            <ProductDetail />

            <div className="row bg">
                <div className="col-sm-12 col-md-2 col-lg-2 menu-product">
                    <div className="list-menu">
                        <ul>
                            <li>CATEGORY</li>
                            <li><button className='btn btn-success mt-2'
                                // onClick={counbooking()}
                                // onClick={counbooking()}
                                onClick={handleClick}
                            >{count}</button></li>
                            <li><button className='btn btn-success mt-2'>Shirt</button></li>
                            <li><button className='btn btn-success mt-2'>Shirt</button></li>
                            <li><button className='btn btn-success mt-2'>Shirt</button></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-10  all-cardp">
                    <div className="row card-bg">
                        <div className="row">
                            {/* {products && products.length > 0 && products.map((products, index) => (
                                <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-2 card-p">
                                    <Cardproduct products={products} />
                                </div>
                            ))} */}
                            {
                                isLoading ? (
                                    <>
                                        {Placehodercardproduct(6)}
                                    </>
                                ) :
                                    <>
                                        {products && products.length > 0 && products.map((products, index) => (
                                            <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-2 card-p">
                                                <Cardproduct products={products} />
                                            </div>
                                        ))}
                                    </>
                            }
                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Productpage