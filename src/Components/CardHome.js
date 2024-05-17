import React from 'react'
import './CardHomecss.css'
import { FaArrowCircleRight } from "react-icons/fa";
function CardHome() {
  return (
    <div class="card-list">
    <a href="#" class="card-item">
        <img src="https://www.aristobrat.in/cdn/shop/files/ClassicShirt_White_1.jpg?v=1709556583&width=2048" alt="Card Image"/>
        <span class="developer">Developer</span>
        <h3>A "developer" codes software and websites.</h3>
        <div class="arrow">
            <i class="fas fa-arrow-right card-icon"><FaArrowCircleRight /></i>
        </div>
    </a>
    <a href="#" class="card-item">
        <img src="https://www.aristobrat.in/cdn/shop/files/ClassicShirt_White_1.jpg?v=1709556583&width=2048" alt="Card Image"/>
        <span class="designer">Designer</span>
        <h3>A "designer" is a design expert.</h3>
        <div class="arrow">
            <i class="fas fa-arrow-right card-icon"><FaArrowCircleRight /></i>
        </div>
    </a>
    <a href="#" class="card-item">
        <img src="https://www.aristobrat.in/cdn/shop/files/ClassicShirt_White_1.jpg?v=1709556583&width=2048" alt="Card Image"/>
        <span class="editor">Editor</span>
        <h3>An "editor" ensures content quality and accuracy.</h3>
        <div class="arrow">
            <i class="fas fa-arrow-right card-icon"><FaArrowCircleRight /></i>
        </div>
    </a>
    {/* <a href="#" class="card-item">
        <img src="https://www.aristobrat.in/cdn/shop/files/ClassicShirt_White_1.jpg?v=1709556583&width=2048" alt="Card Image"/>
        <span class="editor">Editor</span>
        <h3>An "editor" ensures content quality and accuracy.</h3>
        <div class="arrow">
            <i class="fas fa-arrow-right card-icon"></i>
        </div>
    </a>
    <a href="#" class="card-item">
        <img src="https://www.aristobrat.in/cdn/shop/files/ClassicShirt_White_1.jpg?v=1709556583&width=2048" alt="Card Image"/>
        <span class="editor">Editor</span>
        <h3>An "editor" ensures content quality and accuracy.</h3>
        <div class="arrow">
            <i class="fas fa-arrow-right card-icon"></i>
        </div>
    </a>
    <a href="#" class="card-item">
        <img src="https://www.aristobrat.in/cdn/shop/files/ClassicShirt_White_1.jpg?v=1709556583&width=2048" alt="Card Image"/>
        <span class="editor">Editor</span>
        <h3>An "editor" ensures content quality and accuracy.</h3>
        <div class="arrow">
            <i class="fas fa-arrow-right card-icon"></i>
        </div>
    </a> */}
</div>
  )
}

export default CardHome