import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import FootLink from '../../components/common/FootLink';
import ReferenceInfo from '../../containers/reference/ReferenceInfo';
import { useRouter } from 'next/router';
import styled from 'styled-components';
export default function ReferenceDetail() {
  return (
    <WrapperLayout>
      <Container>
        <div className="container sub product product--reference">
          <ReferenceInfo />
          <FootLink />
        </div>
      </Container>
    </WrapperLayout>
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

  // form
  .form__row {
    margin-bottom: 40px;
    &.mb-0 {
      margin-bottom: 0;
    }
    @media screen and (max-width: 1024px) {
      margin-bottom: 17px;
    }
  }
  .form__tit {
    font-size: 14px;
    color: #333;
    margin-bottom: 6px;
    span {
      color: #ff5353;
    }
  }
  .form__input {
    width: 100%;
    height: 48px;
    border: 1px solid #e1e1e1;
    border-radius: 0.5em;
    input {
      width: 100%;
      height: 100%;
      padding: 0 16px;
      font-size: 18px;
      color: #333;
      box-sizing: border-box;
      &::placeholder {
        color: #999;
      }
    }
    @media screen and (max-width: 1024px) {
      height: 38px;
      input {
        font-size: 13px;
        padding: 0 10px;
      }
    }
  }

  .checkbox {
    margin-top: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    input + span {
      width: 20px;
      height: 20px;
      border-radius: 0.3em;
      border: 1px solid #c6c6c6;
      margin-right: 10px;
    }
    input:checked + span {
      background: url('../images/check.png') no-repeat center;
    }
    p {
      color: #666;
      font-size: 14px;
      font-weight: 500;
    }
    @media screen and (max-width: 1024px) {
      p {
        font-size: 12px;
      }
    }
  }
`;
