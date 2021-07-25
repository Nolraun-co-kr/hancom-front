import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export default function UseCaseItem() {
  return (
    <Container>
      <div className="inner">
        <div className="img">
          <img src="/images/customer-dummy.png" alt="" />
        </div>
        <div className="txt">
          <p>한컴OK싸인한컴OK싸인한컴OK싸인한컴OK싸인한컴OK싸인한컴OK싸인</p>
          <h3>
            이렇게 활용해 보세요.이렇게 활용해 보세요.이렇게 활용해 보세요.이렇게 활용해 보세요
          </h3>
          <Link href={'/usecase/1'}>
            <a>자세히보기</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.li`
  padding: 0 13px;
  width: 33.333%;
  margin-bottom: 20px;
  .inner {
    border: 1px solid #ededed;
    &:hover {
      background: #fff;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .img {
    height: 240px;
    border-bottom: 1px solid #ededed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .txt {
    width: 100%;
    min-height: 208px;
    padding: 25px;
    box-sizing: border-box;
    p {
      font-size: 16px;
      color: #0c67bd;
      margin-bottom: 10px;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      width: 80%;
      overflow: hidden;
    }
    h3 {
      font-size: 20px;
      color: #333;
      font-weight: 500;
      margin-bottom: 40px;
      line-height: 30px;
      height: 60px;
      overflow: hidden;
    }
    a {
      display: inline-block;
      font-size: 14px;
      color: #333;
      padding-right: 15px;
      background: url('../images/arrow_right.png') no-repeat right center;
    }
  }

  @media screen and (max-width: 1024px) {
    li {
      padding: 0;
      width: 100%;
    }
    .img {
      height: 190px;
    }
    .txt {
      padding: 20px 15px;
      min-height: 133px;
      p {
        font-size: 13px;
      }
      h3 {
        font-size: 18px;
        line-height: 25px;
        height: 50px;
        margin-bottom: 20px;
      }
    }
  }
`;
