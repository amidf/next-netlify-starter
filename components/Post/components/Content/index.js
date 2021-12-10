import React, { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import * as shiki from "shiki";

import CodeBlock from "../CodeBlock";
import * as S from "./styled";

const Code = ({ children, highlighter }) => {
  const code = useMemo(() => {
    if (!highlighter) return "";

    return highlighter.codeToHtml(children.join(""), "js");
  }, [highlighter, children]);

  return <div dangerouslySetInnerHTML={{ __html: code }}></div>;
};

export const mdOptions = (highlighter) => ({
  p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
  h1: ({ children }) => <S.Title as="h1">{children}</S.Title>,
  h2: ({ children }) => <S.Title as="h2">{children}</S.Title>,
  h3: ({ children }) => <S.Title as="h3">{children}</S.Title>,
  h4: ({ children }) => <S.Title as="h4">{children}</S.Title>,
  h5: ({ children }) => <S.Title as="h5">{children}</S.Title>,
  h6: ({ children }) => <S.Title as="h6">{children}</S.Title>,
  code: ({ children }) => <Code highlighter={highlighter}>{children}</Code>,
  inlineCode: ({ children }) => {
    console.log({ children });

    return <S.Code>{children}</S.Code>;
  },
  quote: ({ children }) => <S.Quote>{children}</S.Quote>,
  img: ({ src, title }) => {
    return (
      <S.Asset>
        <img src={src} alt={title} />
        <figcaption>{title}</figcaption>
      </S.Asset>
    );
  },
  ul: ({ children }) => <S.UnorderedList>{children}</S.UnorderedList>,
  ol: ({ children }) => <S.OrderedList>{children}</S.OrderedList>,
  li: ({ children }) => (
    <S.ListItem>
      <span className="circle"></span>
      {children}
    </S.ListItem>
  ),
});

const Content = ({ children }) => {
  const [highlighter, setHighlighter] = useState(null);

  useEffect(() => {
    const initShiki = async () => {
      const newHighlighter = await shiki.getHighlighter({ theme: "nord" });

      setHighlighter(newHighlighter);
    };

    initShiki();
  }, []);

  return (
    <ReactMarkdown components={mdOptions(highlighter)}>
      {children}
    </ReactMarkdown>
  );
};

export default Content;
