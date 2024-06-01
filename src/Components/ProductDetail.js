import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { GET_PRODUCT_BY_ID } from '../Services/Productservice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ProductDetailcss.css'
function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [chosenImage, setChosenImage] = useState('https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        GET_PRODUCT_BY_ID(id)
            .then(response => {
                if (response.images.length > 0) {
                    setChosenImage(response.images[0]);
                }
                setProduct(response);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                // Add error handling logic here
            });
    }, [id]);
    const placehoderCardDetail = () => {
        return (
            <div className="placeholder-card card p-0 m-5 mt-0" aria-hidden="true" style={{ width: '500px' }}>

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
        )
    }
    return (
        <div className="all-detail">
            <div className="row all-detailReal">
                <div className="col-lg-6 all-productPic">
                    
                    <div className="container">
                    <div className='btnback' style={{backgroundColor:'green',borderRadius:'10px'}}>
                    <FaArrowLeft
                        style={{
                            width: '3rem',
                            height: '3rem',
                            color: 'red',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'blue';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'red';
                        }}
                        onClick={() => {
                            navigate(`/products`);
                        }}
                       
                    />
                    <span>YOU CAN BACK TO PRODUCT</span>
                    </div>
                        {isLoading ? (
                            <>
                                
                                {placehoderCardDetail()}
                            </>
                        ) : (
                            <>
                                <div className="big-pic">
                                    
                                    <img
                                        src={chosenImage}
                                        alt=""
                                        onError={e => {
                                            e.target.onerror = null;
                                            e.target.src = "https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png";
                                        }}
                                    />
                                </div>
                                <div className="list-pic">
                                    <ul>
                                        {product.images?.length > 1 &&
                                            product.images.map((imageValue, index) => {
                                                return (
                                                    <li key={index}>
                                                        <img
                                                            style={{ width: '6rem', height: '6rem' }}
                                                            src={imageValue}
                                                            alt="Image"
                                                            onClick={() => setChosenImage(imageValue)}
                                                            onError={(currentTarget)=>{
                                                                currentTarget.onerror=null;
                                                                currentTarget.target.src="https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png";

                                                            }}
                                                        />
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="col-lg-6 all-productDetail">
                    <h1>Product Details</h1>
                    <h1>{product.title}</h1>
                    <h3>Price: ${product.price}</h3>
                    <h3>Description:</h3>
                    <div className="overflow-auto">
                        {product.description}
                    </div>
                    <h3>Date Of Product</h3>
                    <h3>Start Date: <span>13/05/2023</span></h3>
                    <h3>End Date: <span>13/05/2035</span></h3>
                    <div className="row p-2">
                        {/* <div className="col-lg-6">
                            <button className="btn btn-danger" onClick={() => navigate('/products')}>
                                <FaArrowLeft /> Back
                            </button>
                        </div> */}
                        <div className="col-lg-3">
                            <button className="btn btn-success">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;