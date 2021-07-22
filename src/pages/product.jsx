import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import Visual from '../components/common/Visual';
import AuthInfo from '../components/productInfo/AuthInfo';
import AllInOne from '../components/productInfo/AllInOne';
import Multiple from '../components/productInfo/Multiple';
import Secure from '../components/productInfo/Secure';
import FootLink from '../components/common/FootLink';

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
    </WrapperLayout>
  );
}
