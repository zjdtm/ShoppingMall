import Router from 'koa-router';
import axios from '../../../node_modules/axios/index';

const router = new Router();

router.post('/complete', async (ctx) => {
  try {
    const { imp_uid, merchant_uid } = ctx.request.body; // req의 body에서 imp_uid, merchant_uid 추출
    // 액세스 토큰(access token) 발급 받기
    const getToken = await axios({
      url: 'https://api.iamport.kr/users/getToken',
      method: 'post', // POST method
      headers: { 'Content-Type': 'application/json' }, // "Content-Type": "application/json"
      data: {
        imp_key: '5533078726443514', // REST API 키
        imp_secret:
          '5KZE1WGgETmNfUEnwQGHB791HMCg3b2JtZ9B8k6IMcemwBbNnQYFOC37N0GBwEMocPU4owOAGuUOpDPW', // REST API Secret
      },
    });
    const { access_token } = getToken.data.response; // 인증 토큰

    // imp_uid로 아임포트 서버에서 결제 정보 조회
    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
      method: 'get', // GET method
      headers: { Authorization: access_token }, // 인증 토큰 Authorization header에 추가
    });
    const paymentData = getPaymentData.data.response; // 조회한 결제 정보
  } catch (e) {
    ctx.status(400).send(e);
  }
});

export default router;
