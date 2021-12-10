import styled from "styled-components"

import { FONT } from "src/developers/constants"

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;

  p {
    margin-bottom: 0;
  }

  p,
  a {
    font-family: ${FONT.PRIMARY};
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #001553;
    text-decoration: none;
  }

  a {
    color: #5855f4;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 599px) {
    p,
    a {
      font-size: 20px;
      line-height: 28px;
    }
  }
`
