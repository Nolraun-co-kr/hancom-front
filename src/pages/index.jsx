import React from 'react';
import WrapperLayout from '../components/WrapperLayout';

export default function Index() {
  return (
    <WrapperLayout>
      <div className="container main">
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
        <div className="section section7 bluecontent">
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
        </div>
      </div>
    </WrapperLayout>
  );
}

Index.getInitialProps = async () => {
  return {};
};
