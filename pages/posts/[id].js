import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

/**
 *
 * 1. getStaticPathsによりビルド時にIDの一覧を取得させる
 *      fallbacks: ユーザーが101番目の記事(存在しない)にアクセスした時の挙動などを定義する
 * 2. getStaticPropsで各データの詳細を取得しpropsに格納
 * 3. Post(): propsをコンポーネントに渡す
 * */

export default function Post({ post }) {
  if (!post) {
    return <div className="">Loading...</div>;
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID: "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      {/* ブログに戻るためのリンク */}
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <spna>Back to blog-page</spna>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
}
