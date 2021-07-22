import styled, { css } from 'styled-components';
import { color, mediaRule } from './styled';

const themes = {
  light: color.primary_light,
  medium: color.primary_medium,
};

export const Container480 = styled.div`
  position: relative;
  width: 100%;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => themes[props.theme] || 'white'};

  @media (max-width: ${mediaRule.laptop}) {
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  color: ${props => props.color || color.ds_text};
  text-align: ${props => props.align || 'center'};
  margin: 0 0 30px;
  line-height: 1.11;

  @media (max-width: ${mediaRule.tablet}) {
    font-size: 24px;
    margin: 0 0 20px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 26px;
  color: ${color.ds_text};
  padding: 12px 0 10px;
  margin: 0;

  ${props =>
    props.isHighlight &&
    css`
      font-size: 36px;
      color: ${color.secondary};
    `}

  @media (max-width: ${mediaRule.tablet}) {
    font-size: ${props => (props.isHighlight ? '24px' : '16px')};
  }
`;

export const Desc = styled.div`
  font-size: 20px;
  color: ${color.ds_text};

  @media (max-width: ${mediaRule.laptop}) {
    font-size: 16px;
  }
`;

export const SubDesc = styled.div`
  font-size: ${props => (props.isHighlight ? '20px' : '14px')};
  color: ${color.ds_text};
  max-width: 920px;

  @media (max-width: ${mediaRule.tablet}) {
    font-size: ${props => (props.isHighlight ? '16px' : '14px')};
  }
`;

export const InputWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 0 30px;
  margin: auto;
  position: relative;
`;
