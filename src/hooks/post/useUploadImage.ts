import { useState } from "react";
import { createImage, fetchImage } from "@/service/appwrite/postService";

const useUploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const uploadImage = async (image: File) => {
    setLoading(true);
    setError(null);
    try {
      const imageResponse = await createImage(image);
      if (imageResponse) {
        const url = fetchImage(imageResponse.$id);
        return { id: imageResponse.$id, url };
      }
    } catch (error: any) {
      console.error("Post error uploadImage() |", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
    return null;
  };

  return { loading, error, uploadImage };
};

export default useUploadImage;
