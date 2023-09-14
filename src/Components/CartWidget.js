import React from 'react'
import '../cartWidget.css'
import bag from '../Img/bag.svg'


function CartWidget() {
        return(
                <div className="shopping">
                        <img  className="bagLogo" src={bag} alt="Bag symbol" />
                        <span className="quantity">0</span>
                </div>
        )
}

export default CartWidget;