import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import EnterPriceTop from '../components/enterprise/EnterPriceTop';

export default function Subscribe() {
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
                    <img src="/images/bi_info-circle.png" alt="" />
                  </div>
                  <p>
                    고객님께서는 현재 <span>STARTER 계정</span>을 구독중 입니다 .<br />
                    계정 Upgrade 를 원하시면 아래 <span>Upgrade 버튼</span>을 눌러주세요 .
                  </p>
                </div>
                <div className="button-area">
                  <a href="" className="blue">
                    Upgrade 하기
                  </a>
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
