import Link from "next/link";

export default function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      {/* nextJSのルールによりpostsディレクトリの中のidファイルを指定 */}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
}
