import React from 'react';
import Likes from '../../Components/Likes/Likes';
import CartMain from '../../Components/CartMain/CartMain';


function Cart(){
    return(
        <div>
            <CartMain/>
            <Likes/>
        </div>
    )
}
export default Cart;