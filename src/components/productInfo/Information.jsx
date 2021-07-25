import React from 'react';
import styled from 'styled-components';
export default function Information() {
  return (
    <Container>
      <div className="section section1">
        <div className="wrap">
          <div className="title">
            <h2>한컴OK싸인 기능 안내</h2>
            <p>한컴에서 제공하는 차별화된 제품들을 한컴OK싸인 기능으로 만나볼 수 있습니다.</p>
          </div>
          <div className="cardlist">
            <div className="col">
              <a href="">
                <div className="tit">
                  <span>
                    <img src="/images/logo_small.png" alt="" />
                  </span>
                  <h3>WebHWPControl</h3>
                </div>
                <div className="txt">
                  <h4>웹한글 편집기</h4>
                  <p>
                    한글 문서의 편집 및 신규 생성을
                    <br />
                    할 수 있고 한글프로그램과
                    <br />
                    동일한 UI 제공합니다.
                  </p>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="">
                <div className="tit">
                  <span>
                    <img src="/images/logo_small.png" alt="" />
                  </span>
                  <h3>Converter</h3>
                </div>
                <div className="txt">
                  <h4>문서 변환기</h4>
                  <p>다양한 포맷의 문서를 고품질의 PDF 포맷으로 빠르게 변환이 가능 합니다.</p>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="">
                <div className="tit">
                  <span>
                    <img src="/images/logo_small.png" alt="" />
                  </span>
                  <h3>WebOffice</h3>
                </div>
                <div className="txt">
                  <h4>웹오피스 편집기</h4>
                  <p>한글 문서 외 오피스 포맷 문서의 편집 및 신규 생성이 가능 합니다.</p>
                </div>

                <small>*Patch 1에서 제공 예정</small>
              </a>
            </div>
          </div>
          <p className="desc">SMS로 서명자 추가 인증 및 서명 요청 알림 발송이 가능 합니다.</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .section1 {
    position: relative;
    padding: 100px 0;
    &::after {
      content: '';
      width: 384px;
      height: 474px;
      background: url('../images/line_bg.png') no-repeat center;
      background-size: contain;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    @media screen and (max-width: 1024px) {
      padding: 50px 0 100px;
      &::after {
        content: '';
        width: 176px;
        height: 217px;
      }
    }
    .title {
      margin-bottom: 50px;
      text-align: center;
      h2 {
        font-size: 58px;
        color: #333;
        margin-bottom: 15px;
      }
      p {
        font-size: 20px;
        color: rgba(51, 51, 51, 0.7);
      }
      @media screen and (max-width: 1024px) {
        margin-bottom: 40px;
        h2 {
          font-size: 28px;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .cardlist {
      display: flex;
      justify-content: space-between;
      margin: 0 -13px;
      .col {
        flex: 1;
        padding: 0 13px;
      }
      a {
        width: 100%;
        display: inline-block;
        padding: 60px 40px;
        border: 1px solid #ededed;
        box-shadow: 0 4px 4px 0 rgba(51, 51, 51, 0.1);
        min-height: 415px;
        position: relative;
        background: #fff;
        &:hover {
          box-shadow: 0 4px 4px 0 rgba(51, 51, 51, 0.3);
        }
      }
      .tit {
        margin-bottom: 40px;
        padding-bottom: 40px;
        position: relative;
        &::after {
          content: '';
          width: 40px;
          height: 1px;
          background: #333;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        h3 {
          font-size: 32px;
          color: #333;
          margin-top: 5px;
        }
      }
      .txt {
        h4 {
          font-size: 24px;
          color: rgba(51, 51, 51, 0.7);
          margin-bottom: 15px;
          font-weight: 500;
        }
        p {
          font-size: 20px;
          color: rgba(51, 51, 51, 0.7);
          line-height: 1.5em;
        }
      }
      small {
        font-size: 14px;
        color: #0c67bd;
        position: absolute;
        bottom: 15px;
      }
      @media screen and (max-width: 1024px) {
        margin: 0;
        flex-direction: column;
        .col {
          padding: 0;
          margin-bottom: 18px;
        }
        a {
          padding: 25px 30px;
          min-height: auto;
        }
        .tit {
          margin-bottom: 20px;
          padding-bottom: 20px;
          h3 {
            font-size: 28px;
          }
        }
        .txt {
          h4 {
            font-size: 18px;
            color: #000;
          }
          p {
            font-size: 14px;
          }
          margin-bottom: 20px;
        }
        small {
          font-size: 14px;
          color: #0c67bd;
          position: relative;
          bottom: 0;
        }
      }
    }
    .desc {
      margin-top: 20px;
      font-size: 16px;
      color: rgba(51, 51, 51, 0.7);
      @media screen and (max-width: 1024px) {
        margin-top: 0px;
        font-size: 14px;
      }
    }
  }
`;
