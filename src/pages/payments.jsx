import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import styled from 'styled-components';
import EnterPriceWrapper from '../components/enterPrice/EnterPriceWrapper';

export default function Payments() {
  return (
    <WrapperLayout>
      <Container>
        <EnterPriceWrapper>
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
        </EnterPriceWrapper>
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .statebox {
    .txt {
      text-align: center;
      padding-bottom: 40px;
      margin-bottom: 40px;
      border-bottom: 1px solid #e1e1e1;
      .img {
        margin-bottom: 20px;
      }
      p {
        font-size: 28px;
        color: #000;
        line-height: 1.5em;
        font-weight: 300;
        span {
          color: #2e5fd8;
          font-weight: 600;
          &.check {
            color: #52c888;
          }
        }
      }
      @media screen and (max-width: 1024px) {
        p {
          font-size: 24px;
        }
      }
      @media screen and (max-width: 768px) {
        p {
          font-size: 20px;
        }
      }
    }
    .button-area {
      display: flex;
      justify-content: center;
      a {
        width: 342px;
        height: 68px;
        border: 1px solid #666;
        text-align: center;
        line-height: 68px;
        font-size: 24px;
        color: #666;
        font-weight: 600;
        background: #fff;
        margin: 0 12px;
        border-radius: 4px;
        &.blue {
          background: #4679f6;
          color: #fff;
          border: 1px solid #2e5fd8;
        }
      }
      @media screen and (max-width: 1024px) {
        a {
          height: 54px;
          line-height: 54px;
          font-size: 18px;
        }
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
        a {
          width: 100%;
          font-size: 16px;
          margin: 0;
          margin-bottom: 16px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
