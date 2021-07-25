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

    @media screen and (max-width: 1024px) {
      margin: 0;
    }
  }
`;
