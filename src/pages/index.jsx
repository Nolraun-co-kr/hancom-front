import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import styled from 'styled-components';
import MainSection1 from '../components/main/MainSection1';
import MainSection2 from '../components/main/MainSection2';
import MainSection3 from '../components/main/MainSection3';
import MainSection4 from '../components/main/MainSection4';
import MainSection5 from '../components/main/MainSection5';
import MainBlueBox from '../components/main/BlueBox';

export default function Index() {
  return (
    <WrapperLayout>
      <Container>
        <MainSection1 />
        <MainSection2 />
        <MainSection3 />
        <MainSection4 />
        <MainSection5 />
        <MainBlueBox />
      </Container>
    </WrapperLayout>
  );
}

Index.getInitialProps = async () => {
  return {};
};

const Container = styled.div`
  .section {
    .txtBox {
      h2 {
        font-size: 40px;
        color: #333;
        line-height: 1.2em;
        margin-bottom: 15px;
      }
      p {
        font-size: 20px;
        line-height: 1.4em;
        color: #333;
        &.gray {
          color:#888;
        }
      }
      
      @media screen and (max-width: 1024px) {
        h2 {
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .infoBox {
      .txtBox {
        margin-bottom: 60px;
        padding-bottom: 60px;
        border-bottom: 1px dashed rgba(149, 149, 149, 0.3);
        @media screen and (max-width: 1200px) {
          margin-bottom: 30px;
          padding-bottom: 30px;
        }
      }
    }
    .linksBox {
      display: flex;
      align-items: center;
      .col {
        padding-top: 115px;
        flex: 1;
        h3 {
          font-size: 20px;
          color: #666;
          margin-bottom: 10px;
        }
        p {
          font-size: 16px;
          color: #999;
          margin-bottom: 25px;
          line-height: 1.4em;
        }
        a {
          display: inline-block;
          font-size: 14px;
          color: #333;
          background: url('../images/arrow_right.png') no-repeat right center;
          padding-right: 15px;
        }
      }
      @media screen and (max-width: 1200px) {
        align-items: flex-start;
        .col {
          display: block;
          padding-top: 0;
          padding-left: 80px;
          h3 {
            font-size: 15;
            font-weight: 500;
          }
          p {
            font-size: 13px;
            line-height: 1.3em;
          }
        }
      }
      @media screen and (max-width: 768px) {
        display: block;
      }
    }
  }
`;
