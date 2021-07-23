import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import styled from 'styled-components';

export default function Inquiry() {
  return (
    <WrapperLayout>
      <Container>
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
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .upgrade {
    .content {
      padding: 100px 0;
      @media screen and (max-width: 1024px) {
        padding: 50px 0;
      }
    }
    .wrap {
      max-width: 600px;
      @media screen and (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
  .upgrade__head {
    text-align: center;
    margin-bottom: 60px;
    h3 {
      font-size: 16px;
      color: #2e5fd8;
      line-height: 1.5em;
      letter-spacing: 0.5em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 56px;
      color: #111;
      line-height: 1.5em;
      margin-bottom: 10px;
      font-weight: 500;
      text-transform: uppercase;
    }
    p {
      font-size: 16px;
      color: #999;
      line-height: 1.5em;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 50px;
      h3 {
        font-size: 10px;
      }
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 13px;
      }
    }
  }

  .upgrade__form {
    .top {
      padding: 40px 0;
      border-top: 1px solid #111;
      border-bottom: 1px solid #111;
      .form__row {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .selectbox {
      display: flex;
      .select {
        width: 184px;
        flex: none;
        border-right: 1px solid #e1e1e1;
        padding-left: 60px;
        background: url('../images/plus-black.png') no-repeat 16px center;
        select {
          width: 100%;
          height: 100%;
          font-size: 18px;
          color: #111;
        }
      }
      @media screen and (max-width: 768px) {
        .select {
          width: 100px;
          padding-left: 40px;
          background-position: 7px center;
          background-size: 20px auto;
          select {
            font-size: 13px;
          }
        }
      }
    }
    .btn-area {
      text-align: center;
    }
    .btn {
      font-size: 24px;
      color: #999;
      width: 246px;
      height: 60px;
      border: 1px solid #999;
      border-radius: 50px;
      text-align: center;
      line-height: 60px;
      display: inline-block;
      margin-top: 40px;
      @media screen and (max-width: 768px) {
        width: 136px;
        height: 44px;
        line-height: 44px;
        margin-top: 30px;
        font-size: 16px;
      }
    }
  }

  // form
  .form__row {
    margin-bottom: 40px;
    &.mb-0 {
      margin-bottom: 0;
    }
    @media screen and (max-width: 1024px) {
      margin-bottom: 17px;
    }
  }
  .form__tit {
    font-size: 14px;
    color: #333;
    margin-bottom: 6px;
    span {
      color: #ff5353;
    }
  }
  .form__input {
    width: 100%;
    height: 48px;
    border: 1px solid #e1e1e1;
    border-radius: 0.5em;
    input {
      width: 100%;
      height: 100%;
      padding: 0 16px;
      font-size: 18px;
      color: #333;
      box-sizing: border-box;
      &::placeholder {
        color: #999;
      }
    }
    @media screen and (max-width: 1024px) {
      height: 38px;
      input {
        font-size: 13px;
        padding: 0 10px;
      }
    }
  }

  .checkbox {
    margin-top: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    input + span {
      width: 20px;
      height: 20px;
      border-radius: 0.3em;
      border: 1px solid #c6c6c6;
      margin-right: 10px;
    }
    input:checked + span {
      background: url('../images/check.png') no-repeat center;
    }
    p {
      color: #666;
      font-size: 14px;
      font-weight: 500;
    }
    @media screen and (max-width: 1024px) {
      p {
        font-size: 12px;
      }
    }
  }
`;
