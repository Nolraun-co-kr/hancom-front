import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

function AuthInfoHeader() {
  return (
    <>
      <h2>손쉬운 사용자 인증</h2>
      <h3>
        카카오 알림톡, e-Mail, SMS등 다양한 방법으로 전자서명을 손쉽게 요청하고 사용자 인증을 진행할
        수 있습니다.
      </h3>
      <p>*구독 등급에 따라 각 기능 제공 여부 및 사용량 등이 달라 집니다.</p>
    </>
  );
}

export default function AuthInfo() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClickSetTab = useCallback(idx => setTabIndex(idx), [tabIndex]);
  return (
    <Container>
      <div className="section section2 pdCom">
        <div className="wrap">
          <div className="tab-wrap">
            <div className="tab-item">
              <div className="img">
                <div className="tit m-show">
                  <AuthInfoHeader />
                </div>
                <img src={`/images/certified-${tabIndex + 1}.png`} alt="" />
              </div>
              <div className="info">
                <div className="tit">
                  <AuthInfoHeader />
                </div>
                <div className="tab-buttonWrap">
                  <div className={`tab-button certified1 ${tabIndex === 0 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(0)}>
                      SMS 인증 및 알림
                    </button>
                    {tabIndex === 0 && (
                      <p>SMS로 서명자 추가 인증 및 서명 요청 알림 발송이 가능 합니다.</p>
                    )}
                  </div>
                  <div className={`tab-button certified2 ${tabIndex === 1 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(1)}>
                      카카오 알림톡
                    </button>
                    {tabIndex === 1 && (
                      <p>별도의 가입 없이 카카오톡에서 계약서 확인 및 전자서명을 할 수 있습니다.</p>
                    )}
                  </div>
                  <div className={`tab-button certified3 ${tabIndex === 2 && 'active'}`}>
                    <button className="button" onClick={() => handleClickSetTab(2)}>
                      e-Mail 인증 및 대량발송
                    </button>
                    {tabIndex === 2 && (
                      <p>e-Mail로 서명자 추가인증 및 200건 이상 대량 전송이 가능 합니다.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .section2 {
    background: url('../images/main_section-4_bg.png') no-repeat center;
    background-size: cover;
  }
`;
