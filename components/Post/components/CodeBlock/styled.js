import styled from "styled-components"

export const CopyBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;

  visibility: ${props => (props.copied ? "visible" : "hidden")};
  opacity: ${props => (props.copied ? 1 : 0)};
  transition: 0.3s;
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 0;
  width: 40px;
  height: 40px;

  .shadow {
    background: rgba(0, 0, 0, 0.12);
    filter: blur(12px);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .copy-icon path {
    transition: 0.3s;
  }

  :hover {
    .copy-icon path {
      fill: #d9dae5;
    }
  }
`

export const Container = styled.pre`
  position: relative;
  background-color: #2e3361 !important;
  border-radius: 8px;
  padding: 24px;
  padding-left: 8px;
  margin-bottom: 40px;

  :hover {
    ${CopyBtn} {
      visibility: visible;
      opacity: 1;
    }
  }

  .inner {
    overflow-x: auto;
  }

  code {
    background-color: #2e3361 !important;
    border: none;
    padding: 0;
  }

  table {
    padding-right: 24px;
  }

  td:first-child {
    user-select: none;
    font-size: 14px;
    line-height: 20px;
    color: #898aab;
    text-align: right;
    padding: 0;
    min-width: 38px;
  }

  td:last-child {
    font-size: 14px;
    line-height: 20px;
    padding-left: 24px;
  }

  @media (max-width: 992px) {
    width: 100vw;
    margin-left: -40px;
  }
`
