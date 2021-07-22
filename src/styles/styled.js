import styled, { css } from 'styled-components';

// constants
// ===
export const color = {
  primary: '#586af2',
  primary_heavy: '#4958ca',
  primary_medium: '#bbc8f9',
  primary_light: '#d7def9',
  secondary: '#f7ba3e',
  hyperlink: '#007aff',
  coral: '#f25858',
  aqua: '#2dbcda',
  red: '#ff0000',
  butterscotch: '#f7ba3e',
  ds_text: '#1f2e4e',
  brownish_grey: '#707070',
  hint_solid: '#999999',
  black80: 'rgba(0,0,0,.8)',
  black60: 'rgba(0,0,0,.6)',
  black40: 'rgba(0,0,0,.4)',
  black30: 'rgba(0,0,0,.3)',
  black20: 'rgba(0,0,0,.2)',
};

export const gbColor = {
  main: '#00BFA5',
  second: '#2D3E4E',
  third: '#96D200',
  gray: 'rgba(0, 0, 0, 0.38)',
  bgGray: '#EFEFF4',
  lightGray: '#d8d8d8',
  deepGray: '#4d4d4d',
  lightBlack: '#222C38',
  errorMsg: '#FC2D55',
  purple: '#586af2',
  pointBlue: '#4679f6',
  deepBlue: '#2e5fd8',
  warn: '#f55f56',
  cancel: 'rgba(0, 0, 0, 0.38)',
  systemBlue: '#4679f6',
  disabled: 'rgba(0, 0, 0, 0.38)',
  black12: 'rgba(0, 0, 0, 0.12)',
  light_periwinkle: '#dadce3',
  hover: 'rgba(221, 221, 221, 0.1)',
  active: '#f9f9f9',
  activeBack: 'rgba(64, 155, 249, 0.3)',
  yellow: '#f7ba3e',
};

export const orderColor = [
  '#33bedb',
  '#f2a65a',
  '#c556e3',
  '#779fa1',
  '#773344',
  '#ff6542',
  '#0076ff',
  '#22d397',
];

export const myStatusColor = {
  waiting_for_me: '#4bb0b0',
  waiting_for_others: '#349ae4',
  completed: '#55b232',
  draft: '#e89330',
};

export const menuStatusColor = {
  active: '#2e5fd8',
  default: '#333',
};

export const statusColor = {
  original: 'rgba(0, 0, 0, 0.38)',
  draft: '#e89330',
  send: '#888888',
  processing: '#349ae4',
  pending: '#fc6161',
  waiting: '#349ae4',
  initial: '#4bb0b0',
  done: '#55b232',
  completed: '#55b232',
};

export const statusBorder = {
  draft: 'rgba(232, 147, 48, 0.5)',
  deleted: 'rgba(0, 0, 0, 0.5)',
  waiting: 'rgba(52, 154, 228, 0.5)',
  completed: 'rgba(85, 178, 50, 0.5)',
  expired: 'rgba(75, 176, 176, 0.5)',
};

export const mediaRule = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

// components
// ===
export const PageWrapper = styled.div`
  position: relative;
  /*width: 100vw;*/
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${props => (props.backcolor ? props.backcolor : 'rgba(0,0,0,0)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: ${props => (props.isLock ? 'hidden' : 'auto')};
  justify-content: ${props => (props.isLoginPage ? 'center' : 'flex-start')};
`;

export const PageContainer = styled.section`
  margin-top: 56px;
  width: 100%;
  position: relative;
`;

export const taskWrapperWidth = css`
  position: relative;
  width: calc(286px * 5 + 8px * 10 + 4px * 2);

  @media (max-width: 1519px) {
    width: calc(286px * 4 + 8px * 8 + 4px * 2);
  }

  @media (max-width: 1215px) {
    width: calc(286px * 3 + 8px * 6 + 4px * 2);
  }

  @media (max-width: 911px) {
    width: calc(286px * 2 + 8px * 4 + 4px * 2);
  }

  @media (max-width: 607px) {
    width: calc(286px + 8px * 2 + 4px * 2);
  }
`;

export const TaskWrapper = styled.div`
  ${taskWrapperWidth};
  padding-bottom: 50px;
`;

export const Page = styled.div`
  direction: ltr;
  position: relative;
  overflow: visible;
  background-clip: content-box;
  display: inline-block;
  margin: auto;
  padding: 10px 0;
`;

export const Divider = styled.div`
  margin: 8px 0;
  height: 1px;
  background-color: #e0e0e0;
`;

export const DividerBtn = styled.div`
  display: inline-flex;
  width: 16px;
  height: 10px;

  @media (max-width: 480px) {
    width: 10px;
  }
`;
