import React, { useCallback, useState } from 'react';

function MultipleHeader() {
  return (
    <>
      <h2>다양한 기능</h2>
      <h3>
        전자서명을 보다 편리하게 해주는 <br />
        다양한 기능들을 확인해 보세요.
      </h3>
      <p>*구독 등급에 따라 각 기능 제공 여부 및 사용량 등이 달라 집니다.</p>
    </>
  );
}

export default function Multiple() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClickSetTab = useCallback(idx => setTabIndex(idx), [tabIndex]);
  return (
    <div className="section section4 pdCom">
      <div className="wrap">
        <div className="tab-wrap">
          <div className="tab-item">
            <div className="img">
              <div className="tit m-show">
                <MultipleHeader />
              </div>
              <img src={`/images/function-${1}.png`} alt="" />
            </div>
            <div className="info">
              <div className="tit">
                <MultipleHeader />
              </div>
              <div className="tab-buttonWrap">
                <div className={`tab-button function1 ${tabIndex === 0 && 'active'}`}>
                  <button className="button" onClick={() => handleClickSetTab(0)}>
                    파일 첨부 기능
                  </button>
                  {tabIndex === 0 && <p>전자서명에 필요한 파일을 첨부할 수 있습니다.</p>}
                </div>
                <div className={`tab-button function2 ${tabIndex === 1 && 'active'}`}>
                  <button className="button" onClick={() => handleClickSetTab(1)}>
                    양식문서 생성 및 관리
                  </button>
                  {tabIndex === 1 && (
                    <p>자주쓰는 양식을 PDF 템플릿으로 생성 후 재사용 할 수 있습니다.</p>
                  )}
                </div>
                <div className={`tab-button function3 ${tabIndex === 2 && 'active'}`}>
                  <button className="button" onClick={() => handleClickSetTab(2)}>
                    맞춤 e-Mail
                  </button>
                  {tabIndex === 2 && (
                    <p>회사 로고 및 이름 등을 고객이 원하는대로 변경할수 있습니다.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
