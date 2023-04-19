import React, {useEffect} from 'react'
import "./Header.css"
import Logo from './HeaderImg/Logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../slice/slice'


const Header = () => {


    const {cart, totalQuantity} = useSelector((state)=> state.allCart);

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getCartTotal())
    },[cart])

    return (
        <header className='header'>
            <div className="headerLogo">
                <img src={Logo} alt="PizzaLogo" />
                <span>Pizza</span>
                <span>Kut</span>
                <span>.</span>
            </div>
            <div className="headerRight">
                <div className="headerBasket">
                    <span><Link to='/basket'> <i class="fa-solid fa-cart-shopping"></i></Link></span>
                    <span>{totalQuantity}</span>
                </div>
            </div>
        </header>
    )
}

export default Header
