import styled, { css } from 'styled-components';
import { gbColor } from './styled';

const heightHeader = '60px';

export const WrapperCreate = styled.div`
  position: relative;
  width: 1024px;
  max-width: 100%;
  padding: 65px;
  margin-top: calc(50px + ${heightHeader});
  margin-bottom: 50px;
  background-color: white;
  border-radius: 4px;
  z-index: 2;
`;

export const WrapperReset = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`;

export const WrapperSub = styled.div`
  width: 100%;
  overflow: visible;
  padding: 1px;
  margin-bottom: 56px;
`;

export const WrapperFull = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: ${heightHeader};
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  z-index: 1;
`;

export const WrapperLeft = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24);
  padding-bottom: 20px;
  overflow-y: auto;

  ${props =>
    props.isDisabled &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 2;
      }
    `};
`;

export const WrapperFieldBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${props =>
    props.isPadding &&
    css`
      padding: 15px;
    `};
`;

export const TitleFieldBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FieldName = styled.div`
  position: relative;
  overflow-wrap: break-word;
  font-size: 15px;
  color: #333;
  margin-right: 10px;

  ${props =>
    props.isError &&
    css`
      &:after {
        content: '*';
        color: red;
        font-size: 16px;
        font-weight: 700;
      }
    `}
`;

export const BtnAdd = styled.div`
  position: relative;
  width: 50px;
  color: ${gbColor.purple};
  font-size: 14px;
  font-weight: 400;
  text-align: right;
  cursor: pointer;
`;

export const BtnEdit = styled.div`
  position: relative;
  min-width: 36px;
  padding: 0 4px;
  color: #333;
  font-size: 10px;
  border: 1px solid #ccc;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
`;

export const WrapperSignerSelect = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 0;
`;

export const WrapperRight = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: calc(100% - 240px);
  height: 100%;
  overflow-y: hidden;
  padding: 48px 100px;
`;

export const Title = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: black;
  margin-bottom: 24px;
  display: flex;
`;

export const WrapperList = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 10px 0;
  margin-bottom: 16px;
  cursor: ${props => (props.isDraggable ? 'grab' : 'default')};
  background-color: white;
  -moz-box-shadow: 0 0 0 1px #ccc;
  -webkit-box-shadow: 0 0 0 1px #ccc;
  box-shadow: 0 0 0 1px #ccc;
  z-index: 9999;

  ${props =>
    props.isFocus &&
    css`
      background-color: #e8f3fe;
      -moz-box-shadow: 0 0 0 2px #409bf9;
      -webkit-box-shadow: 0 0 0 2px #409bf9;
      box-shadow: 0 0 0 2px #409bf9;
      z-index: 10000;
    `};

  &:focus,
  &:active {
    background-color: #e8f3fe;
    -moz-box-shadow: 0 0 0 2px #409bf9;
    -webkit-box-shadow: 0 0 0 2px #409bf9;
    box-shadow: 0 0 0 2px #409bf9;
  }
`;
