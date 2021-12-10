import styled, { css } from "styled-components";

const FONT = {
  PRIMARY: '"Open Sans", sans-serif',
  SECONDARY: "Montserrat, sans-serif",
};

export const Paragraph = styled.p`
  font-family: ${FONT.PRIMARY};
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #001553;

  margin-bottom: 16px;

  @media (max-width: 599px) {
    font-size: 15px;
    line-height: 28px;
  }
`;

export const Heading1 = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  color: #001553;

  margin: 0;
  margin-top: 40px;

  a {
    color: #142470;
  }
`;

export const Title = styled(Heading1)`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #001553;
  margin-bottom: 16px;

  a {
    font-family: ${FONT.SECONDARY};
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }

  @media (max-width: 599px) {
    margin-bottom: 8px;

    &,
    a {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const UnorderedList = styled.ul`
  padding: 0;
  padding-left: 16px;
  list-style: none;

  li {
    position: relative;
    padding-left: 20px;
  }

  li::before {
    background-color: #001553;
    content: "";
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    min-width: 4px;
    min-height: 4px;
    left: 6px;
    top: 13px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

export const OrderedList = styled.ol`
  padding: 0;
  padding-left: 40px;
`;

export const ListItem = styled.li`
  font-family: ${FONT.PRIMARY};
  font-size: 15px;
  line-height: 28px;
  color: #001553;

  margin-bottom: 8px;
  min-height: 28px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Asset = styled.figure`
  margin: 0;
  margin-bottom: 40px;

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    margin-bottom: 16px;
  }

  figcaption {
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    color: rgba(0, 21, 83, 0.5);
    text-align: center;
  }
`;

export const Quote = styled.blockquote`
  font-style: italic;

  border-left: 4px solid #001553;

  margin: 0;
  padding-left: 16px;
`;

const linkStyle = css`
  font-family: ${FONT.PRIMARY};
  text-decoration: none;
  color: #5855f4;
  font-weight: bold;
  font-weight: 600;
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0.2px;

  u {
    text-decoration: none;
  }

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 599px) {
    font-size: 15px;
    line-height: 28px;
  }
`;

export const Link = styled.a`
  ${linkStyle}
`;

export const InnerLink = styled.a`
  ${linkStyle}
`;

export const Code = styled.span`
  font-family: "Consolas";

  display: inline-block;

  background: #f6f6f6;
  border: 1px solid #d9d9e2;
  border-radius: 4px;

  margin: 0;
  padding: 2px 8px;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: #27348e;
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0.5px;
  color: #001553;
  text-decoration: underline;
  cursor: pointer;
  outline: none;

  @media (max-width: 599px) {
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0.4px;
  }
`;

export const Audio = styled.div`
  width: 300px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
