import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Order from '../../components/orders/Order';
import { listCarts } from '../../modules/addCart';

const OrderContainer = () => {
    const dispatch = useDispatch();
    const { user,carts } = useSelector(
        ({user, cart}) => ({
            user : user.user,
            carts : cart.cart,
        })
    );

    useEffect(() => {
        if(carts) return;
        dispatch(listCarts(user._id));
    }, [dispatch, carts, user._id]);

    return (
        // <Order
        //     user={user}
        //     carts={carts}
        // />
        <p>주문 페이지{user} {carts}</p>
    )
}

export default OrderContainer