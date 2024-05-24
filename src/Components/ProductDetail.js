import React from 'react'
import './ProductDetailcss.css'
import { FaArrowLeft } from "react-icons/fa";
import Placehodercard from './Placehodercard';
function ProductDetail() {
    return (
        <div className='all-detail'>
            <div className="row  all-detailReal">
                <div className="col-sm-12 col-md-6 col-lg-6 all-productPic">
                    {/* <h1>Product Picture</h1> */}
                    <Placehodercard/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 all-productDetail">
                    <h1>Product Details</h1>
                    <h3>Price</h3>
                    <h3>17.00$</h3>
                    <h3>Description</h3>
                    <div class="overflow-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque unde, incidunt, doloribus ea, eveniet temporibus sapiente aperiam laborum rem beatae adipisci excepturi! Natus, maxime in! Explicabo quidem laborum labore unde.
                    </div>
                    <h3>Date Of Producta</h3>
                    <h3>Start Date: <span>13/05/2023</span></h3>
                    <h3>End   Date:  <span> 13/05/2035</span></h3>
                    <div className="row p-2">
                        <div className='col-sm-12 col-md-6 col-lg-6  '>
                        <button className='btn btn-danger'><FaArrowLeft /></button>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 '>
                        <button className='btn btn-success'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail