import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import './Slidercss.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
const slideImage = [
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RS1W343sIyEau5xruJXsF34Ms4ziu_QXXA&s',
        caption: 'Welcome to BlueShop',
        des: 'It turns out that even if your latest garments have that new-clothes smell, they could be harboring some pretty nasty germs that could make you sick, or harsh chemicals that might irritate your skin.'
    }, {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91LizXlnnJE9bdVuCrqpniXVf17N0WbmjnQ&s',
        caption: 'Welcome to BlueShop',
        des: 'It turns out that even if your latest garments have that new-clothes smell, they could be harboring some pretty nasty germs that could make you sick, or harsh chemicals that might irritate your skin.'
    }, {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5tntdcgh74PNSm3reSGBNq8xsgloP5a-Nw&s',
        caption: 'Welcome to BlueShop',
        des: 'It turns out that even if your latest garments have that new-clothes smell, they could be harboring some pretty nasty germs that could make you sick, or harsh chemicals that might irritate your skin.'
    }
]
function Slider() {
    return (
        <div className='slide-container'>
            <Zoom>
                {slideImage.map((image, index) => (
                    <div key={index}>
                        <div className='divStyle' style={{ backgroundImage: `url(${image.url})` }}>

                            <div className=' d-grid gap-2 '>
                                <h1 style={{ color: '#ffff' }}>{image.caption}</h1>

                                <p style={{ width: '400px', color: 'black', display: 'inherit' }}>{image.des}</p>
                                <button class="button-54" role="button">
                                    <span class="text">LERN MORE</span>
                                </button>

                            </div>
                        </div>
                    </div>
                ))

                }
            </Zoom>
        </div>
    )
}

export default Slider