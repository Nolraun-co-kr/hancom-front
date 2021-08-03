import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Pagination from '../../components/common/Pagination';
import ReferenceItem from '../../components/reference/ReferenceItem';
import { useDispatch, useSelector } from 'react-redux';
import { getManyReferenceRequest } from '../../redux/actions/reference';
import styled from 'styled-components';

export default function ReferenceList({ category, page }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { referenceList } = useSelector(state => state.reference);

  useEffect(() => {
    const { query } = router;
    dispatch(
      getManyReferenceRequest({
        category: query?.category || category,
        page: page || 1,
      }),
    );
  }, [router, category, page]);

  return (
    <>
      <Container>
        {referenceList?.map(data => (
          <ReferenceItem key={data.id} data={data} />
        ))}
      </Container>
      <Pagination entity={'reference'} category={category} page={page} />
    </>
  );
}

const Container = styled.ul`
  display: flex;
  margin: 0 -11px;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
