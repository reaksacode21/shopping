import React, { useEffect, useState } from 'react'
import './ProductDetailcss.css'
import { FaArrowLeft } from "react-icons/fa";
<<<<<<< HEAD


import { GET_PRODUCT_BY_ID } from '../Services/Productservice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ProductDetail() {
    let navigate = useNavigate();
=======
import Placehodercard from './Placehodercard';
import shirt from '../photo/shirt.jpg'
import { GET_PRODUCT_BY_ID } from '../Services/Productservice';
import { useParams } from 'react-router-dom';
function ProductDetail({ getId }) {
>>>>>>> 7b5910999a77278dec1c678f346187119e7afc25
    const [product, setproduct] = useState({});
    const [chosenImage, setChosenImage] = useState("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
    let { id } = useParams();
    const [isLoading, setisloading] = useState(true);

    useEffect(() => {
<<<<<<< HEAD
        GET_PRODUCT_BY_ID(id)
            .then(response => {
=======
        GET_PRODUCT_BY_ID(id).then(
            response => {
                // if(response.)
>>>>>>> 7b5910999a77278dec1c678f346187119e7afc25
                if (response.images.length > 0) {
                    setChosenImage(response.images[0]);
                }
                setproduct(response);
                setisloading(false);
            })
            .catch(error => console.log(error));
    }, [id]);

<<<<<<< HEAD
=======
                setproduct(getId);
                console.log("this is respone:", response)
            }
        ).catch(error => console.log("note"))
    }, [id])
>>>>>>> 7b5910999a77278dec1c678f346187119e7afc25
    return (
        <div className='all-detail'>



            <div className="row  all-detailReal">
                <div className="col-sm-12 col-md-12 col-lg-6 all-productPic">
                    {/* <h1>Product Picture</h1> */}
                    <div className='container'>
<<<<<<< HEAD
                        {
                            isLoading ? (
                                <>
                                    <div className="placeholder-card card p-0 m-5" aria-hidden="true" style={{ width: '500px' }}>
                                        <div className="p-absolute image-pard" style={{ width: '500px' }}>
                                            <img
                                                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                                                className="card-img-top img-fluid"
                                                alt="default image placeholder "
                                            />


                                        </div>

                                        <div className="card-body">

                                            <p className="card-text placeholder-glow">
                                                <span className="placeholder col-7"></span>
                                                <span className="placeholder col-4"></span>
                                                <span className="placeholder col-7"></span>
                                                <span className="placeholder col-4"></span>

                                            </p>
                                        </div>
                                    </div>
                                </>

                            ) :
                                <>
                                  <FaArrowLeft
                                  style={{
                                    width: '3rem',
                                    height: '3rem',
                                    color: 'red',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'green';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'red';
                                }}
                                onClick={() => {
                                    navigate(`/products`);
                                }}
                                 />
                                    <div className='big-pic'>
                                      
                                        <img src={chosenImage} alt=""
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.scr = "https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png"


                                            }}
                                        />
=======
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
>>>>>>> 7b5910999a77278dec1c678f346187119e7afc25



                                        {/* style={{width:'30rem',height:'20rem'}} */}
                                    </div>
                                    <div className="list-pic">
                                        <ul>
                                            {

                                                product?.images?.length > 1 &&
                                                product?.images?.map((imageValue, index) => {
                                                    return (
                                                        <li>
                                                            <img key={imageValue}
                                                                style={{ width: '6rem', height: '6rem' }}
                                                                src={imageValue}
                                                                alt="this is the image "
                                                                onClick={
                                                                    () => {
                                                                        setChosenImage(imageValue)
                                                                    }
                                                                }
                                                                onError={
                                                                    ({ currentTarget }) => {
                                                                        currentTarget.onerror = null;
                                                                        currentTarget.src = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                                                                    }
                                                                }

                                                            />
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                    </div>
                                </>
                        }




                    </div>
                </div>
               
                <div className="col-sm-12 col-md-12 col-lg-6 all-productDetail">
                {
                    isLoading ? (
                        <div className="card-body">

                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                {/* <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span>
                                <span className="placeholder col-7 mt-3"></span>
                                <span className="placeholder col-4 mt-3"></span> */}




                            </p>
                        </div>
                    ):
                    <>
                     <h1>Product Details</h1>
                    <h1>{product.title}</h1>
                    <h3>Price</h3>
<<<<<<< HEAD
                    <h3>${product.id}</h3>
=======
                    <h3>{product.price}</h3>
>>>>>>> 7b5910999a77278dec1c678f346187119e7afc25
                    <h3>Description</h3>
                    <div class="overflow-auto">

                        {product.description}
                    </div>
                    <h3>Date Of Producta</h3>
                    <h3>Start Date: <span>13/05/2023</span></h3>
                    <h3>End   Date:  <span> 13/05/2035</span></h3>
                    <div className="row p-2">
                        {/* <div className='col-sm-12 col-md-6 col-lg-6  '>
                            <button className='btn btn-danger'><FaArrowLeft /></button>
                        </div> */}
                        <div className='col-sm-12 col-md-6 col-lg-4 '>
                            <button className='btn btn-success'>Buy</button>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 '>
                            {/* <button className='btn btn-success'>Buy</button> */}
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 '>
                            {/* <button className='btn btn-success'>Buy</button> */}
                        </div>
                    </div>
                    </>
                }
                </div>
            </div>

        </div >
    )
}

export default ProductDetail