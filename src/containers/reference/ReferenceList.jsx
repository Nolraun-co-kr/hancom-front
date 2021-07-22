import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Pagination from '@/components/common/Pagination';
import ReferenceItem from '@/components/reference/ReferenceItem';
import { useDispatch, useSelector } from 'react-redux';
import { getManyReferenceRequest } from '../../redux/actions/reference';

export default function ReferenceList({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { referenceList } = useSelector(state => state.reference);

  useEffect(() => {
    const { query } = router;
    dispatch(
      getManyReferenceRequest({
        category: query?.category || category,
      }),
    );
  }, [router, category]);

  return (
    <>
      <ul className="referencelist">
        {referenceList?.map(data => (
          <ReferenceItem key={data.id} data={data} />
        ))}
      </ul>
      <Pagination />
    </>
  );
}
