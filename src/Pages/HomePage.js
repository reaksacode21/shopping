import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import CardHome from '../Components/CardHome'\
// import Slider from '../Components/Slider'
// import Detail from '../Components/Detail'
import  weblogo  from '../photo/weblogo.png'
import logoservice from '../photo/logoservice.png'
import Onlineshop from '../photo/onlineshop.png'
import homegirl from '../photo/homegirl.png'
import Olineshopping from '../photo/onlineshopping.png'
import '../styles/Homepagecss.css'

function HomePage() {
  return (
    <div className="container">
      <div className="d-flex header-section flex-column flex-md-row  mt-4 ">
        <div className="container pt-4   order-2 order-md-1">
          <h1 className="display-2 header-title">
            {" "}
            Wellcome to BlueShop
          </h1>
          <p> We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.</p>
          <div className="d-flex pt-5">
            <button className="btn btn-success px-4 py-2">
              {" "}
              <strong> Shopping</strong>{" "}
            </button>
            <button className="ps-4 nav-link">
              <span>
                <strong className="pre-scrollable">
                  Learn More {"  "}
                </strong>
              </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="order-md-2">
          <img
            className="img-fluid "
            src="https://img.freepik.com/free-photo/full-portrait-happy-woman-with-color-shopping-bags-boxes-standing-isolated-white-background_186202-4870.jpg?t=st=1716388548~exp=1716392148~hmac=5cbd997f257435933bc254f8d54c474fe8adf8fdb6c84573b003e67517af711c&w=826"
            alt="image logo "
          />
        </div>
      </div>

      <div className="container text-center mt-5 pt-5 mb-100">
        <h1 className="feature-title">
          {" "}

          <span className="feature-title text-success pre-scrollable">
            OPTION CUSTOMER
          </span>
        </h1>
        <div className="d-flex flex-column container flex-wrap flex-md-row justify-content-center gap-5 mt-5 ">
          <div className="item-card px-4 pb-3  col-sm-12 col-md-4 col-lg-3">
            <img
              className="img-fluid p-4"
              src="https://cdn-icons-png.freepik.com/512/9674/9674659.png"
              alt=" plant image "
            />
            <h2> Online</h2>
            <p> Inoculate means to protect against disease, error, or harm. In the context of financial planning, inoculation means to protect against the risk of loss.</p>
            <button  className='btn btn-success'>Read more...</button>
          </div>
          <div className="item-card px-4 pb-3 col-sm-12 col-md-4 col-lg-3">
            <img
              className="img-fluid"
              src={weblogo}
              alt="Social Media"
            />
            <h2> Mdedia</h2>
            <p> Inoculate means to protect against disease, error, or harm. In the context of financial planning, inoculation means to protect against the risk of loss.</p>
            <button  className='btn btn-success'>Read more...</button>
          </div>
          <div className="item-card px-4 pb-3 col-sm-12 col-md-4 col-lg-3">
            <img
              className="img-fluid "
              src={logoservice}
              alt=" plant image "
            />
            <h2> Service</h2>
            <p> Inoculate means to protect against disease, error, or harm. In the context of financial planning, inoculation means to protect against the risk of loss.</p>
            <button  className='btn btn-success'>Read more...</button>
          </div>
        </div>
      </div>

      <div className="container section3 d-flex flex-column 
flex-md-row mt-5 pt-5 justify-content-center align-items-center"
      >
        <div className="image-side col-sm-12 col-md-6 col-lg-5 ">
          <img
            className="img-fluid"
            src={Olineshopping}
            alt="image flower"
          />
        </div>

        <div className="text-side ">
          <h1 className="feature-title">Online <span className="feature-title text-success pre-scrollable">
            is Easy For Customer
          </span></h1>
          <ul>
            <li>Improved plant growth and health: When you provide your garden with good nutrition, you are giving your plants the nutrients they need to grow strong and healthy. This can lead to improved yields, better disease resistance, and more vibrant colors and flavors in your produce</li>
            <li> Good nutrition can help improve the structure of your soil, which can lead to better water retention and drainage. This can help your plants grow better and can also help prevent erosion and other soil problems.</li>
            <li> Improved soil fertility: Good nutrition can help improve the fertility of your soil, which can lead to better yields and healthier plants.</li>
          </ul>
        </div>

      </div>
      {/* cl1 */}

      <div className="container section3 d-flex flex-column 
flex-md-row mt-5 pt-5 justify-content-center align-items-center"
      >
        <div className="image-side col-sm-12 col-md-6 col-lg-5 ">
          <img
            className="img-fluid"
            src={homegirl}
            alt="image flower"
          />
        </div>

        <div className="text-side ">
          <h1 className="feature-title">Socail Media <span className="feature-title text-success pre-scrollable">
            is Easy For Customer
          </span></h1>
          <ul>
            <li>Improved plant growth and health: When you provide your garden with good nutrition, you are giving your plants the nutrients they need to grow strong and healthy. This can lead to improved yields, better disease resistance, and more vibrant colors and flavors in your produce</li>
            <li> Good nutrition can help improve the structure of your soil, which can lead to better water retention and drainage. This can help your plants grow better and can also help prevent erosion and other soil problems.</li>
            <li> Improved soil fertility: Good nutrition can help improve the fertility of your soil, which can lead to better yields and healthier plants.</li>
          </ul>
        </div>

      </div>
      {/* c3 */}
      <div className="container section3 d-flex flex-column 
flex-md-row mt-5 pt-5 justify-content-center align-items-center"
      >
        <div className="image-side col-sm-12 col-md-6 col-lg-5 ">
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-photo/smiling-woman-headset-presentation-something_329181-11710.jpg?t=st=1716393194~exp=1716396794~hmac=925e311b0203c6fc1d1d2c01fef378cbf6a3011009556d45b3dcdfa0201673e9&w=1800"
            alt="image flower"
          />
        </div>

        <div className="text-side ">
          <h1 className="feature-title">Service <span className="feature-title text-success pre-scrollable">
            is Easy For Customer
          </span></h1>
          <ul>
            <li>Improved plant growth and health: When you provide your garden with good nutrition, you are giving your plants the nutrients they need to grow strong and healthy. This can lead to improved yields, better disease resistance, and more vibrant colors and flavors in your produce</li>
            <li> Good nutrition can help improve the structure of your soil, which can lead to better water retention and drainage. This can help your plants grow better and can also help prevent erosion and other soil problems.</li>
            <li> Improved soil fertility: Good nutrition can help improve the fertility of your soil, which can lead to better yields and healthier plants.</li>
          </ul>
        </div>

      </div>








      <div
        className="section4 mx-0 mx-lg-5 d-flex flex-column flex-md-row  justify-content-center       
align-items-center 
container"
      >
        <div className="text-side w-100 w-md-75  order-2 order-md-0">
          <h1 className="feature-title">Company Building</h1>
          <p className="w-100 w-lg-50 pe-0 pe-md-5">
            We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
          </p>

          <button className="btn btn-success px-5 py-2 mt-4">
            Learn More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="image-side">
          <img
            className="img-fluid rounded-3"
            src="https://img.freepik.com/free-vector/urban-landscape-with-high-skyscrapers_1308-127548.jpg"
            alt=" plants on the pots"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage