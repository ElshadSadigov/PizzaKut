import React from 'react'
import "./Basket.css"
import { Link } from 'react-router-dom'
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../slice/slice'

import { useSelector, useDispatch } from 'react-redux'


// import img from './download.png'

const Basket = () => {

  const dispatch = useDispatch();

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  )

  function declared(){
    if(totalPrice>0){
      alert("Sifariş Etdiyiniz Üçün Təşəkkürlər:))")
    }
    else{
      alert("Səbətiniz Boşdur:((")
    }
  }

  return (
    <div className='basket'>
      <div className="basketTitle">
        <span>Səbət</span>
      </div>
      <div className="basketBack">
        <Link to='/'><i class="fa-solid fa-arrow-left"></i>Geri</Link>
      </div>
      <div className="basketBox">
        <div className="basketProducts">

          {cart.map((data) => (

            <div className="basketProduct">
              <div className="productImg">
                <img src={data.img} alt="" />
              </div>
              <div className="productInfo">
                <div className="productTitle">
                  <span>{data.name}</span>
                  <div className="productSize">
                    <div className="productCount">
                      <button onClick={() => dispatch(decreaseItemQuantity(data.id))}>-</button>
                      <span>{data.quantity}</span>
                      <button onClick={() => dispatch(increaseItemQuantity(data.id))}>+</button>
                    </div>
                    <div className="pizzaPrice">{data.price}</div>
                  </div>
                </div>
                <div className="productRemove">
                  <span onClick={() => dispatch(removeItem(data.id))}><i class="fa-solid fa-trash"></i></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="basketEnd">
          <span>SAYI: {totalQuantity}</span>
          <span>QİYMƏTİ: {totalPrice}<i class="fa-solid fa-manat-sign"></i></span>
          <button onClick={declared}>Sifariş et</button>
        </div>
      </div>
    </div>
  )
}


export default Basket
