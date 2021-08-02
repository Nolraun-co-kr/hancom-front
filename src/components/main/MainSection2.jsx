import React from 'react';
import styled from 'styled-components';

export default function MainSection2() {
  return (
    <Container>
      <div className="section section2">
        <div className="wrap">
          <div className="txtBox">
            <h2>All in One Solution</h2>
            <p className={'gray'}>
              전자서명을 보다 손쉽고 편리하게 많은 사람들이 다양한 분야에서
              <br />
              이용할 수 있게 하기위해 다양한 기술을 보유한 한글과컴퓨터가 한컴OK싸인을 만들었습니다.
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
    </Container>
  );
}

const Container = styled.div`
  .section2 {
    background: url('../images/main_section-2_bg.png') no-repeat center;
    background-size: cover;
    padding: 160px 0 140px;
    .txtBox {
      text-align: center;
      margin-bottom: 40px;
    }
    .videoBox {
      width: 65%;
      height: 440px;
      margin: 0 auto;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 1200px) {
      padding-top: 24%;
      .videoBox {
        width: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      padding-top: 24%;
      padding-bottom: 60px;
      .videoBox {
        width: 100%;
        height: 250px;
      }
    }
  }
`;
