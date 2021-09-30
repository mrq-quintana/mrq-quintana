import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'


const CartWidget = ({count}) =>{
    return (
            <>
                <div>
                <TiShoppingCart/>
                {count}

                </div>
            </>
    )
}

export default CartWidget