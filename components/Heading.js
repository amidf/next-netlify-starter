import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Heading = ({ blok }) => {
  return (
    <h1 {...sbEditable(blok)} key={blok._uid}>
      {blok.body}
    </h1>
  );
};

export default Heading;
