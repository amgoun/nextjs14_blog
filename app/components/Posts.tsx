import { getPosts } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";
import { PageProps } from "@/app/page";
import { Pagination } from "./Pagination";
import Search from "./search";

const PAGE_SIZE = 3;
export default async function Posts(props: PageProps) {
  const pageNumber = Number(props?.searchParams?.page || 1);
  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take; // Calculate skip based on page number.
  const search =
    typeof props?.searchParams?.search === "string"
      ? props?.searchParams.search
      : undefined;

  const { posts, metadata } = await getPosts({ take, skip, search });

  return (
    <section>
      <div className=" max-w-xl mx-auto py-4 bg">
        <Search search={search} />
      </div>

      <div
        className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 
    xl:grid-cols-3 py-12 gap-4"
      >
        {posts?.map((post) => (
          <div key={post.id} className=" px-2">
            <div className="group aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={post.thumbnailUrl}
                width={421}
                height={451}
                alt=""
                className="w-full object-cover group-hover:opacity-75"
              />
            </div>

            <p className="text-sm font-medium py-4">
              {post.createdAt.toLocaleDateString("en-us", {
                weekday: "short",
                year: "numeric",
                month: "short",
              })}
            </p>
            <h1 className="text-[40px] leading-[50px]">{post.title}</h1>
            <p className="p_regular overflow-hidden max-h-[3.6em] leading-[1.2em]">
              {post.content}
            </p>
            <Link href={`/${post.id}`}>raed more ...</Link>
            <div className="flex gap-x-4 mt-4">
              <div>
                <Image
                  src="/images/author_01.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div>
                <p className="mt-2">ahmad elen</p>
                <p className="mb-4 text-[#939393]">{post.author.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          {...props.searchParams}
          totalPages={metadata ? metadata.totalPages || 1 : 1}
          hasNextPage={metadata ? metadata.hasNextPage || false : false}
        />
      </div>
    </section>
  );
}
