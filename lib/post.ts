import { Categories, Prisma } from "@prisma/client";
import prisma from "./prisma";

type userId = /*unresolved*/ any;

type GetPostsParams = {
  take?: number;
  skip?: number;
  search?: string;
};

const PAGE_SIZE = 2;

export async function getPosts({ take = PAGE_SIZE, skip = 0, search }: GetPostsParams = {}) {
  try {
    const where = search
  ? {
      OR: [
        { title: { contains: search, mode: 'insensitive' } as const },
        { content: { contains: search, mode: 'insensitive' } as const },
      ],
    }
  : {};

    const posts = await prisma.post.findMany({
      where,
      include: {
        author: true,
      },
      skip,
      take,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const totalCount = await prisma.post.count({
      where,
    });

    return {
      posts,
      metadata: {
        hasNextPage: skip + take < totalCount,
        totalPages: Math.ceil(totalCount / Number(take)),
      },
    };
  } catch (error) {
    return { error };
  }
}


export async function getTopCommentedPosts(limit: number = 1) {
  try {
    // Fetch posts with comments
    const posts = await prisma.post.findMany({
      include: {
        comments: true,
        author: true,
      },
    });

    // Calculate comment count for each post
    const postsWithCommentCount = posts.map((post) => ({
      ...post,
      commentCount: post.comments.length,
    }));

    // Sort posts by comment count
    const sortedPosts = postsWithCommentCount.sort(
      (a, b) => b.commentCount - a.commentCount
    );

    // Limit the number of posts if needed
    const topPosts = sortedPosts.slice(0, limit);

    return { topPosts };
  } catch (error) {
    return { error };
  }
}

export async function getPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        comments: true,
      },
    });
    return { post };
  } catch (error) {
    return { error };
  }
}

export async function createPost(
  title: string,
  thumbnailUrl: string,
  content: string,
  category: Categories,
  author: userId
) {
  try {
    const post = await prisma.post.create({
      data: { title, thumbnailUrl, content, category, author },
    });
    return { post };
  } catch (error) {
    return { error };
  }
}

export async function updatePost(
  id: string,
  title: string,
  thumbnailUrl: string,
  content: string
) {
  try {
    const udatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        thumbnailUrl,
        content,
      },
    });
    return { udatedPost };
  } catch (error) {
    return { error };
  }
}
export async function deletetPost(id: string) {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id,
      },
    });
    return { deletedPost };
  } catch (error) {
    return { error };
  }
}
