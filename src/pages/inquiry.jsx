import React from 'react';
import WrapperLayout from '../components/WrapperLayout';

export default function Inquiry() {
  return (
    <WrapperLayout>
      <div className="container sub upgrade">
        <div className="content">
          <div className="wrap">
            <div className="upgrade__head">
              <h3>ENTERPRISE Upgrade</h3>
              <h2>Upgrade inquiry</h2>
              <p>
                ENTERPRISE 계정으로 Upgrade를 원하시는
                <br />
                고객님께서는 아래 정보를 입력해 주세요 .<br />
                담당자가 전문상담 서비스를 진행해 드립니다 .
              </p>
            </div>
            <div className="form upgrade__form">
              <form action="">
                <div className="top">
                  <div className="form__row">
                    <div className="form__tit">
                      First Name <span>*</span>
                    </div>
                    <div className="form__input">
                      <input type="text" placeholder="e.g. Jones" />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__tit">
                      Last Name <span>*</span>
                    </div>
                    <div className="form__input">
                      <input type="text" placeholder="e.g. Snow" />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__tit">
                      Work Email <span>*</span>
                    </div>
                    <div className="form__input">
                      <input type="text" placeholder="e.g. example@kdanmobile.com" />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__tit">
                      Phone Number<span>*</span>
                    </div>
                    <div className="form__input selectbox">
                      <div className="select">
                        <select name="" id="">
                          <option value="">082</option>
                        </select>
                      </div>
                      <input type="text" placeholder="900123456" />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__tit">
                      Company Name<span>*</span>
                    </div>
                    <div className="form__input">
                      <input type="text" placeholder="e.g. Kdan Mobile" />
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <label htmlFor="agree" className="checkbox">
                    <input type="checkbox" hidden="" id="agree" />
                    <span />
                    <p>한컴OK싸인의 새로운 소식 및 마케팅/홍보자료 수신에 동의합니다.</p>
                  </label>
                </div>
                <div className="btn-area">
                  <a href="" className="btn">
                    문의하기
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </WrapperLayout>
  );
}
