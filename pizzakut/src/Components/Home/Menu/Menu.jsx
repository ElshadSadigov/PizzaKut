import React from 'react'
import Card from './Card/Card'
import "./Menu.css"

const Menu = () => {
    return (
        <div className='menu'>
            <div className="menuTitle">
                <span>PIZZAKUT</span>
                <p>Pizza həzzini bizimlə dad</p>
            </div>
            <div className="menuCards">
                <Card/>
            </div>
        </div>
    )
}

export default Menu
