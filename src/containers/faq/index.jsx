import React from 'react';
import FaqItem from '../../components/faq/faqItem';

export default function Faq() {
  return (
    <div className="faq">
      <div className="title">
        <h3>FAQ</h3>
        <a href="">더 자세한 설명 보기</a>
      </div>
      <ul className="faq__list">
        <FaqItem />
        <li>
          <div className="inner">
            <i>
              <img src="/images/faq-02.png" alt="" />
            </i>
            <p>
              제시된 조건보다 더 많은 <br />
              하위계정과 템플릿 <br />
              개수 등을 사용할수 있나요?
            </p>
            <a href="">답변보기</a>
          </div>
        </li>
        <li>
          <div className="inner">
            <i>
              <img src="/images/faq-03.png" alt="" />
            </i>
            <p>
              전자서명시 상대방이 한컴
              <br />
              OK싸인에 가입해야 하나요?
            </p>
            <a href="">답변보기</a>
          </div>
        </li>
        <li>
          <div className="inner">
            <i>
              <img src="/images/faq-04.png" alt="" />
            </i>
            <p>
              요금제 사용중 다른 요금제로 <br />
              변경할수 있나요?
            </p>
            <a href="">답변보기</a>
          </div>
        </li>
      </ul>
    </div>
  );
}
