import { Fragment } from "react";
import Head from "next/head";
import Hero from "../component/home-page/home";
import FeaturedPosts from "../component/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function homePage(props) {
  return (
    <Fragment>
      <Head>
        <title>P' Blog</title>
        <meta name="description" content="I post about programming and web development." />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps(){
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60
    }
}

export default homePage;
