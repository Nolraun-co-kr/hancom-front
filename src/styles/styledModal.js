import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  width: ${props => (props.width ? props.width : '580px')};
`;

export const WrapperLoading = styled.div`
  width: 100%;
  padding: 50px;
`;

export const Close = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 12px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
`;

export const Body = styled.div`
  width: 100%;
  max-height: calc(80vh - 60px - 90px);

  ${props =>
    props.noScroll
      ? css``
      : css`
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        `};
`;

export const Content = styled.div`
  width: 100%;
  min-height: min-content;
  display: flex;
  flex-direction: column;
  padding: 16px 26px 40px;
  ${props =>
    props.center
      ? css`
          align-items: center;
        `
      : css`
          align-items: flex-start;
        `};

  @media (max-width: 767px) {
    padding: 10px 20px;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 0;
  font-size: 14px;
  font-weight: 500;
  color: black;
  text-align: center;
`;

export const Panel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.isSplit ? 'space-between' : 'flex-end')};
  align-items: center;
  padding: 24px 26px;
  border-top: solid 1px rgba(0, 0, 0, 0.12);

  @media (max-width: 767px) {
    padding: 15px 20px;
    justify-content: ${props => (props.isSplit ? 'space-between' : 'center')};
  }
`;
