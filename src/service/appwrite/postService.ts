import { ID, storage } from "./appwrite";
import { AppwriteBucketId } from "./appwriteConstant";

async function createImage(imageFile: File) {
  try {
    return await storage.createFile(AppwriteBucketId, ID.unique(), imageFile);
  } catch (error) {
    throw error;
  }
}

function fetchImage(imageFileId: string) {
  try {
    return storage.getFileView(AppwriteBucketId, imageFileId);
  } catch (error) {
    throw error;
  }
}

function fetchImagePreview(imageFileId: string) {
  try {
    return storage.getFilePreview(AppwriteBucketId, imageFileId);
  } catch (error) {
    throw error;
  }
}

export { createImage, fetchImage, fetchImagePreview };
