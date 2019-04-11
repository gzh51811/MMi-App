import React from 'react';
import Likes from '../../components/Likes/Likes';
import CartMain from '../../components/CartMain/CartMain';


function Cart(){
    return(
        <div>
            <CartMain/>
            <Likes/>
        </div>
    )
}
export default Cart;