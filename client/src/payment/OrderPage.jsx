import React from 'react'
import { useLocation } from 'react-router-dom'


const OrderPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      주문페이지
    </div>
  )
}

export default OrderPage