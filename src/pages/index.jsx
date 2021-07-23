import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import styled from 'styled-components';
import MainSection1 from '../components/main/MainSection1';
import MainSection2 from '../components/main/MainSection2';
import MainSection3 from '../components/main/MainSection3';
import MainSection4 from '../components/main/MainSection4';
import MainSection5 from '../components/main/MainSection5';

export default function Index() {
  return (
    <WrapperLayout>
      <Container>
        <MainSection1 />
        <MainSection2 />
        <MainSection3 />
        <MainSection4 />
        <MainSection5 />

        <BlueBox>
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
        </BlueBox>
      </Container>
    </WrapperLayout>
  );
}

Index.getInitialProps = async () => {
  return {};
};

const BlueBox = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background: #2e5fd8;
  &.small {
    .txtBox {
      h2 {
        font-size: 56px;
        margin-top: 0;
      }
    }
  }
  .txtBox {
    text-align: center;
    h3 {
      font-size: 20px;
      color: #fff;
      font-weight: 500;
    }
    h2 {
      font-size: 64px;
      color: #fff;
      font-weight: 500;
      margin: 20px 0;
    }
    p {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 40px;
      line-height: 1.5em;
    }
    a {
      font-size: 20px;
      color: #fff;
      width: 245px;
      height: 58px;
      border: 1px solid #fff;
      border-radius: 1.4em;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
    .txtBox {
      h2 {
        font-size: 30px;
      }
      p {
        font-size: 18px;
      }
      a {
        width: 182px;
        height: 44px;
        font-size: 16px;
      }
    }
    &.small {
      .txtBox {
        h2 {
          font-size: 30px;
          margin-top: 0;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
    .txtBox {
      h3 {
        font-size: 14px;
      }
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
      a {
        width: 182px;
        height: 44px;
        font-size: 16px;
      }
    }
    &.small {
      .txtBox {
        h2 {
          font-size: 24px;
          margin-top: 0;
        }
      }
    }
  }
`;
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
        color: #999;
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
        flex-direction: column;
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
    }
  }
`;
