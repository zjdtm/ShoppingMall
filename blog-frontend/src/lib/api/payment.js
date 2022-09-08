import client from "./client";

//결제 테스트
export const payment = ({ imp_uid, merchant_uid }) =>
  client.post("/api/payments/complete", { imp_uid, merchant_uid });
