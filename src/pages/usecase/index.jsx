import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import UseCaseList from '../../containers/usecase/UseCaseList';
import Visual from '../../components/common/Visual';
import styled from 'styled-components';

export default function Usecase() {
  return (
    <WrapperLayout>
      <Container>
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
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .customer-guide {
    .content {
      padding: 80px 0;
      @media screen and (max-width: 1024px) {
        padding: 50px 0;
      }
    }
    .pagination {
      margin-top: 40px;
    }
  }
`;
