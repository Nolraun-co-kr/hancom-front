import React from 'react';
import EnterPriceTop from '../enterprise/EnterPriceTop';
import styled from 'styled-components';

export default function EnterPriceWrapper({ children }) {
  return (
    <Container>
      <div className="container sub enterprise">
        <div className="enterprise__inn">
          <EnterPriceTop />

          <div className="enterprise__cont">
            <div className="wrap">{children}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .enterprise {
    .enterprise__inn {
      padding: 30px 0 100px;
      @media screen and (max-width: 1024px) {
        padding: 0 0 50px;
      }
    }
  }
`;
