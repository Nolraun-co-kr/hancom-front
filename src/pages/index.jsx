import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import styled from 'styled-components';

export default function Index() {
  return (
    <WrapperLayout>
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
                OK싸인 체험하기
              </a>
            </div>
            <div className="imgBox">
              <img src="/images/tablet.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section2">
          <div className="wrap">
            <div className="txtBox">
              <h2>All in One Solution</h2>
              <p>
                전자서명을 보다 손쉽고 편리하게 많은 사람들이 다양한 분야에서
                <br />
                이용할 수 있게 하기위해 다양한 기술을 보유한 한글과컴퓨터가 한컴OK싸인을
                만들었습니다.
                <br />
                <br />
                이제 새로운 전자서명을 체험해 보세요.
              </p>
            </div>
            <div className="videoBox">
              <iframe
                src="https://www.youtube.com/embed/r7x6YsJhCag"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="section section3">
          <div className="wrap">
            <div className="imgBox">
              <img src="/images/macbook.png" alt="" />
            </div>
            <div className="infoBox">
              <div className="txtBox">
                <h2>
                  한컴OK싸인은 문서 내용 수정 및<br />
                  생성이 가능 합니다.
                </h2>
                <p>
                  한컴이 만든 편집기로 전자서명 작성 전 별도의 앱 실행 없이 한컴OK싸인 안에서
                  문서내용을 자유롭게 수정할 수 있습니다.
                </p>
              </div>
              <div className="linksBox">
                <div className="col">
                  <h3>한글 편집기 지원</h3>
                  <p>
                    HWP
                    <br />
                    문서 생성/편집이 가능합니다.
                  </p>
                  <a href="">자세히보기</a>
                </div>
                <div className="col">
                  <h3>오피스 편집기 지원</h3>
                  <p>
                    Doc(x), ppt(x), xls(x) 문서
                    <br />
                    생성/편집이 기능합니다.
                  </p>
                  <a href="">자세히보기</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section4">
          <div className="wrap">
            <div className="infoBox">
              <div className="txtBox">
                <h2>
                  다양한 기능으로 전자서명이
                  <br />
                  빠르고 편리해 집니다.
                </h2>
                <p>
                  한컴OK싸인은 카카오 알림톡 연동, 한컴 문서변환기 연동으로 다양한 포멧의 문서를
                  빠르고 정확하게 PDF 문서로 변환해 카카오톡에서 전자서명의 모든 과정 진행히
                  가능합니다.
                </p>
              </div>
              <div className="linksBox">
                <div className="col">
                  <h3>카카오 알림톡 지원</h3>
                  <p>
                    카카오톡에서 전자서명 생성, 계약서 내용 확인 등 전자서명 모든 과정의 진행이 가능
                    합니다.
                  </p>
                  <a href="">자세히보기</a>
                </div>
                <div className="col">
                  <h3>한컴 문서변환기 연동</h3>
                  <p>
                    Hwp(x), doc(x), ppt(x), xls(x)등 모든 포멧의 오피스 문서를 보다 빠르고 정확하게
                    PDF 문서로 변환합니다.
                  </p>
                  <a href="">자세히보기</a>
                </div>
              </div>
            </div>
            <div className="imgBox">
              <img src="/images/phonetablet.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section5">
          <div className="wrap">
            <div className="list-wrap">
              <ul className="documentlist">
                <li>
                  <div className="inner">
                    <span>거래(물건/금전)</span>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <span>부동산 거래</span>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <span>취업/고용</span>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <span>세무/회계</span>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <span>투자/주식</span>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <span>회사 운영</span>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <span>하청/용역</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="txtBox">
              <h2>다양하고 수준 높은 양식문서를 제공 합니다.</h2>
              <p>
                다양한 양식문서를 한컴OK싸인에서 제공하는 편집기를 통해 자유롭게 내용 수정 후
                전자서명 문서로 활용하세요.
              </p>
            </div>
          </div>
        </div>
        <div className="section section6">
          <div className="wrap">
            <div className="infoBox">
              <div className="txtBox">
                <h2>
                  한컴에 제공하는 강력한
                  <br />
                  보안 서비스를 경험해 보세요.
                </h2>
                <p>
                  한컴OK싸인은 다양한 전자문서법 및 전자서명법에 부합한 법적으로 유효한 서비스를
                  제공하며 Block Chain 기반 기술이 적용된 강력한 보안 솔루션을 제공 합니다.
                </p>
              </div>
              <div className="linksBox">
                <div className="col">
                  <h3>전자문서법 및 전자서명법</h3>
                  <p>법적으로 유효한 전자 서명 및 계약 서비스를 제공합니다.</p>
                  <a href="">자세히보기</a>
                </div>
                <div className="col">
                  <h3>강력한 보안 솔루션 적용</h3>
                  <p>
                    한컴OK싸인은 Block Chain 기반의 보안 솔루션을 적용해 보다 강력하고 안전합니다.
                  </p>
                  <a href="">자세히보기</a>
                </div>
              </div>
            </div>
            <div className="imgBox">
              <img src="/images/main_section-6_img.png" alt="" />
            </div>
          </div>
        </div>
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
      </Container>
    </WrapperLayout>
  );
}

Index.getInitialProps = async () => {
  return {};
};

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
const Container = styled.div`
  .section {
    .txtBox {
      h2 {
        font-size: 40px;
        color: #333;
        line-height: 1.2em;
        margin-bottom: 15px;
      }
      p {
        font-size: 20px;
        line-height: 1.4em;
        color: #999;
      }
      @media screen and (max-width: 1024px) {
        h2 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .infoBox {
      .txtBox {
        margin-bottom: 60px;
        padding-bottom: 60px;
        border-bottom: 1px dashed rgba(149, 149, 149, 0.3);
        @media screen and (max-width: 1200px) {
          margin-bottom: 30px;
          padding-bottom: 30px;
        }
      }
    }
    .linksBox {
      display: flex;
      align-items: center;
      .col {
        padding-top: 115px;
        flex: 1;
        h3 {
          font-size: 20px;
          color: #666;
          margin-bottom: 10px;
        }
        p {
          font-size: 16px;
          color: #999;
          margin-bottom: 25px;
          line-height: 1.4em;
        }
        a {
          display: inline-block;
          font-size: 14px;
          color: #333;
          background: url('../images/arrow_right.png') no-repeat right center;
          padding-right: 15px;
        }
      }
      @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
        .col {
          display: block;
          padding-top: 0;
          padding-left: 80px;
          h3 {
            font-size: 15;
            font-weight: 500;
          }
          p {
            font-size: 13px;
            line-height: 1.3em;
          }
        }
      }
    }
  }
  .section1 {
    background: url('../images/main_section-1_bg.png') no-repeat right top;
    background-size: 65% auto;
    .wrap {
      padding: 200px 0 230px;
      position: relative;
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
        color: rgba(51, 51, 51, 0.7);
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
      display: none;
    }
    @media screen and (max-width: 1200px) {
      // background: url('../images/main_section-1_bg-m.png') no-repeat center;
      background-size: cover;
      background: skyblue;
      .wrap {
        padding-top: 95px;
        padding-bottom: 0px;
      }
      .txtBox {
        text-align: center;
        margin-bottom: 85px;
        h2 {
          color: #fff;
          margin-bottom: 18px;
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
          background: #fff;
          font-size: 16px;
          border: none;
        }
      }
      .imgBox {
        display: block;
        text-align: center;
        width: 100%;
        margin-bottom: -18%;
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
  .section2 {
    background: url('../images/main_section-2_bg.png') no-repeat center;
    background-size: cover;
    padding: 160px 0 140px;
    .txtBox {
      text-align: center;
      margin-bottom: 40px;
    }
    .videoBox {
      width: 65%;
      height: 440px;
      margin: 0 auto;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 1200px) {
      padding-top: 24%;
      .videoBox {
        width: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      padding-top: 24%;
      padding-bottom: 60px;
      .videoBox {
        width: 100%;
        height: 250px;
      }
    }
  }
  .section3 {
    padding-top: 100px;
    padding-bottom: 100px;
    .wrap {
      display: flex;
      align-items: center;
    }
    .col {
      &:first-child {
        background: url('../images/hancomoffice.png') no-repeat left top;
      }
      &:last-child {
        background: url('../images/hancomoffice-2.png') no-repeat left top;
      }
    }
    .imgBox {
      max-width: 600px;
      @media screen and (max-width: 768px) {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      padding-top: 50px;
      padding-bottom: 0px;
      .wrap {
        flex-direction: column;
      }
      .imgBox {
        order: 2;
      }
      .infoBox {
        order: 1;
        width: 100%;
      }
      .col {
        &:first-child {
          background: url('../images/hancomoffice.png') no-repeat left top;
          background-size: 72px auto;
          margin-bottom: 30px;
        }
        &:last-child {
          background: url('../images/hancomoffice-2.png') no-repeat left top;
          background-size: 72px auto;
        }
      }
    }
  }
  .section4 {
    padding-top: 100px;
    padding-bottom: 100px;
    background: url('../images/main_section-4_bg.png') no-repeat center;
    background-size: cover;
    .wrap {
      display: flex;
      align-items: center;
    }
    .infoBox {
      margin-right: 45px;
    }
    .imgBox {
      max-width: 600px;
      @media screen and (max-width: 768px) {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    .col {
      padding-top: 87px !important;
      &:first-child {
        background: url('../images/kakao.png') no-repeat left top;
        margin-right: 50px;
      }
      &:last-child {
        background: url('../images/internet.png') no-repeat left top;
      }
    }
    @media screen and (max-width: 1200px) {
      padding-top: 50px;
      padding-bottom: 50px;
      background: url('../images/main_section-4_bg-m.png') no-repeat 25px top #fafafa;
      background-size: 250px auto;
      .wrap {
        flex-direction: column;
      }
      .infoBox {
        width: 100%;
        margin-right: 0;
      }
      .col {
        padding-top: 0 !important;
        &:first-child {
          background: url('../images/kakao.png') no-repeat left top;
          background-size: 72px auto;
          margin-bottom: 30px;
        }
        &:last-child {
          background: url('../images/internet.png') no-repeat left top;
          background-size: 72px auto;
        }
      }
    }
  }
  .section5 {
    padding-top: 160px;
    padding-bottom: 160px;
    .wrap {
      display: flex;
    }
    .documentlist {
      display: flex;
      align-items: center;
      margin: 0 -11px;
      flex-wrap: wrap;
      justify-content: center;
      li {
        padding: 0 11px;
        margin-bottom: 22px;
        .inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 128px;
          height: 128px;
          border: 1px solid #ccc;
          border-radius: 1em;
          box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.2);
        }
        span {
          font-size: 14px;
          color: #666;
          padding-top: 67px;
        }
        &:nth-child(1) {
          span {
            background: url('../images/document-1.png') no-repeat center top;
          }
        }
        &:nth-child(2) {
          span {
            background: url('../images/document-2.png') no-repeat center top;
          }
        }
        &:nth-child(3) {
          span {
            background: url('../images/document-3.png') no-repeat center top;
          }
        }
        &:nth-child(4) {
          span {
            background: url('../images/document-4.png') no-repeat center top;
          }
        }
        &:nth-child(5) {
          span {
            background: url('../images/document-5.png') no-repeat center top;
          }
        }
        &:nth-child(6) {
          span {
            background: url('../images/document-6.png') no-repeat center top;
          }
        }
        &:nth-child(7) {
          span {
            background: url('../images/document-7.png') no-repeat center top;
          }
        }
      }
    }
    @media screen and (max-width: 1200px) {
      padding-top: 50px;
      padding-bottom: 50px;
      .wrap {
        flex-direction: column;
      }
      .list-wrap {
        order: 2;
        width: 100%;
      }
      .txtBox {
        order: 1;
        margin-bottom: 30px;
      }
      .documentlist {
        width: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      .documentlist {
        margin: 0 -5px;
        justify-content: start;
        li {
          width: 50%;
          padding: 0 5px;
        }
        .inner {
          width: 100% !important;
        }
      }
    }
  }
  .section6 {
    padding-top: 40px;
    padding-bottom: 100px;
    background: #fafafa;
    position: relative;
    &::after {
      content: '';
      width: 172px;
      height: 153px;
      background: url('../images/main_section-6_bg.png') no-repeat;
      position: absolute;
      left: 140px;
      top: 240px;
      background-size: contain;
    }
    .wrap {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 99;
    }
    .imgBox {
      max-width: 600px;
      @media screen and (max-width: 1200px) {
        img {
          width: 100%;
        }
      }
    }
    .col {
      padding-top: 87px !important;
      &:first-child {
        background: url('../images/code.png') no-repeat left top;
        margin-right: 50px;
      }
      &:last-child {
        background: url('../images/building.png') no-repeat left top;
      }
    }
    @media screen and (max-width: 1200px) {
      padding-bottom: 0;
      &::after {
        content: '';
        width: 166px;
        height: 76px;
        background: url('../images/main_section-6_bg-m.png') no-repeat;
        position: absolute;
        left: 74px;
        top: 240px;
        background-size: contain;
      }
      .wrap {
        flex-direction: column;
      }
      .col {
        padding-top: 0 !important;
        &:first-child {
          margin-bottom: 30px !important;
        }
      }
    }
  }
`;
