import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import EnterPriceTop from '../components/enterprise/EnterPriceTop';

export default function Payments() {
  return (
    <WrapperLayout>
      <div className="container sub enterprise">
        <div className="enterprise__inn">
          <EnterPriceTop />

          <div className="enterprise__cont">
            <div className="wrap">
              <div className="statebox">
                <div className="txt">
                  <div className="img">
                    <img src="/images/akar-icons_circle-check.png" alt="" />
                  </div>
                  <p>
                    <span className="check">결제가 완료</span> 되었습니다 .<br />
                    Tasks 페이지로 이동해 계약을 시작해 보세요 .
                  </p>
                </div>
                <div className="button-area">
                  <a href="">Go to My Tasks</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperLayout>
  );
}
