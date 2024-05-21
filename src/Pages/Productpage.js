import React from 'react'
import Cardproduct from '../Components/Cardproduct'
import './Productpage.css'
import ProductDetail from '../Components/ProductDetail'
import { FaShoppingCart, FaUserCircle, FaRegBell, FaPhoneAlt,FaAlignJustify  } from "react-icons/fa";

function Productpage() {
    return (
        <div className='all-pro'>
            <ProductDetail />
            <div className="row bg">
                <div className="col-sm-12 col-md-2 col-lg-2 menu-product">

                    <ul className='all-menu'>
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
                    </ul>

                </div>
                <div className="col-sm-12 col-md-10 col-lg-10  all-cardp">
                    <div className="row card-bg">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2   card-p">
                            <Cardproduct />

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2   card-p">
                            <Cardproduct />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2   card-p">
                            <Cardproduct />

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2   card-p">
                            <Cardproduct />

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2   card-p">
                            <Cardproduct />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-2   card-p">
                            <Cardproduct />

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productpage