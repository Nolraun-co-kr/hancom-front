import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

function AllInOneHeader() {
  return (
    <>
      <h2>All-in One</h2>
      <h3>
        계약서 생성부터 전자서명 추척, 보관까지
        <br />
        간편하게 모든것을 관리할수 있습니다.
      </h3>
      <p>*구독 등급에 따라 각 기능 제공 여부 및 사용량 등이 달라 집니다.</p>
    </>
  );
}

export default function AllInOne() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClickSetTab = useCallback(idx => setTabIndex(idx), [tabIndex]);
  return (
    <Container>
      <div className="section section3 pdCom">
        <div className="wrap">
          <div className="tab-wrap">
            <div className="tab-item">
              <div className="info">
                <div className="tit">
                  <AllInOneHeader />
                </div>
                <div className="tab-buttonWrap">
                  <div className={`tab-button aio1 ${tabIndex === 0 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(0)}>
                      Tasks Board
                    </button>
                    {tabIndex === 0 && (
                      <p>Tasks board를 통해 각 계약의 진행 상태를 추적, 관리할 수 있습니다.</p>
                    )}
                  </div>
                  <div className={`tab-button aio2 ${tabIndex === 1 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(1)}>
                      재발송, 상태확인
                    </button>
                    {tabIndex === 1 && (
                      <p>
                        서명 상태 확인 및 요청 재발송 기능을 통해 <br />
                        서명을 독려해 빠른 계약 채결이 가능해 집니다.
                      </p>
                    )}
                  </div>
                  <div className={`tab-button aio3 ${tabIndex === 2 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(2)}>
                      검색, 정렬
                    </button>
                    {tabIndex === 2 && (
                      <p>키워드로 찾고 싶은 계약을 손쉽게 검색해 정렬 할 수 있습니다.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="img">
                <div className="tit m-show">
                  <AllInOneHeader />
                </div>
                <img src={`/images/aio-${tabIndex + 1}.png`} alt="" />
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
    .tab-item {
      .img {
        margin-right: 0;
        margin-left: 65px;
      }
    }
    @media screen and (max-width: 1300px) {
      .tab-item {
        .img {
          margin-left: 0;
          order: 1;
        }
        .info {
          order: 2;
        }
      }
    }
  }
`;
