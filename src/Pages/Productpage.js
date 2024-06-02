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
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
function Productpage() {

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    //this make page gination
    const [totalpage, settotalpage] = useState(0);
    const [currentpage, setcurrentpage] = useState(0);
    const itemperpage = 6;
    const startIndex = currentpage * itemperpage;
    const endIndex = startIndex + itemperpage;
    let navigat=useNavigate();

    // const subset = products.slice(startIndex, endIndex);
    //=================================================
    const [selectedCategory, setSelectedCategory] = useState(null);
    //this is just select category
    const subset = selectedCategory 
    ? products.filter(product => product.price === selectedCategory).slice(startIndex, endIndex)
    : products.slice(startIndex, endIndex);

    //==================================================function section product
    const handleCategoryFilter = (price) => {
        setSelectedCategory(price);
        setcurrentpage(0); // Reset pagination when changing category
    }
    //===========================================================
    const handlePageChange = (selectpage) => {
        setcurrentpage(selectpage.selected);
        navigat(`/products`);

    }
    //end
    useEffect(() => {
        GET_ALL_PRODUCTS()
            .then(

                data => {
                    let filterProduct = data
                    setProducts(filterProduct.sort((a, b) => a.id - b.id));
                    settotalpage(
                        Math.ceil(filterProduct.length / itemperpage)
                    )
                    setisLoading(false);
                    // console.log(filterProduct)
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

            {/* <ProductDetail /> */}

            <div className="row bg">
                <div className="col-sm-12 col-md-2 col-lg-2 menu-product">
                  
                   
                    <div className="list-menu">
                   
                        <ul>


                        <h4>CATEGORY</h4>
                            <li><button className='btn btn-success mt-2'
                                // onClick={counbooking()}
                                // onClick={counbooking()}
                                onClick={handleClick}
                            >{count}</button></li>
                              <li><button className='btn btn-success mt-2' onClick={() => handleCategoryFilter(35)}>Shirt</button></li>
                            <li><button className='btn btn-success mt-2'>Shirt</button></li>
                            <li><button className='btn btn-success mt-2'>Shouse</button></li>
                            <li><button className='btn btn-success mt-2'> Materail</button></li>

                            {/* <li><button className='btn btn-success mt-2'>Shirt</button></li>
                            <li><button className='btn btn-success mt-2'>Shirt</button></li> */}
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
                                        {subset.map((products, index) => (
                                            <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-2 card-p">
                                                <Cardproduct products={products} />
                                            </div>
                                        ))}
                                    </>
                            }
                        </div>

                        <div className="d-flex justify-content-center  bg-light py-3">
                            <ReactPaginate
                                previousLabel={'Previous'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                pageCount={totalpage}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                pageClassName={'page-item'}
                                pageLinkClassName={'page-link'}
                                previousClassName={'page-item'}
                                previousLinkClassName={'page-link'}
                                nextClassName={'page-item '}
                                nextLinkClassName={'page-link'}
                                breakClassName={'page-item'}
                                breakLinkClassName={'page-link'}
                                activeClassName={'active '} />
                        </div>





                    </div>
                </div>

            </div>

        </div>
    )
}

export default Productpage