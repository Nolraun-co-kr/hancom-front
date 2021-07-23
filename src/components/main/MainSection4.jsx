import React from 'react';
import styled from 'styled-components';

export default function MainSection3() {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
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
`;
