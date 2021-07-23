import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import EnterPriceTop from '../components/enterprise/EnterPriceTop';
import styled from 'styled-components';

export default function Subscribe() {
  return (
    <WrapperLayout>
      <Container>
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
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .enterprise {
    .enterprise__inn {
      padding: 30px 0 100px;
      @media screen and (max-width: 1024px) {
        padding: 0 0 50px;
      }
    }

    .content {
      margin-bottom: 60px;
      @media screen and (max-width: 1024px) {
        margin-bottom: 50px;
        .wrap {
          padding: 0;
        }
      }
    }
  }

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
