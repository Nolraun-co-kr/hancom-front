import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUsecaseRequest } from '../../redux/actions/usecase';
import styled from 'styled-components';

export default function UseCaseInfo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { usecaseDetail } = useSelector(state => state.usecase);

  const {
    query: { id },
  } = router;
  useEffect(() => {
    if (id) {
      dispatch(
        getOneUsecaseRequest({
          id,
        }),
      );
    }
  }, [id]);

  return (
    <Container>
      <div className="post__top">
        <div className="post__title">
          <h3>
            블로그 제목 영역 입니다.블로그 제목 영역 입니다.블로그 제목 영역 입니다.블로그 제목 영역
            입니다.
          </h3>
          <div className="userInfo">
            <div className="thumb">
              <img src="/images/user.png" alt="" />
            </div>
            <span className="userName">hancomkim_1234</span>
            <span className="date">2021. 05. 12</span>
          </div>
        </div>
      </div>
      <div className="post__bottom">
        <div className="imgarea">
          <div className="img">
            <img src="/images/post-1.png" alt="" />
          </div>
          <div className="info">
            <div className="col">
              <p>Industry</p>
              <h4>Software</h4>
            </div>
            <div className="col">
              <p>Purpose</p>
              <h4>Contract</h4>
            </div>
            <div className="col">
              <p>Company Size</p>
              <h4>400+</h4>
            </div>
          </div>
        </div>
        <div className="txtarea">
          Rakuten is the largest eCommerce company in Japan, and the third-largest eCommerce
          marketplace company worldwide. Rakuten Super Logistics is the complete supply chain
          solution for eCommerce retailers, from dock to doorstep. Its eCommerce fulfillment
          services include full-service freight management, multichannel order fulfillment, and
          return management for online orders.
          <strong>The Problem </strong>
          In 2015, the Rakuten Super Logistics sales team was relying on a whole host of tools just
          to complete the simple action of creating a document. It was tedious, time-consuming, and
          provided a less-than-streamlined customer experience. Their situation was not unlike that
          of other teams we’ve seen before they’ve discovered PandaDoc. There were a lot of
          Microsoft Documents involved, a lot of repetitive data entry, and a few human errors on
          Rakuten Super Logistics’s end. On the customer’s end, the process of proofing the docs
          they were sent, getting any changes resolved, printing, signing, and scanning or mailing
          them back was a hassle. Director of Sales, Jonathan Grospe knew there was room for
          improvement within his team’s processes. Aside from the issues experienced by the Rakuten
          Super Logistics sales team, other departments within org were struggling with their own
          document workflows. The Customer Success team had started its expansion and was looking
          for a simpler, more effective way to send documents and information to new hires. The team
          overseeing customer warehouse visits was looking for the same thing when it came to
          sending out liability waivers and NDAs to guests.
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .post__top {
    padding-top: 135px;
    position: relative;
    &::after {
      content: '';
      background: url('../images/quote.png') no-repeat left center;
      background-size: contain;
      width: 200px;
      height: 200px;
      z-index: -1;
      position: absolute;
      left: -120px;
      top: 50px;
    }
    @media screen and (max-width: 1024px) {
      padding-top: 125px;
      &::after {
        width: 76px;
        height: 76px;
        left: 0px;
      }
    }
  }
  .post__title {
    padding-bottom: 70px;
    margin-bottom: 70px;
    border-bottom: 1px solid #111;
    h3 {
      font-size: 40px;
      color: #111;
      margin-bottom: 24px;
      line-height: 1.3em;
    }
    @media screen and (max-width: 1024px) {
      padding-bottom: 30px;
      margin-bottom: 30px;
      h3 {
        font-size: 20px;
        line-height: 1.3em;
        margin-bottom: 20px;
      }
    }
  }

  .post__bottom {
    .imgarea {
      margin-bottom: 80px;
      img {
        width: 100%;
      }
      .info {
        margin-top: 24px;
        display: flex;
        align-items: center;
        .col {
          padding: 0 19px;
          border-left: 1px solid #e1e1e1;
          width: 300px;
        }
        p {
          font-size: 16px;
          color: #999;
          line-height: 1.3em;
          margin-bottom: 4px;
        }
        h4 {
          color: #333;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3em;
        }
      }
    }
    .txtarea {
      white-space: pre-line;
      font-size: 16px;
      color: #666;
      line-height: 1.8em;
      strong {
        font-weight: 600;
      }
    }
    @media screen and (max-width: 1024px) {
      .imgarea {
        margin-bottom: 25px;
        .info {
          margin-top: 15px;
          flex-direction: column;
          .col {
            width: 100%;
            padding-bottom: 30px;
            &:last-child {
              padding-bottom: 0;
            }
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      .imgarea {
        .info {
          p {
            font-size: 13px;
          }
          h4 {
            font-size: 15px;
          }
        }
      }
      .txtarea {
        font-size: 14px;
      }
    }
  }

  .userInfo {
    display: flex;
    align-items: center;
    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 8px;
    }
    span {
      font-size: 14px;
      color: #111;
      &.userName {
        padding-right: 15px;
        margin-right: 15px;
        position: relative;
        &::after {
          content: '';
          width: 4px;
          height: 4px;
          background: #c4c4c4;
          border-radius: 50%;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &.date {
        color: #c4c4c4;
      }
    }
  }
`;
