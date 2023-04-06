import { Fragment } from "react";
import AllPosts from "../../component/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

function AllPostsPage(props){
    const { allPosts } = props
    return <Fragment>
        <Head>
            <title>All my posts</title>
            <meta name="description" content="A list of all programming-related tutorials and posts!" />
        </Head>
        <AllPosts posts={allPosts} />
    </Fragment>
}

export async function getStaticProps(){
    const All = getAllPosts();

    return {
        props: {
            allPosts: All
        }
    }
}

export default AllPostsPage;