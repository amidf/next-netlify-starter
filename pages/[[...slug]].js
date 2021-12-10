import React from "react";
import Layout from "../components/Layout";
import DynamicComponent from "../components/DynamicComponent";

import Storyblok, { useStoryblok } from "../utils/storyblok";

const Page = ({ story, preview }) => {
  const enableBridge = preview;
  story = useStoryblok(story, enableBridge, locale);

  return (
    <Layout>
      <DynamicComponent blok={story.content} />
    </Layout>
  );
};

export default Page;

export const getStaticProps = async ({ params, preview = false }) => {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or "published"
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    language: locale,
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
};

export const getStaticPaths = async ({ locales }) => {
  let { data } = await Storyblok.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    if (slug === "home") splittedSlug = false;

    // create additional languages
    // for (const locale of locales) {
    //   paths.push({ params: { slug: splittedSlug }, locale });
    // }
  });

  return {
    paths: paths,
    fallback: false,
  };
};
