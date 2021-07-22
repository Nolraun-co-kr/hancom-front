import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    line-height: 1.2;
  }

  * {
    box-sizing: border-box;
    font-weight: 400;

    &:focus {
      outline: none;
    }
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  .fonts-loaded body:lang(en),
  .fonts-loaded body:lang(ko) {
    font-family: 'Noto Sans KR', 'Droid Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, b {
    font-weight: 600 !important;
  }

  /*react-dates default*/
  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }
  .SingleDatePicker,
  .SingleDatePicker>div,
  .SingleDatePickerInput
  .DateInput {
    width: 100% !important;
    height: 100% !important;
  }
  .DateInput_input {
    font-weight: 400;
    font-size: 16px;
  }

  .SingleDatePicker_picker__portal {
    z-index: 9999 !important;
  }

  .SingleDatePickerInput {
    border-color: rgba(0 ,0 ,0 ,0) !important;
  }
  .SingleDatePickerInput,
  .DateInput {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .SingleDatePickerInput_calendarIcon {
    position: absolute;
  }
  .CalendarDay__selected_span {
    background: rgba(70, 121, 246, 0.8);
    color: white;
    border-color: #4679f6;
  }
  .CalendarDay__selected,
  .CalendarDay__selected:hover,
  .CalendarDay__selected_span:hover {
    background: #4679f6;
    color: white;
    border-color: #4679f6;
  }

  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: #586af2;
  }

  .DateInput_input__focused {
    border-color: #586af2;
  }

  /*react-draggble*/
  .react-draggable>span>div {
    z-index: 2;
    width: 24px;
    height: 24px;
  }
`;

export default GlobalStyle;
