import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import FootLink from '../../components/common/FootLink';
import UseCaseInfo from '../../containers/usecase/UseCaseInfo';

export default function UseCaseDetail() {
  return (
    <WrapperLayout>
      <div className="container sub customer-guide customer-guide--detail">
        <div className="content">
          <div className="section section1">
            <div className="wrap">
              <UseCaseInfo />
            </div>
          </div>
          <div className="section section2">
            <div className="wrap">
              <div className="title">
                <h3>활용 백서!!</h3>
                <p>
                  이렇게 쓸데가 많은데…
                  <br />
                  한컴OK싸인을 계약할때만 쓴다구요??
                </p>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/images/application-1.png" alt="" />
                  </div>
                  <div className="txt">
                    <span>활용방법 1</span>
                    <h4>문서를 공유할때!</h4>
                    <p>
                      문서를 메일로 공유하고 수신확인함을 뒤져본적 있나요? 메일이 잘 갔을까? 문서는
                      보았을까? 수시로 메일함을 들락거려 본적이 있다면 이제는 한컴OK싸인을 통해
                      문서를 공유해보세요. 누가 언제 무엇을 했는지 추적 및 확인, 저장이 가능합니다.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/images/application-2.png" alt="" />
                  </div>
                  <div className="txt">
                    <span>활용방법 2</span>
                    <h4>팀원의 업무 F/U 및 관리툴로 사용</h4>
                    <p>
                      문서를 메일로 공유하고 수신확인함을 뒤져본적 있나요? 메일이 잘 갔을까? 문서는
                      보았을까? 수시로 메일함을 들락거려 본적이 있다면 이제는 한컴OK싸인을 통해
                      문서를 공유해보세요. 누가 언제 무엇을 했는지 추적 및 확인, 저장이 가능합니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <FootLink />
        </div>
      </div>
    </WrapperLayout>
  );
}
