import Page from "./Page";
import Post from "./Post";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Components = {
  page: Page,
  post: Post,
  heading: Heading,
  paragraph: Paragraph,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    console.log(blok.component);
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return null;
};

export default DynamicComponent;
