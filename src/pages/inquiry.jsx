import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import styled from 'styled-components';
import InquiryForm from '../components/inquiry/InquiryForm';

export default function Inquiry() {
  return (
    <WrapperLayout>
      <Container>
        <div className="container sub upgrade">
          <div className="content">
            <div className="wrap">
              <div className="upgrade__head">
                <h3>ENTERPRISE Upgrade</h3>
                <h2>Upgrade inquiry</h2>
                <p>
                  ENTERPRISE 계정으로 Upgrade를 원하시는
                  <br />
                  고객님께서는 아래 정보를 입력해 주세요 .<br />
                  담당자가 전문상담 서비스를 진행해 드립니다 .
                </p>
              </div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .upgrade {
    .content {
      padding: 100px 0;
      @media screen and (max-width: 1024px) {
        padding: 50px 0;
      }
    }
    .wrap {
      max-width: 600px;
      @media screen and (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
  .upgrade__head {
    text-align: center;
    margin-bottom: 60px;
    h3 {
      font-size: 16px;
      color: #2e5fd8;
      line-height: 1.5em;
      letter-spacing: 0.5em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 56px;
      color: #111;
      line-height: 1.5em;
      margin-bottom: 10px;
      font-weight: 500;
      text-transform: uppercase;
    }
    p {
      font-size: 16px;
      color: #999;
      line-height: 1.5em;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 50px;
      h3 {
        font-size: 10px;
      }
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 13px;
      }
    }
  }
`;
