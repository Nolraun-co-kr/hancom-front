import React from 'react';
import styled from 'styled-components';

export default function InquiryForm() {
  return (
    <Container>
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
              <p>??????OK????????? ????????? ?????? ??? ?????????/???????????? ????????? ???????????????.</p>
            </label>
          </div>
          <div className="btn-area">
            <a href="" className="btn">
              ????????????
            </a>
          </div>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
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
