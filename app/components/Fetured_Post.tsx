import Image from "next/image";
import Link from "next/link";
import { getTopCommentedPosts } from "@/lib/post";

export default async function Fetured_Post() {
  const { topPosts } = await getTopCommentedPosts();
  return (
    <section className="max-w-7xl mx-auto px-2 py-12 lg:py-24">
      {topPosts?.map((post) => (
        <div key={post.id} className="flex flex-col lg:flex-row gap-x-12">
          <div className="flex items-center justify-center h-[480px] w- [649px] lg:min-w-[649px] group aspect-square w-full overflow-hidden rounded-lg">
            <Image
              src={post.thumbnailUrl}
              width={649}
              height={480}
              loading="lazy"
              alt={post.title}
              className="w-full object-cover group-hover:opacity-75"
            />
          </div>
          <div className="flex flex-col">
            <p className="uppercase font-medium mb-4">FEATURED POST</p>
            <h1 className="text-[40px] leading-[50px] mt-6">{post.title}</h1>
            <p className="p_regular overflow-hidden max-h-[3.6em] leading-[1.2em]">
              {post.content}
            </p>
            <Link href={`/${post.id}`}>raed more ...</Link>
            <div className=" flex gap-x-4 mt-4">
              <div>
                <Image
                  src="/images/author_01.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className=" flex flex-col text-sm font-medium">
                <p className="capitalize mb-4 mt-2">{post.author.name}</p>
                <div className=" flex items-center gap-x-5 text-[#939393]">
                  <p className="date">
                    {" "}
                    {post.createdAt.toLocaleDateString("en-us", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                    })}
                  </p>
                  <p className="comments">
                    {" "}
                    {post.comments.length}{" "}
                    {post.comments.length === 1 ? "comment" : "comments"}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
