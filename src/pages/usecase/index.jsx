import React from 'react';
import WrapperLayout from '@/components/WrapperLayout';
import UseCaseList from '../../containers/usecase/UseCaseList';
import Visual from '@/components/common/Visual';

export default function Usecase() {
  return (
    <WrapperLayout>
      <div className="container sub customer-guide">
        <Visual
          title={'활용사례'}
          description={'다양한 사례를 참고해 한컴OK싸인을 활용해 보세요.'}
        />
        <div className="content">
          <div className="wrap">
            <UseCaseList />
          </div>
        </div>
      </div>
    </WrapperLayout>
  );
}
