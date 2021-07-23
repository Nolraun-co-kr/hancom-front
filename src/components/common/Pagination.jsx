import React from 'react';
import styled from 'styled-components';

export default function Pagination() {
  return (
    <Container>
      <div className="pagination">
        <a href="" className="arrow first">
          처음
        </a>
        <a href="" className="arrow prev">
          이전
        </a>
        <a href="" className="number active">
          1
        </a>
        <a href="" className="arrow next">
          다음
        </a>
        <a href="" className="arrow last">
          마지막
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      width: 32px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      font-size: 14px;
      color: #666;
      &:hover {
        color: #0c67bd;
        font-weight: 500;
      }
      &.active {
        background: #edf0f5;
        border-radius: 0.5em;
      }
      &.arrow {
        text-indent: -9999px;
        overflow: hidden;
        &.first {
          background: url('../images/arrow_pagination.png') no-repeat center;
        }
        &.last {
          background: url('../images/arrow_pagination.png') no-repeat center;
          transform: rotate(-180deg);
        }
        &.prev {
          background: url('../images/arrow_pagination-2.png') no-repeat center;
        }
        &.next {
          background: url('../images/arrow_pagination-2.png') no-repeat center;
          transform: rotate(-180deg);
        }
      }
    }
    @media screen and (max-width: 1024px) {
      a {
        &.m-hidden {
          display: none;
        }
      }
    }
  }
`;
