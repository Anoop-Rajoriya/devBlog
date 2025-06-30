import {
  Bold,
  List,
  ListOrdered,
  Image as ImageIcon,
  Strikethrough,
  Heading,
  Code2Icon,
  Italic,
  Code,
  SeparatorHorizontal,
  TextQuote,
} from "lucide-react";

import { BubbleMenu, Editor } from "@tiptap/react";
import { Button } from "./ui/button";
import useUploadImage from "@/hooks/post/useUploadImage";
import Loader from "./Loader";

type Props = {
  editor: Editor | null;
};

const TiptapToolbar = ({ editor }: Props) => {
  const { loading, error, uploadImage } = useUploadImage();

  const menuOptions = [
    {
      name: "Heading",
      icon: <Heading className="size-6" />,
      active: editor?.isActive("heading", { level: 1 }),
      command: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      name: "List",
      icon: <List className="size-6" />,
      active: editor?.isActive("bulletList"),
      command: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      name: "Order List",
      icon: <ListOrdered className="size-6" />,
      active: editor?.isActive("orderedList"),
      command: () => editor?.chain().focus().toggleOrderedList().run(),
    },
    {
      name: "Code block",
      icon: <Code2Icon className="size-6" />,
      active: editor?.isActive("codeBlock"),
      command: () => editor?.chain().focus().toggleCodeBlock().run(),
    },
    {
      name: "Blockquote",
      icon: <TextQuote className="size-6" />,
      active: editor?.isActive("blockquote"),
      command: () => editor?.chain().focus().toggleBlockquote().run(),
    },
    {
      name: "HorizontalRule",
      icon: <SeparatorHorizontal className="size-6" />,
      active: editor?.isActive("horizontalRule"),
      command: () => editor?.chain().focus().setHorizontalRule().run(),
    },
  ];
  const bubbleMenuOptions = [
    {
      name: "Bold",
      icon: <Bold className="size-4" />,
      active: editor?.isActive("bold"),
      command: () => editor?.chain().focus().toggleBold().run(),
    },
    {
      name: "Italic",
      icon: <Italic className="size-4" />,
      active: editor?.isActive("italic"),
      command: () => editor?.chain().focus().toggleItalic().run(),
    },
    {
      name: "Strike",
      icon: <Strikethrough className="size-4" />,
      active: editor?.isActive("strike"),
      command: () => editor?.chain().focus().toggleStrike().run(),
    },
    {
      name: "Code",
      icon: <Code className="size-4" />,
      active: editor?.isActive("code"),
      command: () => editor?.chain().focus().toggleCode().run(),
    },
  ];

  const handleImageEmbedding = () => {
    const imageInput = document.createElement("input");
    imageInput.type = "file";
    imageInput.accept = "image/*";

    imageInput.onchange = async () => {
      const image = imageInput.files?.[0];
      if (!image) return;

      const uploadedImage = await uploadImage(image);
      if (uploadedImage) {
        editor?.chain().focus().setImage({ src: uploadedImage.url }).run();
      }
    };

    imageInput.click();
  };

  if (!editor) return null;
  return (
    editor && (
      <>
        <div className="flex items-center justify-center gap-2 p-2">
          {menuOptions.map(({ name, icon, command, active }) => (
            <Button
              size="icon"
              key={name}
              onClick={command}
              className={active ? "bg-muted text-muted-foreground" : ""}
              variant="secondary"
            >
              {icon}
            </Button>
          ))}
          <Button
            variant="secondary"
            size="icon"
            onClick={handleImageEmbedding}
            disabled={loading}
          >
            {loading ? <Loader size={6} /> : <ImageIcon className="size-6" />}
          </Button>
        </div>
        <BubbleMenu
          editor={editor}
          className="flex gap-2 items-center justify-center bg-card rounded-md p-2"
        >
          {bubbleMenuOptions.map(({ name, icon, active, command }) => (
            <Button
              size="icon"
              key={name}
              onClick={command}
              className={active ? "bg-muted text-muted-foreground" : ""}
              variant="secondary"
            >
              {icon}
            </Button>
          ))}
        </BubbleMenu>
      </>
    )
  );
};

export default TiptapToolbar;
