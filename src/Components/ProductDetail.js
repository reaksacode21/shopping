import React from 'react'
import './ProductDetailcss.css'
function ProductDetail() {
    return (
        <div className='all-detail'>
            <div className="row  all-detailReal">
                <div className="col-sm-12 col-md-6 col-lg-6 all-productPic">
                <h1>Product Picture</h1>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 all-productDetail">
                <h1>Product Details</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail