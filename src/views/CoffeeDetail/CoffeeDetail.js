import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import config from "../../config/coffee.json";
import "./CoffeeDetail.css"
import upward from "./upward-arrow.png"
import downward from "./down-arrow.png"


function CoffeeDetail() {

    const { id } = useParams()

    const [coffeedata, setCoffeedata] = useState({})

    useEffect(() => {
        config.forEach((infoObj) => {
            if (infoObj.id == id) {
                setCoffeedata(infoObj)
            }
        })
    }, [id])

    const increaseQuantity = () => {
        const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = ++quantity;
    }


    const decreaseQuantity = () => {
        const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = --quantity;
    }


    return (
        <>
            <Navbar />

            <div className='sub-header-container d-flex flex-row justify-content-center'>

                <div className='me-4'>
                    <img src={coffeedata.img} className='coffee-img' />
                </div>

                <div>
                    <div className="">
                        <h1 className=''>
                            {coffeedata.title}
                        </h1>
                        <b className='text-danger '>
                            {coffeedata.price}
                        </b>

                        <div className='d-flex flex-row  '>
                            <div className='d-flex flex-row justify-content-evenly  counter'>


                                <b id='quantity' className='quantity'>
                                    1
                                </b>

                                <div className='d-flex flex-column '>
                                    <img src={upward} onClick={decreaseQuantity} className='minus' />

                                    <img src={downward} onClick={increaseQuantity} className='minus' />
                                </div>


                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="btn btn-outline-dark    btn-md px-4 me-md-2 text-decoration-none "
                                >Buy now
                                </button>

                            </div>
                        </div>
                        <div className='d-flex'>
                            <b className='font-bold'>Category: </b>
                            <p className='fs-6'> {coffeedata.category}</p>
                        </div>

                        <div className='d-flex'>
                            <b className='font-bold'>Product Id: </b>
                            <p className='fs-6'> {coffeedata.pId}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )


}

export default CoffeeDetail
