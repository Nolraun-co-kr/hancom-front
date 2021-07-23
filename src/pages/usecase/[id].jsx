import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import FootLink from '../../components/common/FootLink';
import UseCaseInfo from '../../containers/usecase/UseCaseInfo';
import styled from 'styled-components';

export default function UseCaseDetail() {
  return (
    <WrapperLayout>
      <Container>
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
                        문서를 메일로 공유하고 수신확인함을 뒤져본적 있나요? 메일이 잘 갔을까?
                        문서는 보았을까? 수시로 메일함을 들락거려 본적이 있다면 이제는 한컴OK싸인을
                        통해 문서를 공유해보세요. 누가 언제 무엇을 했는지 추적 및 확인, 저장이
                        가능합니다.
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
                        문서를 메일로 공유하고 수신확인함을 뒤져본적 있나요? 메일이 잘 갔을까?
                        문서는 보았을까? 수시로 메일함을 들락거려 본적이 있다면 이제는 한컴OK싸인을
                        통해 문서를 공유해보세요. 누가 언제 무엇을 했는지 추적 및 확인, 저장이
                        가능합니다.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <FootLink />
          </div>
        </div>
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .customer-guide--detail {
    .content {
      padding: 0;
    }
    .section1 {
      padding-bottom: 100px;
      .wrap {
        max-width: 1016px;
      }
      @media screen and (max-width: 1024px) {
        padding-bottom: 0;
      }
    }
    .section2 {
      background: url('../images/cgdetail-bg.png') no-repeat center;
      background-size: cover;
      padding: 100px 0;
      .title {
        margin-bottom: 40px;
        text-align: center;
        h3 {
          font-size: 56px;
          color: #333;
          line-height: 1.3em;
          margin-bottom: 10px;
        }
        p {
          font-size: 24px;
          color: rgba(51, 51, 51, 0.7);
          line-height: 1.3em;
        }
      }
      ul {
        display: flex;
        justify-content: center;
        li {
          width: 390px;
          margin: 0 13px;
          border: 1px solid #ededed;
        }
        .img {
          height: 220px;
          img {
            width: 100%;
          }
        }
        .txt {
          padding: 0 24px 30px 24px;
          background: #fff;
          span {
            display: flex;
            font-size: 14px;
            color: #0090ff;
            width: 103px;
            height: 36px;
            background: #0090ff;
            border-radius: 1.5em;
            color: #fff;
            justify-content: center;
            align-items: center;
            margin-top: -18px;
            position: relative;
            z-index: 99;
            margin-bottom: 20px;
          }
          h4 {
            font-size: 24px;
            color: #333;
            font-weight: 500;
            line-height: 1.3em;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            color: #666;
            line-height: 1.8em;
          }
        }
      }
      @media screen and (max-width: 1024px) {
        background: url('../images/cgdetail-bg-m.png') no-repeat left top #fafafa;
        background-size: 187px auto;
        padding: 50px 0;
        .title {
          margin-bottom: 15px;
          h3 {
            font-size: 24px;
          }
          p {
            font-size: 13px;
          }
        }
        ul {
          flex-direction: column;
          li {
            width: 100%;
            margin: 0;
            margin-bottom: 18px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .img {
            height: auto;
          }
          .txt {
            padding: 0 24px 30px 24px;
            h4 {
              font-size: 18px;
            }
            p {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`;
