import { databases, storage, Query, ID } from "./appwriteConfig";
import {
  AppwriteCollectionId,
  AppwriteDatabaseId,
  AppwriteBucketId,
} from "./appwriteConstants";

type CreatePostProps = {
  slug: string;
  title: string;
  content: string;
  imageId: string;
  status: string;
};

type UpdatePostProps = {
  title?: string;
  content?: string;
  imageId?: string;
  status?: string;
};

const postService = {
  async createPost({ slug, title, content, imageId, status }: CreatePostProps) {
    try {
      return await databases.createDocument(
        AppwriteDatabaseId,
        AppwriteCollectionId,
        slug,
        {
          title,
          content,
          imageId,
          status,
        }
      );
    } catch (error) {
      console.error("Post creating error ->", error);
      return error;
    }
  },
  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await databases.listDocuments(
        AppwriteDatabaseId,
        AppwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("All post getting error ->", error);
      return null;
    }
  },
  async getPostById(slug: string) {
    try {
      return await databases.getDocument(
        AppwriteDatabaseId,
        AppwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Post getting error ->", error);
      return null;
    }
  },
  async updatePost(
    slug: string,
    { title, content, imageId, status }: UpdatePostProps
  ) {
    try {
      return await databases.updateDocument(
        AppwriteDatabaseId,
        AppwriteCollectionId,
        slug,
        {
          title,
          content,
          imageId,
          status,
        }
      );
    } catch (error) {
      console.error("Post updating error ->", error);
      return error;
    }
  },
  async deletePost(slug: string) {
    try {
      await databases.deleteDocument(
        AppwriteDatabaseId,
        AppwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Post deleting error ->", error);
      return null;
    }
  },
  async uploadPostImage(imageFile: any) {
    try {
      return await storage.createFile(AppwriteBucketId, ID.unique(), imageFile);
    } catch (error) {
      console.error("Post image uploading error ->", error);
      return error;
    }
  },
  async deletePostImage(imageFileId: string) {
    try {
      await storage.deleteFile(AppwriteBucketId, imageFileId);
      return true;
    } catch (error) {
      console.error("Post image deleting error ->", error);
      return error;
    }
  },
  getPostPreview(imageFileId: string) {
    return storage.getFilePreview(AppwriteBucketId, imageFileId);
  },
};

export default postService;
