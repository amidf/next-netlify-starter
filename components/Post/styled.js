import styled, { createGlobalStyle } from "styled-components";

const FONT = {
  PRIMARY: '"Open Sans", sans-serif',
  SECONDARY: "Montserrat, sans-serif",
};

export const Wrap = styled.div``;

export const Header = styled.section`
  max-width: 720px;
  padding-bottom: 0 !important;

  align-items: flex-start;

  text-align: left;

  h1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    color: #001553;
    margin-top: 64px;
  }

  img {
    width: 64px;
    height: 64px;
    margin-right: 24px;
  }

  .post-info-container {
    display: flex;
    align-items: center;
  }

  .author-name {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #001553;
    margin: 0;
  }

  .details {
    font-family: ${FONT.PRIMARY};
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    color: rgba(0, 21, 83, 0.5);
  }

  @media (max-width: 1199px) {
    max-width: 100%;

    h1,
    .post-info-container {
      padding: 0 64px;
    }

    h1 {
      margin-top: 57px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      margin-top: 40px;
    }
  }

  @media (max-width: 1023px) {
    max-width: 100%;

    h1,
    .post-info-container {
      padding: 0 32px;
    }
  }

  @media (max-width: 599px) {
    padding-left: 0;
    padding-right: 0;

    h1,
    .post-info-container {
      padding: 0 16px;
    }

    h1 {
      font-size: 24px;
      line-height: 32px;
      margin-top: 24px;
    }

    .author-name {
      font-size: 15px;
      line-height: 28px;
    }

    .details {
      font-size: 13px;
      line-height: 24px;
    }

    img {
      width: 48px;
      height: 48px;
      margin-right: 8px;
    }
  }
`;

export const ThumbnailBox = styled.section`
  max-width: 880px;

  padding-bottom: 0 !important;

  img {
    width: 880px;
  }

  figure {
    margin: 0;
  }

  figcaption {
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    color: rgba(0, 21, 83, 0.5);
  }

  @media (max-width: 1199px) {
    max-width: 100%;
    padding: 0 32px;

    img {
      width: 100%;
    }
  }

  @media (max-width: 1023px) {
    padding: 0 24px;
  }

  @media (max-width: 599px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1``;

export const Text = styled.article`
  max-width: 720px;
  padding-bottom: 0 !important;
  padding: 0 32px;
  display: block;
  position: relative;

  text-align: left;

  pre {
    margin-left: 0;
  }

  @media (max-width: 1199px) {
    max-width: 100%;
  }

  @media (max-width: 1023px) {
    pre {
      width: auto;
    }
  }

  @media (max-width: 767px) {
    padding: 0 24px;
  }

  @media (max-width: 599px) {
    padding: 0 16px;
  }
`;

export const SubscribeFormContainer = styled.div`
  padding: 0 16px;

  margin-bottom: 120px;

  @media (max-width: 1199px) {
    margin-bottom: 56px;
  }

  @media (max-width: 599px) {
    margin-bottom: 48px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    position: absolute;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: rgba(0, 0, 0, 0.15);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  .leadinModal.leadinModal-theme-default.leadinModal-v3 .leadinModal-close::before {
    color: #142470 !important;
    font-size: 42px !important;
  }

  .leadinModal.leadinModal-theme-default.leadinModal-v3 .leadinModal-content {
    background-color: #fff !important;
    border-radius: 18px !important;

    h4 {
      font-family: ${FONT.SECONDARY};
      color: #001553 !important;
      font-weight: bold !important;
      font-size: 32px !important;
      line-height: 40px !important;
    }

    p,
    li {
      color: #001553 !important;
      font-family: ${FONT.PRIMARY} !important;
      font-weight: 400 !important;
      font-size: 15px !important;
      line-height: 28px !important;
    }

    button {
      font-weight: bold !important;
      font-size: 13px !important;
      line-height: 15px !important;
      text-transform: uppercase;
      font-family: ${FONT.SECONDARY} !important;
      border-radius: 6px !important;
    }
  }
`;
