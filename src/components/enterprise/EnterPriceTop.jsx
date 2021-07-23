import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export default function EnterPriceTop() {
  return (
    <div className="content">
      <div className="wrap">
        <BlueBox small={true}>
          <div className="txtBox">
            <h2>ENTERPRISE</h2>
            <p>
              ENTERPRISE 계정으로 Upgrade 를 원하시는
              <br />
              고객님께서는 아래 문의하기 버튼을 눌러 주세요
            </p>
            <Link href={'/inquiry'}>
              <a>문의하기</a>
            </Link>
          </div>
        </BlueBox>
      </div>
    </div>
  );
}

const BlueBox = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background: #2e5fd8;

  .txtBox {
    text-align: center;
    h3 {
      font-size: 20px;
      color: #fff;
      font-weight: 500;
    }
    h2 {
      font-size: ${props => (props.small ? '56px' : '64px')};
      margin: ${props => (!props.small ? '20px 0 20px 0' : '0px 0 20px 0')};
      color: #fff;
      font-weight: 500;
    }
    p {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 40px;
      line-height: 1.5em;
    }
    a {
      font-size: 20px;
      color: #fff;
      width: 245px;
      height: 58px;
      border: 1px solid #fff;
      border-radius: 1.4em;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
    .txtBox {
      h2 {
        font-size: ${props => (props.small ? '30px' : '30px')};
      }
      p {
        font-size: 18px;
      }
      a {
        width: 182px;
        height: 44px;
        font-size: 16px;
      }
    }
    &.small {
      .txtBox {
        h2 {
          font-size: ;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
    .txtBox {
      h3 {
        font-size: 14px;
      }
      h2 {
        font-size: ${props => (props.small ? '24px' : '24px')};
      }
      p {
        font-size: 16px;
      }
      a {
        width: 182px;
        height: 44px;
        font-size: 16px;
      }
    }
  }
`;
