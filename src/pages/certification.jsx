import React from 'react';
import WrapperLayout from '../components/WrapperLayout';
import FootLink from '../components/common/FootLink';
import Visual from '../components/common/Visual';

export default function Certification() {
  return (
    <WrapperLayout>
      <div className="container sub security security--certified">
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

        <div className="certified__top">
          <div className="wrap">
            <div className="img">
              <img src="/images/certified.png" alt="" />
            </div>
            <div className="txt">
              <div className="certified__tit">계약, 서명 행위 및 당사자 증명</div>
              <div className="desc">
                <h4>감사 추적 인증서</h4>
                <p>
                  한컴OK싸인은 서명 진행에 있어 주요 행위 발생 시점마다 타임스템프, 행위, email,
                  서명 모드, IP, 기기정보, 브라우저 정보에 대한 로그가 기록 됩니다. 본 내용은
                  한컴OK싸인 Tasks 페이지에서 확인 가능하며 email로 발송도 가능합니다.
                </p>

                <p>
                  한컴OK싸인의 감사추적 인증서에 기록된 내용으로 서명자가 한 모든 행위를 증명할 수
                  있으며 이는 법적인 근거로 사용이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="certified__bottom">
          <div className="wrap">
            <div className="txt">
              <div className="certified__tit">본인 인증(서명자 인증)</div>
              <ul>
                <li>
                  <div className="method__tit">
                    <span>1</span>
                    <p>이메일 인증</p>
                  </div>
                  <div className="method__desc">
                    서명 요청자가 지정한 서명자 소유의 이메일로만 서명 요청 메일이 발송되며, 이는
                    초당 1억회 이상의 경우의 수로 임의로 생성되어 타인의 접속을 차단하여 보호합니다.
                  </div>
                </li>
                <li>
                  <div className="method__tit">
                    <span>2</span>
                    <p>접근 암호 인증(OTP) 인증</p>
                  </div>
                  <div className="method__desc">
                    서명자가 문서를 확인하기 위해서 email이나 SMS로 전송되는 1회용 암호를 입력 해야
                    합니다. 1회용 암호는 10분동안 유효하여 타인의 부정 사용을 방지 합니다.
                  </div>
                </li>
                <li>
                  <div className="method__tit">
                    <span>3</span>
                    <p>공동, 카카오 본인 인증</p>
                  </div>
                  <div className="method__desc">
                    공동 인증을 통해 법적으로 보장된 본인 인증 진행이 가능 합니다.
                    <br />
                    카카오 인증을 통해 간편한 본인 인증을 할수 있어 보다 간편하고 확실하게 서명자를
                    확인할 수 있습니다.
                  </div>
                </li>
                <li>
                  <div className="method__tit">
                    <span>4</span>
                    <p>기타 인증</p>
                  </div>
                  <div className="method__desc">내용 업데이트 예정 입니다.</div>
                </li>
              </ul>
            </div>
            <div className="img">
              <img src="/images/graybox.png" alt="" />
            </div>
          </div>
        </div>

        <FootLink />
      </div>
    </WrapperLayout>
  );
}
