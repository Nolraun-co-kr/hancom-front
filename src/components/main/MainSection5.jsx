import React from 'react';
import styled from 'styled-components';

export default function MainSection5() {
  return (
    <Container>
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
              다양한 양식문서를 한컴OK싸인에서 제공하는 편집기를 통해 자유롭게 내용 수정 후 전자서명
              문서로 활용하세요.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
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
`;
