import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Pagination({ entity, category, page }) {
  return (
    <Container>
      <div className="pagination">
        <Link href={`/${entity}?category=${category}&page=1`}>
          <a className="arrow first">
            처음
          </a>
        </Link>
        <Link href={`/${entity}?category=${category}&page=1`}>
          <a className="arrow prev">
            이전
          </a>
        </Link>
        <Link href={`/${entity}?category=${category}&page=${'1'}`}>
          <a className={`number ${page === '1' || !page ? 'active' : ''}`}>
            1
          </a>
        </Link>
        {category === 't1' && (
            <Link href={`/${entity}?category=${category}&page=${'2'}`}>
              <a className={`number ${page === '2' ? 'active' : ''}`}>
                2
              </a>
            </Link>
        )}
        <Link href={`/${entity}?category=${category}&page=2`}>
          <a className="arrow next">
            다음
          </a>
        </Link>
        <Link href={`/${entity}?category=${category}&page=2`}>
          <a className="arrow last">
            마지막
          </a>
        </Link>
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
      margin:0 2px;
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
