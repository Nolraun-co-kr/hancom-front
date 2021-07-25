import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import FootLink from '../../components/common/FootLink';
import UseCaseInfo from '../../containers/usecase/UseCaseInfo';
import styled from 'styled-components';
import UseCaseList from '../../components/usecase/useCaseList';

export default function UseCaseDetail() {
  return (
    <WrapperLayout>
      <Container>
        <div className="container sub customer-guide customer-guide--detail">
          <div className="content">
            <div className="section section1">
              <div className="wrap">
                <UseCaseInfo />
              </div>
            </div>

            <UseCaseList />
            <FootLink />
          </div>
        </div>
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .customer-guide--detail {
    .content {
      padding: 0;
    }
    .section1 {
      padding-bottom: 100px;
      .wrap {
        max-width: 1016px;
      }
      @media screen and (max-width: 1024px) {
        padding-bottom: 0;
      }
    }
  }
`;
