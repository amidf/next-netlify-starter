import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import * as S from "./styled"

const Introduction = ({ json }) => {
  return <S.Container>{documentToReactComponents(json)}</S.Container>
}

export default Introduction
