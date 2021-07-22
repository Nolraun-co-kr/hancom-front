import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import Visual from '../components/common/Visual';
import FootLink from '../components/common/FootLink';

export default function Certification() {
  return (
    <WrapperLayout>
      <>
        <div className="container sub security">
          <Visual
            type={'m-type1'}
            title={'보안 & 법률정보'}
            description={'공인된 법적 효력을 가진 전자계약 서비스 안심하고 사용하세요.'}
          />
          <div className="security__title">
            <div className="wrap">
              <h3>
                전자계약과 전자서명의
                <br />
                법적 효력을 확인하세요.
              </h3>
              <p>종이계약, 자필서명과 동일한 법적 효력을 가지고 있습니다.</p>
            </div>
          </div>
          <div className="security__bill">
            <div className="wrap">
              <div className="tit">전자서명, 전자계약 관련 법안</div>
              <div className="row">
                <i>
                  <img src="/images/bill-01.png" alt="" />
                </i>
                <div className="txt">
                  <h4>민법(낙성불요식 계약원칙)</h4>
                  <p>
                    한국 민법에서는 별도의 형식 요구 없이 당사자간의 약정(합의)만으로 계약의 성립을
                    인정하는 낙성불요식 의 원칙을 따르고 있습니다. 다시 말해, 계약 당사자가 계약
                    내용에 대해서 동의했다는 사실을 증명할 수 있으면 그 형태가 무엇이든 법적 효력이
                    인정됩니다. 종이 계약서는 계약 내용에 대해 증명할 수 있는 증거 중 하나입니다.
                    약식으로 작성된 종이쪽지, 음성 녹음 파일 또한 계약 내용을 증명이 가능하면 법적
                    효력이 종이 계약서와 동일 하게 인정 됩니다.
                  </p>

                  <p>
                    한컴OK싸인은 계약 행위에 대한 추적이 가능한 감사추적인증서를 제공하고 SMS,
                    이메일, 일회용 OTP 접근 암호 발급으로 본인 인증을 진행해 서명 및 계약에 대한
                    증명이 가능하여 보다 확실한 법적 효력을 가집니다.
                  </p>
                </div>
              </div>
              <div className="row">
                <i>
                  <img src="/images/bill-02.png" alt="" />
                </i>
                <div className="txt">
                  <h4>전자서명법</h4>
                  <p>
                    <strong>-전자서명법 제3조제1항 : </strong>
                    <br />
                    전자서명은 전자적 형태라는 이유만으로 서명, 서명날인 또는 기명날인으로서의
                    효력이 부인되지 아니한다.
                  </p>
                  <p>
                    <strong>-전자서명법 제3조제2항 : </strong>
                    <br />
                    법령의 규정 또는 당사자 간의 약정에 따라 서명, 서명날인 또는 기명날인의 방식으로
                    전자서명을 선택한 경우 그 전자서명은 서명, 서명날인 또는 기명날인으로서의 효력을
                    가진다.
                  </p>
                  <p>
                    한컴OK싸인에서는 실제 서명과 동일한 법적 효력을 가진 전자서명이 제공 됩니다.
                  </p>
                </div>
              </div>
              <div className="row">
                <i>
                  <img src="/images/bill-03.png" alt="" />
                </i>
                <div className="txt">
                  <h4>전자문서 및 전자거래 기본법</h4>
                  <p>
                    <strong>-전자문서 및 전자거래 기본법 제4조제1항</strong>
                    <br />
                    전자문서는 전자적 형태로 되어 있다는 이유만으로 법적 효력이 부인되지 아니한다.
                  </p>
                  <p>
                    <strong> -전자문서 및 전자거래 기본법 제4조의2</strong>
                    <br />
                    전자문서가 다음 각 호의 요건을 모두 갖춘 경우에는 그 전자문서를 서면으로 본다.
                    다만, 다른 법령에 특별한 규정이 있거나 성질상 전자적 형태가 허용되지 아니하는
                    경우에는 서면으로 보지 아니한다.
                  </p>
                  <div className="depth">
                    <p>1. 전자문서의 내용을 열람할 수 있을 것</p>
                    <p>
                      2. 전자문서가 작성ㆍ변환되거나 송신ㆍ수신 또는 저장된 때의 형태 또는 그와 같이
                      재현될 수 있는 형태로 보존되어 있을 것
                    </p>
                  </div>
                  <p>
                    한컴OK싸인의 전자문서는 열람이 가능한 PDF 파일의 형태로 저장됩니다.
                    <br />
                    또한, 작성ㆍ변환되거나 송신ㆍ수신 또는 저장된 때의 형태 또는 그와 같이 재현될 수
                    있는 형태로 보존 되어 전자문서로서의 법적 효력이 인정됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="security__system">
            <div className="wrap">
              <div className="tit">
                한컴OK싸인만의
                <br />
                안전한 보안시스템
              </div>
              <ul>
                <li>
                  <i>
                    <img src="/images/system-01.png" alt="" />
                  </i>
                  <div className="txt">
                    <h4>Encrypted Process</h4>
                    <p>
                      서명 프로세스는 TLS / SSL, AES-256 및 RSA-2048로 암호화됩니다. 한컴OK싸인은
                      SSO를 활용하여 추가 보호를 제공합니다.
                    </p>
                  </div>
                </li>
                <li>
                  <i>
                    <img src="/images/system-02.png" alt="" />
                  </i>
                  <div className="txt">
                    <h4>Amazon web services</h4>
                    <p>
                      한컴OK싸인은 AWS 서버를 사용하여 사용자의 데이터를 보다 안전하게 보관 합니다.
                    </p>
                  </div>
                </li>
                <li>
                  <i>
                    <img src="/images/system-03.png" alt="" />
                  </i>
                  <div className="txt">
                    <h4>Advanced Security</h4>
                    <p>
                      AATL에서 발급 한 디지털 인증서는 CA 보호 서명자의 ID 인증 및 서명 유효성
                      검사를 승인합니다. 암호 확인 및 액세스 잠금은 무단 사용으로부터 계정을
                      이중으로 보호합니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <FootLink />
        </div>
      </>
    </WrapperLayout>
  );
}
