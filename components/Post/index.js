import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import moment from "moment";

import Content from "./components/Content";
import * as S from "./styled";

const Post = ({ blok, shiki }) => {
  // console.log({ blok });
  // console.log(sbEditable(blok));

  return (
    <div {...sbEditable(blok)} key={blok._uid}>
      <main>
        <S.Header>
          <S.Title>{blok.title}</S.Title>
          <div className="post-info-container">
            {blok.authorPhoto && (
              <img
                src={blok.authorPhoto.filename}
                alt={blok.authorPhoto.alt}
                circle
                fit
              />
            )}
            <div className="post-info">
              <p className="author-name">{blok.author}</p>
              <span className="details">
                <time dateTime={blok.publicationDate}>
                  {moment(blok.publicationDate).format("MMMM DD, YYYY")}.
                </time>{" "}
              </span>
            </div>
          </div>
        </S.Header>
        <S.ThumbnailBox>
          <figure>
            <img src={blok.thumbnail.filename} alt={blok.thumbnail.alt} />
            <figcaption>{blok.thumbnail.title}</figcaption>
          </figure>
        </S.ThumbnailBox>
        <S.Text>
          <Content>{blok.introduction}</Content>
          <Content>{blok.body}</Content>
        </S.Text>
      </main>
    </div>
  );
};

export default Post;
