//  サーバーサイドでフェッチするための関数を作っておく
import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// getStaticPathsにはフィールド名にparamsが必要
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 各IDの情報を取得する関数
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return {
    post,
  };
}
