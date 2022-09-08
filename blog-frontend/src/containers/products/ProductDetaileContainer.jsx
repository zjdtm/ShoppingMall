import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "../../../node_modules/react-router-dom/index";
import ProductDetail from "../../components/products/ProductDetail";
import { AddCart, CheckCart, unloadCartCheck } from "../../modules/addCart";
import { readProduct } from "../../modules/product";

const ProductDetaileContainer = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');

    const { product, user, cartCheck } = useSelector(
      ({product, user, cart}) => ({
        product : product.product,
        user : user.user,
        cartCheck : cart.cartCheck
      })
    );

    useEffect(() => {
      dispatch(readProduct(productId));
      return () => {
        dispatch(unloadCartCheck());
      }
    }, [dispatch, productId]);

    const handleQuantity = (number) => {
      if(number === "dec"){
        if(quantity === 1) {
          return;
        }else {
          setQuantity(quantity-1)
        }
      } else {
        setQuantity(quantity+1)
      }
    }

    const handleSize = (size) => {
      setSize(size);
    }
  
    const handleClick = () => {

      if(!user){
        alert("로그인 하셔야 가능합니다.");
        navigate("/login");
      }
      dispatch(CheckCart({ user, product }))
      if(cartCheck === -1 || cartCheck === null){
        dispatch(AddCart({user, product, quantity, size}));
        alert("장바구니에 상품이 등록되었습니다.");
        dispatch(CheckCart({user, product}))
      }else{
        console.log("실패 : " + cartCheck);
        alert("이미 장바구니에 있는 상품입니다.");
        dispatch(CheckCart({user, product}))
      }
    }
  
    if (!product) return null;
    
    return (
     <ProductDetail product={product} quantity={quantity} size={size} handleQuantity={handleQuantity} handleClick={handleClick} handleSize={handleSize}/>
    );
}

export default ProductDetaileContainer

