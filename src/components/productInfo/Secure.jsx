import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

function SecureHeader() {
  return (
    <>
      <h2>강력한 보안e</h2>
      <h3>강화된 보안 기능으로 보다 안전한 전자서명을 진행하세요.</h3>
      <p>*구독 등급에 따라 각 기능 제공 여부 및 사용량 등이 달라 집니다.</p>
    </>
  );
}

export default function Secure() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClickSetTab = useCallback(idx => setTabIndex(idx), [tabIndex]);
  return (
    <Container>
      <div className="section section5 pdCom">
        <div className="wrap">
          <div className="tab-wrap">
            <div className="tab-item">
              <div className="info">
                <div className="tit">
                  <SecureHeader />
                </div>
                <div className="tab-buttonWrap">
                  <div className={`tab-button security1 ${tabIndex === 0 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(0)}>
                      감사추적 인증서
                    </button>
                    {tabIndex === 0 && (
                      <p>
                        언제, 누가, 어떤 행위를 하였는지 감사추척 <br />
                        인증서를 통해 확인이 가능합니다.
                      </p>
                    )}
                  </div>
                  <div className={`tab-button security2 ${tabIndex === 1 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(1)}>
                      문서 보관 및 관리
                    </button>
                    {tabIndex === 1 && (
                      <p>안정적이고 안전한 AWS 서버에 고객님의 문서가 보관됩니다.</p>
                    )}
                  </div>
                  <div className={`tab-button security3 ${tabIndex === 2 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(2)}>
                      진본 확인 서비스
                    </button>
                    {tabIndex === 2 && (
                      <p>
                        Block-Chain 기반 진본확인 서비스로 문서의 <br />
                        위변조 여부를 확인할 수 있습니다.
                      </p>
                    )}

                    <p className="small">*Patch 1에서 제공 예정</p>
                  </div>
                </div>
              </div>
              <div className="img">
                <div className="tit m-show">
                  <SecureHeader />
                </div>
                <img src={`/images/security-${tabIndex + 1}.png`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .section5 {
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
