import React from 'react';
import styled from 'styled-components';

export default function FootLink() {
  return (
    <BlueBox small={true}>
      <div className="wrap">
        <div className="txtBox">
          <h2>한컴이 만들면 다릅니다.</h2>
          <p>간단한 회원가입으로 직접 체험해 보세요.</p>
          <a href="">OK싸인 체험하기</a>
        </div>
      </div>
    </BlueBox>
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
