import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import send from 'koa-send';
import mongoose from 'mongoose';
import api from './api';
import path from 'path';
import jwtMiddleware from './lib/jwtMiddleware';
require('dotenv').config();

const { PORT, MONGO_URI } = process.env;
const app = new Koa();
const router = new Router();

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

// koa-bodyparser : API요청으로 받은 body 값을 서버가 이해 할 수 있도록 파싱
app.use(bodyParser());

// jwt토큰검증 + 토큰 생성 미들웨어
app.use(jwtMiddleware);

// blog-prontend setupProxy로 해결

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

// 서버를 통해 build 디텍토리 파일을 사용할 수 있게 koa-static을 사용
const buildDirectory = path.resolve(__dirname, '../build');
app.use(serve(buildDirectory));
app.use(async (ctx) => {
  // Not Found이고, 주소가 /api로 시작하지 않는 경우
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    // index.html 내용을 반환
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
