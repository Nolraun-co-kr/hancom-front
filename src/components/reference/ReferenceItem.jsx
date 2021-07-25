import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export default function ReferenceItem({ data }) {
  return (
    <Container>
      <div className="referenceitem">
        <div className="img">
          <img src="/images/reference_dummy.png" alt="" />
        </div>
        <div className="txt">
          <h4>{data?.title}</h4>
          <p>{data?.desc}</p>
          <Link href={'/reference/1'}>
            <a>자세히보기</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.li`
  padding: 0 11px;
  width: calc(100% / 3);
  margin-bottom: 40px;
  .referenceitem {
    min-height: 380px;
    border: 1px solid #ededed;
    .img {
      height: 208px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .txt {
      padding: 20px 15px;
      h4 {
        font-size: 20px;
        color: #333;
        font-weight: 500;
        margin-bottom: 5px;
      }
      p {
        font-size: 16px;
        color: rgba(51, 51, 51, 0.7);
        margin-bottom: 25px;
        line-height: 1.5em;
      }
      a {
        display: inline-block;
        font-size: 14px;
        color: #333;
        padding-right: 15px;
        background: url('../images/arrow_right.png') no-repeat right center;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 0;
    width: calc(50% - 5px);
    margin-bottom: 20px;
    &:nth-child(2n) {
      margin-left: 10px;
    }
    .referenceitem {
      min-height: auto;
      .img {
        height: 200px;
      }
      .txt {
        h4 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        p {
          font-size: 13px;
          margin-bottom: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 0;
    width: calc(50% - 5px);
    margin-bottom: 20px;
    &:nth-child(2n) {
      margin-left: 10px;
    }
    .referenceitem {
      min-height: auto;
      .img {
        height: 200px;
      }
      .txt {
        h4 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        p {
          font-size: 13px;
          margin-bottom: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 !important;
    margin-bottom: 10px !important;
  }
`;
