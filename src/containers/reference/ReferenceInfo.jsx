import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneReferenceRequest } from '../../redux/actions/reference';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ReferenceForm from '../../components/reference/ReferenceForm';

export default function ReferenceInfo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { referenceDetail } = useSelector(state => state.reference);

  const {
    query: { id },
  } = router;
  useEffect(() => {
    if (id) {
      dispatch(
        getOneReferenceRequest({
          id,
        }),
      );
    }
  }, [id]);
  return (
    <Container>
      <div className="referencedetail">
        <div className="detail__top">
          <div className="wrap">
            <div className="img">
              <img src="/images/detail-img.png" alt="" />
            </div>
            <div className="info">
              <div className="title">
                <span>거래 (물건/금전)</span>
                <h3>거래약정서 : 2021년 개정판</h3>
              </div>

              <ReferenceForm />
            </div>
          </div>
        </div>
        <div className="detail__bottom">
          <div className="wrap">
            <h3>[계약서 해설 요약]</h3>
            <p>
              사용자는 근로계약 기간의 정함이 없는 근로자를 채용할 경우 근로기준법 제 17조에 따라
              정규직근로계약서를 작성하고 근로자에게 1부를 반드시 교부하여야 합니다.
            </p>
            <p>
              정규직근로계약서에는 근로기준법 제 17조에서 반드시 명시해야하는 근로조건의 내용,
              이외에 수습시간, 비밀유지의무, 근로계약 해지사유 등 회사에서 필요한 사항들을
              노무법인의 검수를 통해 포함하였습니다
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .referencedetail {
    padding: 100px 0;
    .detail__top {
      padding-bottom: 60px;
      margin-bottom: 60px;
      border-bottom: 1px solid #e1e1e1;
      .wrap {
        display: flex;
      }
      .img {
        width: 600px;
        flex: none;
        margin-right: 64px;
      }
      .info {
        flex: 1;
        .title {
          margin-bottom: 40px;
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #fff;
            width: 136px;
            height: 38px;
            background: #fca43d;
            margin-bottom: 20px;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
            border-radius: 1.5em;
          }
          h3 {
            font-size: 32px;
            color: #333;
          }
        }
      }
      .usebtn {
        width: 100%;
        font-size: 24px;
        color: #fff;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: #4679f6;
      }
    }
    .detail__bottom {
      h3 {
        font-size: 16px;
        color: #666;
        font-weight: 600;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        color: #666;
        line-height: 1.5em;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      padding: 50px 0;
      padding-bottom: 40px;
      margin-bottom: 0px;
      .detail__top {
        .img {
          width: 500px;
          margin-right: 30px;
          img {
            width: 100%;
          }
        }
      }
    }
    @media screen and (max-width: 1024px) {
      .wrap {
        flex-direction: column;
      }
      .detail__top {
        .img {
          width: 100%;
          margin-right: 0;
          margin-bottom: 20px;
          img {
            width: 100%;
          }
        }
        .info {
          flex: 1;
          .title {
            margin-bottom: 40px;
            span {
              font-size: 13px;
              color: #fff;
              width: 132px;
              height: 36px;
              margin-bottom: 12px;
              box-shadow: none;
            }
            h3 {
              font-size: 20px;
            }
          }
        }
        .usebtn {
          font-size: 15px;
          height: 47px;
        }
      }
      .detail__bottom {
        h3 {
          font-size: 13px;
          color: #666;
          font-weight: 600;
          margin-bottom: 10px;
        }
        p {
          font-size: 13px;
          color: #666;
          line-height: 1.5em;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
