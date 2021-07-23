import React, { useCallback, useState } from 'react';
import WrapperLayout from '../components/WrapperLayout';
import FootLink from '../components/common/FootLink';
import Faq from '../containers/faq';
import Visual from '../components/common/Visual';
import styled from 'styled-components';

export default function Price() {
  const [type, setType] = useState('month');
  const handleClickChangeType = useCallback(
    e => {
      e.preventDefault();
      if (type === 'month') {
        setType('year');
      } else {
        setType('month');
      }
    },
    [type],
  );
  return (
    <WrapperLayout>
      <Container>
        <div className="container sub price">
          <Visual title={'가격안내'} description={'한컴OK싸인 가격안내.'} />
          <div className="content">
            <div className="wrap">
              <div className="price__info">
                <div className="btnarea">
                  <a className={type === 'month' && 'active'} onClick={handleClickChangeType}>
                    <span>월간</span>
                  </a>
                  <a className={type === 'year' && 'active'} onClick={handleClickChangeType}>
                    <span>연간</span>
                  </a>
                </div>
                <div className="list">
                  <div className="col free">
                    <div className="tit">Free</div>
                    <div className="priceNum">
                      <h3>
                        ￦ 무료 <span className="slash">/</span>
                        <span>월간</span>
                      </h3>
                      <p>간단한 회원가입으로 체험하기</p>
                      <a href="" className="border">
                        OK싸인 체험하기
                      </a>
                    </div>
                    <ul className="pricedesc">
                      <li>
                        <p>
                          <span>월 3건</span>의 계약 진행
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          서명 참여자 <span>최대 3명</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>카카오 알림톡</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>위변조 확인(Audit Trail)</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>문서 보관 및 관리</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          템플릿 <spa>1개</spa> 제공
                        </p>
                        <i>i</i>
                      </li>
                    </ul>
                  </div>
                  <div className="col pro">
                    <div className="tit">Pro</div>
                    <div className="priceNum">
                      <h3>
                        ￦ {type === 'month' ? '9,900' : '8,250'} <span className="slash">/</span>
                        <span>월간</span>
                      </h3>
                      <p>
                        사용자당 월간
                        <br />
                        연간 - 99,000원(8,250원/월)
                      </p>
                      <a href="" className="blue">
                        구입 하기
                      </a>
                    </div>
                    <ul className="pricedesc">
                      <li>
                        <p>
                          <span>월 30건</span>의 계약 진행
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          서명 참여자 <span>최대 5명</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>카카오 알림톡</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>휴대폰 추가 인증</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          대량 전송 <span>10건</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>위변조 확인(Audit Trail)</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>문서 보관 및 관리</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          템플릿 <span>3개</span> 제공
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>파일 첨부</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>이메일 브랜딩</p>
                        <i>i</i>
                      </li>
                    </ul>
                  </div>
                  <div className="col business">
                    <div className="tit">Business</div>
                    <div className="priceNum">
                      <h3>
                        ￦ {type === 'month' ? '39,600' : '33,000'} <span className="slash">/</span>
                        <span>월간</span>
                      </h3>
                      <p>
                        간단한 회원가입으로 체험하기
                        <br />
                        연간 – 396,000원(33,000원/월)
                      </p>
                      <a href="" className="blue">
                        구입 하기
                      </a>
                    </div>
                    <ul className="pricedesc">
                      <li>
                        <p>
                          <span>무제한</span> 계약 진행
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          서명 참여자 <span>최대 30명</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>카카오 알림톡</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>휴대폰 추가 인증</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          대량 전송 <span>100건</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          계정당 <span>하위사용자 2명</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>위변조 확인(Audit Trail)</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>문서 보관 및 관리</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          템플릿 <span>10개</span> 제공
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>파일 첨부</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>이메일 브랜딩</p>
                        <i>i</i>
                      </li>
                    </ul>
                  </div>
                  <div className="col enterprise">
                    <div className="tit">Enterprise</div>
                    <div className="priceNum">
                      <h3>맞춤 솔루션 제공</h3>
                      <p>최적의 가격을 제시합니다.</p>
                      <a href="" className="black">
                        문의 하기
                      </a>
                    </div>
                    <ul className="pricedesc">
                      <li>
                        <p>
                          <span>On-Premise</span>형 구축
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          서명 참여자 <span>최대 30명</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          서명 참여자 <span>무제한</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>카카오 알림톡</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>휴대폰 추가 인증</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          대량 전송 <span>200건</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          계정당 하위사용자 <span>5+명</span>
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>위변조 확인(Audit Trail)</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>문서 보관 및 관리</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>
                          템플릿 <span>20+개</span> 제공
                        </p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>파일 첨부</p>
                        <i>i</i>
                      </li>
                      <li>
                        <p>이메일 브랜딩</p>
                        <i>i</i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Faq />
            </div>
          </div>
          <FootLink />
        </div>
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .price__info {
    padding: 100px 0;
    margin-bottom: 100px;
    @media screen and (max-width: 1024px) {
      padding: 50px;
      margin-bottom: 50px;
    }
    .btnarea {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 80px;
      a {
        width: calc(230px / 2);
        height: 56px;
        display: flex;
        background: #eee;
        &.active {
          span {
            background: #4679f6;
            color: #fff;
            border-radius: 50px !important;
          }
        }
        &:first-child {
          border-radius: 50px 0 0 50px;
        }
        &:last-child {
          border-radius: 0 50px 50px 0;
        }
        span {
          font-size: 20px;
          color: #999;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 56px;
        }
      }
      @media screen and (max-width: 1024px) {
        margin-bottom: 25px;
        a {
          height: 44px;
          span {
            font-size: 15px;
            line-height: 44px;
          }
        }
      }
    }

    .list {
      display: flex;
      justify-content: center;
      @media screen and (max-width: 1024px) {
        flex-wrap: wrap;
      }
      .col {
        min-height: 880px;
        flex: 1;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 10px;
        margin-right: 26px;
        &:last-child {
          margin-right: 0;
        }
        &.free {
          border-top: 15px solid #999;
        }
        &.pro {
          border-top: 15px solid #0090ff;
          .tit {
            color: #0090ff;
          }
        }
        &.business {
          border-top: 15px solid #2e5fd8;
        }
        &.enterprise {
          border-top: 15px solid #000;
        }
        @media screen and (max-width: 1024px) {
          min-height: auto;
          margin-right: 0;
          width: 49%;
          flex: none;
          margin-bottom: 40px;
          &:nth-child(2n) {
            margin-left: 2%;
          }
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          &:nth-child(2n) {
            margin-left: 0;
          }
        }
      }
      .tit {
        font-size: 28px;
        color: #111;
        border-bottom: 1px solid #c4c4c4;
        padding: 20px 0;
        text-align: center;
        font-weight: 500;
      }
      .priceNum {
        padding: 20px;
        border-bottom: 1px solid #eee;
        h3 {
          display: flex;
          align-items: baseline;
          font-size: 32px;
          color: #111;
          font-weight: 600;
          margin-bottom: 10px;
          span {
            font-size: 20px;
            font-weight: normal;
            &.slash {
              font-size: 24px;
              margin: 0 5px;
            }
          }
        }
        p {
          font-size: 14px;
          color: #666;
          line-height: 1.5em;
          height: 3em;
          margin-bottom: 20px;
        }
        a {
          width: 100%;
          height: 50px;
          font-size: 16px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          &.border {
            color: #111;
            border: 1px solid #111;
          }
          &.blue {
            background: #4679f6;
            color: #fff;
          }
          &.black {
            background: #111;
            color: #fff;
          }
        }
        @media screen and (max-width: 1024px) {
          text-align: center;
          h3 {
            justify-content: center;
            span {
              &.slash {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
    .pricedesc {
      padding: 20px;
      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        p {
          font-size: 16px;
          color: #111;
          span {
            color: #2e5fd8;
            font-weight: 600;
          }
        }
        i {
          font-size: 12px;
          color: #fff;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          text-align: center;
          line-height: 20px;
          background: #ccc;
        }
      }
      @media screen and (max-width: 1024px) {
        li {
          p {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
