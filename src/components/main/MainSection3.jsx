import React from 'react';
import styled from 'styled-components';

export default function MainSection3() {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  .section3 {
    padding-top: 100px;
    padding-bottom: 100px;
    .wrap {
      display: flex;
      align-items: center;
    }
    .col {
      &:first-child {
        background: url('../images/hancomoffice.png') no-repeat left top;
      }
      &:last-child {
        background: url('../images/hancomoffice-2.png') no-repeat left top;
      }
    }
    .imgBox {
      max-width: 600px;
      @media screen and (max-width: 768px) {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      padding-top: 50px;
      padding-bottom: 0px;
      .wrap {
        flex-direction: column;
      }
      .imgBox {
        order: 2;
      }
      .infoBox {
        order: 1;
        width: 100%;
      }
      .col {
        &:first-child {
          background: url('../images/hancomoffice.png') no-repeat left top;
          background-size: 72px auto;
          margin-bottom: 30px;
        }
        &:last-child {
          background: url('../images/hancomoffice-2.png') no-repeat left top;
          background-size: 72px auto;
        }
      }
    }
  }
`;
