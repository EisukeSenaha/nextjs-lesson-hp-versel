/**
 * getAllPostsData：フェッチ用の自作ライブラリ
 * ビルド時に読み込まれる getStaticProps関数を使用
 * getStaticPropsの中でpropsを生成し Blogページに渡す
 *
 * postsの中身をmapで展開して一覧を作る
 */

import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
