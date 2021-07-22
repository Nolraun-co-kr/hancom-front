import styled, { css } from 'styled-components';

export const adminColor = {
  fontBlack: 'rgba(0, 0, 0, 0.9)',
  fontLight: 'rgba(0, 0, 0, 0.5)',
  gray: 'rgba(0, 0, 0, 0.5)',
  grayLight: 'rgba(0, 0, 0, 0.1)',
};

export const adminFontSize = css`
  font-size: 16px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08), 0 0 4px 0 rgba(0, 0, 0, 0.01);
  border-radius: 6px;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  height: ${props => (props.isShrink ? 'calc(100% - 80px - 50px)' : 'calc(100% - 80px)')};
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const WrapperContent = styled.div`
  width: calc(80% - 1px);
  height: 100%;
  overflow-y: auto;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  position: relative;
  width: ${props => props.width};
  padding: 12px 35px;
  margin-bottom: 20px;
  ${props =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}
`;

export const Label = styled.div`
  display: flex;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: ${adminColor.fontBlack};
  margin-bottom: 10px;
`;

export const BlockContent = styled.div`
  width: 100%;
  padding: 10px 0px;
`;

export const Items = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ItemLabel = styled.div`
  width: 40%;
  display: inline-flex;
  flex-wrap: wrap;
  ${adminFontSize};
  color: black;
  margin-right: 10px;
`;

export const ItemContent = styled.div`
  width: max-content;
  max-width: calc(60% - 10px);
  overflow-wrap: break-word;
  ${adminFontSize};
  color: ${adminColor.fontLight};
`;

export const WrapperSelect = styled.div`
  width: 300px;
`;
