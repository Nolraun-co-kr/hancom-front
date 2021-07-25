import React from 'react';
import styled from 'styled-components';

export default function ReferenceForm() {
  return (
    <Container>
      <div className="form">
        <form action="">
          <div className="form__row">
            <div className="form__tit">
              이메일 주소 <span>*</span>
            </div>
            <div className="form__input">
              <input type="text" placeholder="이메일 주소를 입력해 주세요" />
            </div>
          </div>
          <div className="form__row mb-0">
            <div className="form__tit">
              전화번호 <span>*</span>
            </div>
            <div className="form__input">
              <input type="text" placeholder="- 없이 입력해 주세요" />
            </div>
          </div>
          <div className="form__row">
            <label htmlFor="agree" className="checkbox">
              <input type="checkbox" hidden="" id="agree" />
              <span />
              <p>한컴OK싸인의 새로운 소식 및 마케팅/홍보자료 수신에 동의합니다.</p>
            </label>
          </div>
          <a href="" className="usebtn">
            사용 하기
          </a>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
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
