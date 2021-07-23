import React, { useEffect } from 'react';
import Pagination from '../../components/common/Pagination';
import UseCaseItem from '../../components/usecase/UseCaseItem';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getManyUsecaseRequest } from '../../redux/actions/usecase';
import styled from 'styled-components';

export default function UseCaseList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { usecaseList } = useSelector(state => state.usecase);

  useEffect(() => {
    dispatch(getManyUsecaseRequest());
  }, [router]);

  return (
    <>
      <Container>
        <ul className="customerguide__list">
          {usecaseList.map(data => (
            <UseCaseItem key={data.id} />
          ))}
        </ul>
        <Pagination />
      </Container>
    </>
  );
}

const Container = styled.div`
  .customerguide__list {
    display: flex;
    margin: 0 -13px;
    flex-wrap: wrap;
    li {
      padding: 0 13px;
      width: 33.333%;
      margin-bottom: 20px;
    }
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
      margin: 0;
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
  }
`;
