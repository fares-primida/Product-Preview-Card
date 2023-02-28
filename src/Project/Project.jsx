import React from 'react'
import DescImg from './image-product-desktop.jpg'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Style.scss'

const Project = () => {
    return (
        <div className='Container'>
            <div className="image">
                <img src={DescImg} alt="" />
            </div>
            <div className="content">
                <div className="container">
                    <div className="Mini-title">
                        <h2>Perfume</h2>
                    </div>
                    <div className="title">
                        Gabrielle Essence Eau De Perfume
                    </div>
                    <div className="description">
                        <p>
                            consectetur adipisicing elit. Ut sed sapiente quos eius totam rerum voluptate, omnis non, deleniti nesciunt et ullam unde sint quibusdam iste illo dolorum quas incidunt?
                        </p>
                    </div>
                    <div className="price">
                        $149.99 <span><s>$169.99</s></span>
                    </div>
                    <div className="btn">
                        <button><span><AiOutlineShoppingCart /></span> Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project