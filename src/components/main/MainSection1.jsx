import React from 'react';
import styled from 'styled-components';

export default function MainSection1() {
  return (
    <Container>
      <div className="section section1">
        <div className="wrap">
          <div className="txtBox">
            <h2>
              새로운 <span>전자서명 솔루션</span>을<br />
              경험해 보세요.
            </h2>
            <p>
              계약서 작성, 수정부터 전자서명 진행까지 올인원 솔루션인
              <br />
              한컴OK싸인 도입으로 전자서명이 간편해 집니다.
            </p>
            <a href="" className="links">
              시작하기
            </a>
          </div>
          <div className="imgBox">
            <img src="/images/tablet.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .section1 {
    background: url('../images/main-bg.png') no-repeat right top;
    background-size: 65% auto;
    .wrap {
      padding: 200px 0 230px;
      position: relative;
    }
    .pc-tablit {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .txtBox {
      h2 {
        margin-bottom: 30px;
        font-weight: 500;
        span {
          color: #6e31ed;
        }
      }
      p {
        color: #333;
        margin-bottom: 70px;
      }
      .links {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 275px;
        height: 60px;
        font-size: 24px;
        color: #111;
        border: 1px solid #111;
        border-radius: 1.5em;
      }
    }
    .imgBox {
      position: absolute;
      right: 20px;
      bottom: 7%;
      z-index: 1;
      max-width: 60%;
      img {
        width: 100%;
      }
    }
    @media screen and (max-width: 1200px) {
      background: url('../images/mobile-main-sec1-bg.png') no-repeat center;
      background-size: cover;
      // background: skyblue;
      .wrap {
        padding-top: 95px;
        padding-bottom: 0px;
      }
      .txtBox {
        text-align: center;
        margin-bottom: 85px;
        padding:0 24px;
        h2 {
          color: #fff !important;
          margin-bottom: 18px;
          letter-spacing: -.6px !important;
          span {
            color: #fffa7c;
          }
        }
        p {
          display: none;
        }
        .links {
          margin: 0 auto;
          width: 166px;
          height: 45px;
          font-size: 16px;
          color: #fff;
          border: 1px solid #fff;
        }
      }
      .imgBox {
        display: block;
        text-align: center;
        width: 100%;
        margin-bottom: -18%;
        position: static;
        max-width: 100%;
        img {
          width: 100%;
          max-width: 600px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .imgBox {
        padding: 0 35px;
      }
    }
  }
`;
