import React from 'react';
import styled from 'styled-components';

export default function Visual({ type, title, description }) {
  return (
    <Container>
      <div className={`visual ${type ? type : 'product'}`}>
        <div className="txtBox">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .visual {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../images/visual-2.png') no-repeat center;
    background-size: cover;
    .txtBox {
      text-align: center;
    }
    h2 {
      font-size: 48px;
      color: #fff;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.6);
    }
    &.product {
      background: url('../images/visual_product.png') no-repeat center;
      background-size: cover;
    }
    @media screen and (max-width: 1024px) {
      height: 194px;
      h2 {
        font-size: 24px;
        margin-bottom: 15px;
      }
      p {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 768px) {
      &.m-type1 {
        background: url('../images/visual_m.png') no-repeat center;
        background-size: cover;
      }
    }
  }
`;
