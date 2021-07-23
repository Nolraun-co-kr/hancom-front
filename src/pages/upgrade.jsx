import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import EnterPriceTop from '../components/enterprise/EnterPriceTop';
import styled from 'styled-components';

export default function Upgrade() {
  return (
    <WrapperLayout>
      <Container>
        <div className="container sub enterprise">
          <div className="enterprise__inn">
            <EnterPriceTop />
            <div className="enterprise__cont">
              <div className="wrap">
                <ul className="changeList">
                  <li>
                    <div className="inn">
                      <div className="img"></div>
                      <div className="tit">STARTER</div>
                      <div className="txt">
                        Wir und unsere Partner setzen Cookies ein, um t3n.de stetig für dich zu
                        verbessern und unsere (überwiegend für dich kostenlosen) Inhalte zu
                        monetarisieren. Um die korrekte Funktion von t3n.de gewährleisten zu können,
                        setzen wir einige technisch notwenige Cookies (z.B. für unsere eigene
                        Schrift, damit die Webseite so aussieht wie du es gewohnt bist). Es ist
                        möglich, dass Daten außerhalb des EWR verarbeitet, Nutzungsprofile gebildet
                        und mit Daten von anderen Webseiten angereichert werden.
                      </div>
                      <a href="">변경 하기</a>
                    </div>
                  </li>
                  <li>
                    <div className="inn">
                      <div className="img"></div>
                      <div className="tit">BUSINESS</div>
                      <div className="txt">
                        Wir und unsere Partner setzen Cookies ein, um t3n.de stetig für dich zu
                        verbessern und unsere (überwiegend für dich kostenlosen) Inhalte zu
                        monetarisieren. Um die korrekte Funktion von t3n.de gewährleisten zu können,
                        setzen wir einige technisch notwenige Cookies (z.B. für unsere eigene
                        Schrift, damit die Webseite so aussieht wie du es gewohnt bist). Es ist
                        möglich, dass Daten außerhalb des EWR verarbeitet, Nutzungsprofile gebildet
                        und mit Daten von anderen Webseiten angereichert werden.
                      </div>
                      <a href="">변경 하기</a>
                    </div>
                  </li>
                  <li>
                    <div className="inn">
                      <div className="img"></div>
                      <div className="tit">PREMIUM</div>
                      <div className="txt">
                        Wir und unsere Partner setzen Cookies ein, um t3n.de stetig für dich zu
                        verbessern und unsere (überwiegend für dich kostenlosen) Inhalte zu
                        monetarisieren. Um die korrekte Funktion von t3n.de gewährleisten zu können,
                        setzen wir einige technisch notwenige Cookies (z.B. für unsere eigene
                        Schrift, damit die Webseite so aussieht wie du es gewohnt bist). Es ist
                        möglich, dass Daten außerhalb des EWR verarbeitet, Nutzungsprofile gebildet
                        und mit Daten von anderen Webseiten angereichert werden.
                      </div>
                      <a href="">변경 하기</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .enterprise {
    .enterprise__inn {
      padding: 30px 0 100px;
      @media screen and (max-width: 1024px) {
        padding: 0 0 50px;
      }
    }

    .content {
      margin-bottom: 60px;
      @media screen and (max-width: 1024px) {
        margin-bottom: 50px;
        .wrap {
          padding: 0;
        }
      }
    }
  }
  .changeList {
    display: flex;
    margin: 0 -13px;
    li {
      flex: 1;
      padding: 0 13px;
    }
    .inn {
      border: 1px solid #ededed;
      padding: 40px 24px 50px 24px;
      min-height: 614px;
      display: flex;
      flex-direction: column;
    }
    .img {
      width: 60px;
      height: 60px;
      background: #c4c4c4;
      margin-bottom: 6px;
    }
    .tit {
      font-size: 40px;
      color: #000;
      line-height: 1.5em;
      font-weight: 300;
      margin-bottom: 16px;
    }
    .txt {
      font-size: 16px;
      color: #888;
      line-height: 1.5em;
    }
    a {
      display: inline-block;
      border-radius: 4px;
      width: 100%;
      height: 51px;
      color: #fff;
      background: #4679f6;
      font-size: 16px;
      text-align: center;
      line-height: 51px;
      margin-top: auto;
    }
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      margin: 0;
      li {
        padding: 0;
        margin-bottom: 16px;
      }
      .inn {
        padding: 40px 24px;
        min-height: auto;
      }
      .tit {
        font-size: 20px;
      }
      .txt {
        font-size: 13px;
        margin-bottom: 40px;
      }
    }
  }
`;
