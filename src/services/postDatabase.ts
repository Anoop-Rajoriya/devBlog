import { databases, Query } from "@/lib/appwrite";
import {
  AppwriteCollectionId,
  AppwriteDatabaseId,
} from "@/lib/appwriteConstant";

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

const postDatabase = {
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
      console.error("Error creating post :", error);
      return error;
    }
  },

  async getPost(slug:string){
    try {
        return await databases.getDocument(
            AppwriteDatabaseId,
            AppwriteCollectionId,
            slug
        )
    } catch (error) {
        console.error("Error getting post: ", error)
        return null
    }
  },

  async updatePost(slug: string, { title, content, imageId, status }:UpdatePostProps) {
    try {
        return await databases.updateDocument(
            AppwriteDatabaseId,
            AppwriteCollectionId,
            slug,
            {
                title,
                content,
                imageId,
                status
            }
        )
    } catch (error) {
        console.error("Error upating post :", error)
        return error
    }
  },

  async deletePost(slug:string){
        try {
        await databases.deleteDocument(
            AppwriteDatabaseId,
            AppwriteCollectionId,
            slug
        )
        return true
    } catch (error) {
        console.error("Error deleting post: ", error)
        return null
    }
  },

  async listPosts(queries = [Query.equal("status", "active")]){
        try {
        return await databases.listDocuments(
            AppwriteDatabaseId,
            AppwriteCollectionId,
            queries
        )
    } catch (error) {
        console.error("Error listing posts: ", error)
        return null
    }
  }
};

export default postDatabase;
