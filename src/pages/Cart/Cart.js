import React from 'react';
import Likes from '../../components/Likes/Likes.js';
import CartMain from '../../components/CartMain/CartMain.js';


function Cart(){
    return(
        <div>
            <CartMain/>
            <Likes/>
        </div>
    )
}
export default Cart;