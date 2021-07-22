import styled, { css } from 'styled-components';
import { gbColor } from './styled';

// font
const styleFont = css`
  font-size: 15px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const styleFontMini = css`
  font-size: 12px;

  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

// width
const styleWidth = css`
  min-width: 100px;
`;

const styleWidthFlexible = css`
  min-width: 0;
`;

// height
const styleHeight = css`
  height: 36px;
  border-radius: 17px;
  padding: 0 17px;

  @media (max-width: 767px) {
    height: 30px;
    border-radius: 14px;
    padding: 0 14px;
  }
`;

const styleHeightFlexible = css`
  height: auto;
  padding: 0;
`;

// border radius
const styleBorderRadius4 = css`
  border-radius: 4px;

  @media (max-width: 767px) {
    border-radius: 4px;
  }
  @media (max-width: 480px) {
    border-radius: 4px;
  }
`;

// template
export const btnCommon = css`
  color: black;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: 500;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  white-space: nowrap;
`;

export const theme = {
  headerBtn: css`
    ${styleWidthFlexible};
    ${styleHeightFlexible};
    ${styleFont};

    &:not(:last-child) {
      margin-right: 24px;
    }
  `,

  secondLayer: css`
    ${styleWidth};
    ${styleHeight};
    ${styleFont};
    text-decoration: underline;
    color: ${gbColor.pointBlue};
  `,

  singleImg: css`
    ${styleWidthFlexible};
    ${styleHeightFlexible};
    margin: 0 8px;
  `,

  icon: css`
    ${styleWidthFlexible};
    ${styleHeightFlexible};
    border-radius: 100%;
    padding: 3px;

    /*&:hover {
      background-color: ${gbColor.hover};
    }
    &:active {
      background-color: ${gbColor.active};
    }*/
  `,

  text: css`
    ${styleWidthFlexible};
    ${styleHeightFlexible};
    ${styleFont};
    color: ${gbColor.pointBlue};
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
  `,

  textMini: css`
    ${styleWidthFlexible};
    ${styleHeightFlexible};
    ${styleFontMini};
    color: ${gbColor.pointBlue};
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
  `,

  primary: css`
    ${styleWidth};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    border-color: ${gbColor.pointBlue};
    background-color: ${gbColor.pointBlue};
    color: white;
  `,

  primaryFlex: css`
    ${styleWidthFlexible};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    border-color: ${gbColor.pointBlue};
    background-color: ${gbColor.pointBlue};
    color: white;
  `,

  grayLight: css`
    ${styleWidthFlexible};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    background-color: #888;
    color: white;
  `,

  warn: css`
    ${styleWidthFlexible};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    border-color: ${gbColor.warn};
    background-color: ${gbColor.warn};
    color: #ffffff;

    &:hover {
      background-color: #c44941;
    }
    &:active {
      background-color: #a33b34;
    }
  `,

  cancel: css`
    ${styleWidthFlexible};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    border: 1px solid ${gbColor.pointBlue};
    color: ${gbColor.pointBlue};
  `,

  disabled: css`
    ${styleWidthFlexible};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    background-color: ${gbColor.light_periwinkle};
    color: rgba(0, 0, 0, 0.38);
  `,

  upload: css`
    ${styleWidth};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    color: #333;
    border: 1px solid #ccc;
    font-size: 14px !important;
  `,

  settingEdit: css`
    ${styleWidthFlexible};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    border: solid 1px ${gbColor.pointBlue};
    color: ${gbColor.pointBlue};

    &:hover {
      background-color: ${gbColor.pointBlue};
      color: white;
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }
  `,

  adminPositive: css`
    ${styleWidth};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    border: 1px solid ${gbColor.pointBlue};
    color: ${gbColor.pointBlue};

    &:hover,
    &:active {
      filter: grayscale(60%);
    }
  `,
  adminNegative: css`
    ${styleWidth};
    ${styleHeight};
    ${styleFont};
    ${styleBorderRadius4};
    border: 1px solid ${gbColor.pointBlue};
    background-color: ${gbColor.pointBlue};
    color: white;

    &:hover,
    &:active {
      filter: grayscale(40%);
    }
  `,
};

export const GlobalBtn = styled.div`
  ${btnCommon};
  ${props => props.theme && theme[props.theme]};
`;

export const GlobalLink = styled.a`
  ${btnCommon};
  ${props => props.theme && theme[props.theme]};
`;

export const styleIconBtn = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 100%;
  padding: 1px;
`;
