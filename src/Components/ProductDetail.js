import React, { useEffect, useState } from 'react'
import './ProductDetailcss.css'
import { FaArrowLeft } from "react-icons/fa";
import Placehodercard from './Placehodercard';
import shirt from '../photo/shirt.jpg'
import { GET_PRODUCT_BY_ID } from '../Services/Productservice';
import { useParams } from 'react-router-dom';
function ProductDetail({ getId }) {
    const [product, setproduct] = useState({});
    const [chosenImage, setChosenImage] = useState("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
    let { id } = useParams();

    useEffect(() => {
        GET_PRODUCT_BY_ID(id).then(
            response => {
                // if(response.)
                if (response.images.length > 0) {
                    setChosenImage(response.images[0])
                }

                setproduct(getId);
                console.log("this is respone:", response)
            }
        ).catch(error => console.log("note"))
    }, [id])
    return (
        <div className='all-detail'>
            <div className="row  all-detailReal">
                <div className="col-sm-12 col-md-12 col-lg-6 all-productPic">
                    {/* <h1>Product Picture</h1> */}
                    <div className='container'>
                        <div className='big-pic'>
                            {/* <img src={shirt} alt="" /> */}
                            <img src={chosenImage}
                                    onError={
                                        ({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                                        }
                                    }
                                />
                            {

                                

                                // product?.images?.length > 1 &&
                                // product?.images?.map((imageValue, index) => {
                                //     return (
                                //         <img key={imageValue}

                                //             src={imageValue}
                                //             alt="this is the image "
                                //             onClick={
                                //                 () => {
                                //                     setChosenImage(imageValue)
                                //                 }
                                //             }
                                //             onError={
                                //                 ({ currentTarget }) => {
                                //                     currentTarget.onerror = null;
                                //                     currentTarget.src = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                                //                 }
                                //             }
                                //         />
                                //     )
                                // })
                            }

                            {/* style={{width:'30rem',height:'20rem'}} */}
                        </div>
                        <div className="list-pic">
                            <ul>
                                <li>11</li>
                                <li>11</li>
                                <li>11</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 all-productDetail">
                    <h1>Product Details</h1>
                    <h3>Price</h3>
                    <h3>{product.price}</h3>
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