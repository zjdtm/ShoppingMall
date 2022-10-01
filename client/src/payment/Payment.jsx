import React, { useEffect} from 'react';
import styled from 'styled-components';


const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const Payment = ({ username, total }) => {
	useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
        	document.head.removeChild(jquery);
        	document.head.removeChild(iamport);
        }
    }, []);

    const onClickPayment = () => {
    	const { IMP } = window;
    	IMP.init('imp64115617');

    	const data = {
    		pg: 'html5_inicis',
    		pay_method: 'card',
    		merchant_uid: `mid_${new Date().getTime()}`,
    		name: '결제 테스트',
    		amount: total,
    		custom_data: {
                name: '부가정보',
                desc: '세부 부가정보'
    		},
    		buyer_name: username,
    		buyer_tel: '01012345678',
    		buyer_email: '14279625@gmail.com',
    		buyer_addr: '구천면로 000-00',
    		buyer_postalcode: '01234'
    	};
    	IMP.request_pay(data, callback);
    }

    const callback =  (response) => {
    	const {success, error_msg} = response;
    	if (success){
			alert("결제에 성공하였습니다");
		}else {
			alert(`결제에 실패하였습니다${error_msg}`);
		}
    }

    return (
        <>
        	<Button onClick={onClickPayment}>결제하기</Button>
        </>
    );
}
export default Payment;