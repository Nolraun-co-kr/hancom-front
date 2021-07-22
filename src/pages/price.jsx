import React, { useCallback, useState } from 'react';
import WrapperLayout from '../components/WrapperLayout';
import FootLink from '../components/common/FootLink';
import Faq from '../containers/faq';
import Visual from '../components/common/Visual';

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
      <>
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
      </>
    </WrapperLayout>
  );
}
