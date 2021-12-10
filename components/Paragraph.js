import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Paragraph = ({ blok }) => {
  return (
    <p {...sbEditable(blok)} key={blok._uid}>
      {blok.body}
    </p>
  );
};

export default Paragraph;
