import React from 'react';
import styled from 'styled-components';

export default function MainBlueBox() {
  return (
    <BlueBox>
      <div className="wrap">
        <div className="txtBox">
          <h3>All in One Solution</h3>
          <h2>Are You Ready?</h2>
          <p>
            준비 되었으면 아래 체험하기 버튼을 눌러 한컴OK싸인을 확인해보세요.
            <br />
            한컴이 만들면 다릅니다.
          </p>
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
  &.small {
    .txtBox {
      h2 {
        font-size: 56px;
        margin-top: 0;
      }
    }
  }
  .txtBox {
    text-align: center;
    h3 {
      font-size: 20px;
      color: #fff;
      font-weight: 500;
    }
    h2 {
      font-size: 64px;
      color: #fff;
      font-weight: 500;
      margin: 20px 0;
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
        font-size: 30px;
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
          font-size: 30px;
          margin-top: 0;
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
        font-size: 24px;
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
    &.small {
      .txtBox {
        h2 {
          font-size: 24px;
          margin-top: 0;
        }
      }
    }
  }
`;
