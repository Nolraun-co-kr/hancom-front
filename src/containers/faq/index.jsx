import React from 'react';
import FaqItem from '../../components/faq/faqItem';
import styled from 'styled-components';

export default function Faq() {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  .faq {
    .title {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #111;
      margin-bottom: 40px;
      h3 {
        font-size: 32px;
        color: #111;
        margin-right: 30px;
      }
      a {
        font-size: 16px;
        color: #2e5fd8;
        padding-right: 20px;
        background: url('../images/arrow_right-blue.png') no-repeat right center;
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 24px;
        h3 {
          font-size: 20px;
          margin-right: 22px;
        }
        a {
          font-size: 13px;
        }
      }
    }
  }
  .faq__list {
    display: flex;
    margin: 0 -13px;
    margin-bottom: 100px;
    li {
      flex: 1;
      padding: 0 13px;
    }
    .inner {
      padding: 30px 24px;
      border: 1px solid #ededed;
      border-radius: 10px;
    }
    p {
      font-size: 20px;
      line-height: 1.5em;
      height: 4.5em;
      color: #111;
      margin: 5px 0 70px;
    }
    a {
      font-size: 14px;
      color: #2e5fd8;
      padding-right: 15px;
      background: url('../images/arrow_right-blue.png') no-repeat right center;
    }
    @media screen and (max-width: 1200px) {
      .inner {
        padding: 20px;
      }
      p {
        font-size: 18px;
      }
    }
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
      li {
        width: 50%;
        flex: none;
        margin-bottom: 26px;
      }
    }
    @media screen and (max-width: 768px) {
      margin: 0;
      margin-bottom: 50px;
      li {
        width: 100%;
      }
      .inner {
        display: flex;
        align-items: center;
      }
      i {
        margin-right: 10px;
      }
      p {
        font-size: 13px;
        height: auto;
        margin: 0;
        margin-right: 16px;
      }
      a {
        margin-left: auto;
      }
    }
  }
`;
