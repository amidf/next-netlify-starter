import React from "react";
import DynamicComponent from "../components/DynamicComponent";

import { useStoryblok } from "../utils/storyblok";

const Page404 = () => {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // load only inside preview mode
  const storyLoaded = useStoryblok(null, enableBridge);

  let content = <h1>Not found</h1>;

  if (storyLoaded && storyLoaded.content)
    content = <DynamicComponent blok={storyLoaded.content} />;

  return content;
};

export default Page404;
