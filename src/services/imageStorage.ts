import { ID, storage } from "@/lib/appwrite";
import { AppwriteBucketId } from "@/lib/appwriteConstant";

const imageStorage = {
  async uploadImage(imageFile: any) {
    try {
      return await storage.createFile(AppwriteBucketId, ID.unique(), imageFile);
    } catch (error) {
      console.error("Error uploading image file: ", error);
      return error;
    }
  },
  async deleteImage(imageFileId: string) {
    try {
      await storage.deleteFile(AppwriteBucketId, imageFileId);
      return true;
    } catch (error) {
      console.error("Error deleting file: ", error);
      return error;
    }
  },
  getImagePreview(imageFileId: string) {
    return storage.getFilePreview(AppwriteBucketId, imageFileId);
  },
};

export default imageStorage;
