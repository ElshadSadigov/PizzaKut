import React from 'react'
import "./Card.css"
import { addToCart } from '../../../../slice/slice'
import { useDispatch, useSelector } from 'react-redux'

const Card = () => {

    const items = useSelector((state) => state.allCart.items)

    const dispatch = useDispatch()


    return (

        <div className="card">
            {items.map((item) => (


                <div className="cardBody">
                    <div className="cardImg">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="cardTitle">
                        <span>{item.name}</span>
                        <span>{item.price}<i class="fa-solid fa-manat-sign"></i></span>
                    </div>
                    <div className="cardInfo">
                        <p><span>Tərkibi:</span> {item.composition}</p>
                    </div>
                    <div className="cardBtn">
                        <button onClick={() => dispatch(addToCart(item))}>SƏBƏTƏ AT</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
