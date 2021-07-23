import React from 'react';
import styled from 'styled-components';

export default function MainSection5() {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
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
