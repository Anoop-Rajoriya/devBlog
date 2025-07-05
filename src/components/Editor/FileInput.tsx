import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const ImageUploader: React.FC<Props> = ({ value, onChange }) => {
  const handleUploadClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      // ✅ Preview logic
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);

      // ✅ Optional: Upload to server
      // await uploadImage(file);
    };

    input.click(); // Opens file picker
  };
  const handleDeleteClick = () => {
    onChange("");
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <Button
        onClick={handleUploadClick}
        variant="outline"
        className="font-semibold md:mr-auto"
      >
        Upload Image
      </Button>

      {value && (
        <div className="w-full max-w-xs mx-auto border-2 rounded-md border-ring overflow-hidden relative">
          <Button
            onClick={handleDeleteClick}
            size="icon"
            variant="destructive"
            className=" absolute top-0 right-0"
          >
            <X className="size-4" />
          </Button>
          <img src={value} alt="Preview" className="w-full aspect-auto" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
