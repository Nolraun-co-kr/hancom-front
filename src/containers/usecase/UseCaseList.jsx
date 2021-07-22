import React, { useEffect } from 'react';
import Pagination from '@/components/common/Pagination';
import UseCaseItem from '@/components/usecase/UseCaseItem';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getManyUsecaseRequest } from '../../redux/actions/usecase';

export default function UseCaseList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { usecaseList } = useSelector(state => state.usecase);

  useEffect(() => {
    dispatch(getManyUsecaseRequest());
  }, [router]);

  return (
    <>
      <ul className="customerguide__list">
        {usecaseList.map(data => (
          <UseCaseItem key={data.id} />
        ))}
      </ul>
      <Pagination />
    </>
  );
}
