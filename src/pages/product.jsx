import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import Visual from '../components/common/Visual';
import AuthInfo from '../components/productInfo/AuthInfo';
import AllInOne from '../components/productInfo/AllInOne';
import Multiple from '../components/productInfo/Multiple';
import Secure from '../components/productInfo/Secure';
import FootLink from '../components/common/FootLink';
import styled from 'styled-components';

/*
 * 다양한 한컴OK싸인 기능 내용
 * */
const infoData = [
  {
    icon: <img src="/images/infodesc-1.png" alt="" />,
    title: '팀 계정 추가 및 관리',
    desc: '팀 하위 계정을 생성해 관리할수 있습니다.',
  },
  {
    icon: <img src="/images/infodesc-2.png" alt="" />,
    title: '양질의 양식문서 제공',
    desc: '계약서로 활용 가능한 바로 사용 가능한 양질의 양식문서를 제공합니다.',
  },
  {
    icon: <img src="/images/infodesc-3.png" alt="" />,
    title: '다양한 PDF Fields',
    desc: '텍스트, 라디오버튼, 체크박스, 날짜 등 다양한 필드를 삽입할 수 있습니다.',
  },
  {
    icon: <img src="/images/infodesc-4.png" alt="" />,
    title: 'Message 작성',
    desc: '전자서명 요청시 전달할 메시지를 작성할 수 있습니다.',
  },
  {
    icon: <img src="/images/infodesc-5.png" alt="" />,
    title: '다양한 서명방식',
    desc: '혼자 서명하기, 바로 서명하기 등 다양한 방식으로 서명 진행이 가능합니다.',
  },
  {
    icon: <img src="/images/infodesc-6.png" alt="" />,
    title: '서명요청 자동 Remind',
    desc: '서명 요청 시 자동 Remind 기능을 설정할 수 있습니다.',
  },
  {
    icon: <img src="/images/infodesc-7.png" alt="" />,
    title: '서명자, 유효기간 변경',
    desc: '서명 요청 후에도 서명자 및 서명 유효기간 변경이 가능합니다.',
  },
  {
    icon: <img src="/images/infodesc-8.png" alt="" />,
    title: '다양한 단축키',
    desc: '전자서명 문서 생성시 다양한 단축키를 제공하여 보다 쉽게 편집이 가능합니다.',
  },
];

export default function Product() {
  return (
    <WrapperLayout>
      <Container>
        <div className="container sub product product--info">
          <Visual
            title={'제품소개'}
            description={
              '계약서 작성부터 편집, 전자서명, 추적 관리까지 전자계약에 필요한 모든 기능을 제공 합니다.'
            }
          />
          <div className="section-wrap">
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
            <AuthInfo />
            <AllInOne />
            <Multiple />
            <Secure />

            <div className="section section6">
              <div className="wrap">
                <div className="tit">
                  다양한 한컴OK싸인 기능을 통해 <br />
                  전사저명이 쉽고 편해 집니다.
                </div>
                <ul className="infodesc">
                  {infoData.map((data, index) => (
                    <li key={index}>
                      <div className="inn">
                        <div className="icon">{data.icon}</div>
                        <div className="txt">
                          <h3>{data.title}</h3>
                          <p>{data.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <FootLink />
          </div>
        </div>
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .product--info {
    .pdCom {
      padding: 150px 0;
      @media screen and (max-width: 1300px) {
        padding: 50px 0;
      }
    }
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
    .section2 {
      background: url('../images/main_section-4_bg.png') no-repeat center;
      background-size: cover;
    }
    .section3 {
      .tab-item {
        .img {
          margin-right: 0;
          margin-left: 65px;
        }
      }
      @media screen and (max-width: 1300px) {
        .tab-item {
          .img {
            margin-left: 0;
            order: 1;
          }
          .info {
            order: 2;
          }
        }
      }
    }
    .section4 {
      background: #fafafa;
      position: relative;
      &::after {
        content: '';
        width: 25%;
        height: 50%;
        background: url('../images/dotsbg.png') no-repeat center;
        background-size: contain;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
      }
      .wrap {
        position: relative;
        z-index: 110;
      }
      @media screen and (max-width: 1300px) {
        &::after {
          width: 176px;
          height: 135px;
        }
      }
    }
    .section5 {
      .tab-item {
        .img {
          margin-right: 0;
          margin-left: 65px;
        }
      }
      @media screen and (max-width: 1300px) {
        .tab-item {
          .img {
            margin-left: 0;
            order: 1;
          }
          .info {
            order: 2;
          }
        }
      }
    }
    .section6 {
      padding-bottom: 100px;
      .tit {
        margin-bottom: 60px;
        font-size: 41px;
        color: #333;
        line-height: 1.3em;
        text-align: center;
      }
      .infodesc {
        display: flex;
        margin: 0 -13px;
        flex-wrap: wrap;
        li {
          width: calc(100% / 4);
          padding: 0 13px;
          margin-bottom: 32px;
        }
        .inn {
          padding: 40px 50px;
          border: 1px solid #ccc;
          min-height: 315px;
        }
        .icon {
          margin-bottom: 30px;
        }
        h3 {
          font-size: 20px;
          color: rgba(51, 51, 51, 0.7);
          font-weight: 500;
          margin-bottom: 5px;
          line-height: 1.5em;
        }
        p {
          font-size: 16px;
          color: rgba(51, 51, 51, 0.7);
          line-height: 1.5em;
        }
      }
      @media screen and (max-width: 1200px) {
        padding-bottom: 50px;
        .infodesc {
          li {
            width: calc(100% / 3);
          }
        }
      }
      @media screen and (max-width: 1024px) {
        .tit {
          font-size: 20px;
          margin-bottom: 40px;
        }
        .infodesc {
          li {
            width: calc(100% / 2);
          }
        }
      }
      @media screen and (max-width: 768px) {
        .infodesc {
          padding: 0;
          li {
            margin: 0;
            width: 100%;
            margin-bottom: 12px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .inn {
            padding: 20px;
            min-height: 110px;
            display: flex;
          }
          .icon {
            width: 40px;
            margin-right: 8px;
            img {
              width: 100%;
            }
          }
          h3 {
            font-size: 15px;
          }
          p {
            font-size: 13px;
          }
        }
      }
    }
  }

  .tab-item {
    display: flex;
    align-items: center;
    @media screen and (max-width: 1300px) {
      flex-direction: column;
    }
    .img {
      max-width: 684px;
      flex: none;
      margin-right: 65px;
      .m-show {
        display: none;
        margin-bottom: 20px;
      }
      @media screen and (max-width: 1300px) {
        max-width: 100%;
        margin-right: 0;
        text-align: center;
        flex: 1;
        .m-show {
          display: block;
        }
      }
      @media screen and (max-width: 768px) {
        img {
          width: 100%;
        }
      }
    }
    .info {
      flex: 1;
      @media screen and (max-width: 1300px) {
        .tit {
          display: none;
        }
      }
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .tit {
      margin-bottom: 60px;
      h2 {
        font-size: 41px;
        color: #333;
        margin-bottom: 15px;
        font-weight: 500;
      }
      h3 {
        font-size: 20px;
        color: rgba(51, 51, 51, 0.7);
        line-height: 1.5em;
        margin-bottom: 15px;
      }
      p {
        font-size: 14px;
        color: #999;
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        h2 {
          font-size: 20px;
        }
        h3 {
          font-size: 16px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .tab-button {
      margin-bottom: 24px;
      &.active {
        .button {
          color: #fff;
        }
      }
      .button {
        width: 472px;
        height: 81px;
        border: 1px solid #e1e1e1;
        background: #fff;
        border-radius: 0.5em;
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: 24px;
        color: rgba(51, 51, 51, 0.7);
        padding-left: 70px;
        @media screen and (max-width: 768px) {
          width: 100%;
          height: 54px;
          font-size: 18px;
          padding-left: 60px;
          background-size: 24px auto !important;
        }
      }
      p {
        font-size: 16px;
        color: rgba(51, 51, 51, 0.7);
        padding-left: 10px;
        text-align: left;
        line-height: 1.5em;
        margin-top: 20px;
        &.small {
          font-size: 14px;
          margin-top: 20px;
          color: #0c67bd;
        }
        @media screen and (max-width: 768px) {
          margin-bottom: 17px;
          font-size: 13px;
        }
      }
      &.certified1 {
        .button {
          background: url('../images/certified-ico1.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/certified-ico1_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
      &.certified2 {
        .button {
          background: url('../images/certified-ico2.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/certified-ico2_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
      &.certified3 {
        .button {
          background: url('../images/certified-ico3.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/certified-ico3_on.png') no-repeat 20px center #4679f6;
          }
        }
      }

      &.aio1 {
        .button {
          background: url('../images/aio-ico1.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/aio-ico1_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
      &.aio2 {
        .button {
          background: url('../images/aio-ico2.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/aio-ico2_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
      &.aio3 {
        .button {
          background: url('../images/aio-ico3.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/aio-ico3_on.png') no-repeat 20px center #4679f6;
          }
        }
      }

      &.function1 {
        .button {
          background: url('../images/function-ico1.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/function-ico1_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
      &.function2 {
        .button {
          background: url('../images/function-ico2.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/function-ico2_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
      &.function3 {
        .button {
          background: url('../images/function-ico3.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/function-ico3_on.png') no-repeat 20px center #4679f6;
          }
        }
      }

      &.security1 {
        .button {
          background: url('../images/security-ico1.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/security-ico1_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
      &.security2 {
        .button {
          background: url('../images/security-ico2.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/security-ico2_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
      &.security3 {
        .button {
          background: url('../images/security-ico3.png') no-repeat 20px center #fff;
        }
        &.active {
          .button {
            background: url('../images/security-ico3_on.png') no-repeat 20px center #4679f6;
          }
        }
      }
    }
  }
`;
