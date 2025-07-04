import React, { useState } from "react";
import Container from "../../Container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
  ListIcon,
  ListOrderedIcon,
  Code2Icon,
  QuoteIcon,
  Undo2Icon,
  Redo2Icon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  EllipsisVertical,
} from "lucide-react";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const PostEditor = () => {
  const [postImage, setPostImage] = useState(null);
  const handlePostImageUploade = () => {
    if(!postImage) return;

    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"

    input.onclick = ()=>{
        const image = input.files?.[0]
        if(!image) return

        
    }

    input.click()
  };

  const editor = useEditor({
    extensions: [StarterKit],
  });

  const primaryToolbarOptions = [
    {
      name: "Heading 1",
      icon: Heading1Icon,
      command: (editor: Editor) =>
        editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: (editor: Editor) => editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Bullet List",
      icon: ListIcon,
      command: (editor: Editor) =>
        editor.chain().focus().toggleBulletList().run(),
      isActive: (editor: Editor) => editor.isActive("bulletList"),
    },
    {
      name: "Code Block",
      icon: Code2Icon,
      command: (editor: Editor) =>
        editor.chain().focus().toggleCodeBlock().run(),
      isActive: (editor: Editor) => editor.isActive("codeBlock"),
    },

    {
      name: "Undo",
      icon: Undo2Icon,
      command: (editor: Editor) => editor.chain().focus().undo().run(),
      isActive: () => false,
    },
    {
      name: "Redo",
      icon: Redo2Icon,
      command: (editor: Editor) => editor.chain().focus().redo().run(),
      isActive: () => false,
    },
  ];

  //   const toolbarOptions = [
  //     {
  //       name: "Heading 2",
  //       icon: Heading2Icon,
  //       command: (editor) =>
  //         editor.chain().focus().toggleHeading({ level: 2 }).run(),
  //       isActive: (editor) => editor.isActive("heading", { level: 2 }),
  //     },
  //     {
  //       name: "Heading 3",
  //       icon: Heading3Icon,
  //       command: (editor) =>
  //         editor.chain().focus().toggleHeading({ level: 3 }).run(),
  //       isActive: (editor) => editor.isActive("heading", { level: 3 }),
  //     },

  //     {
  //       name: "Ordered List",
  //       icon: ListOrderedIcon,
  //       command: (editor) => editor.chain().focus().toggleOrderedList().run(),
  //       isActive: (editor) => editor.isActive("orderedList"),
  //     },
  //     {
  //       name: "Blockquote",
  //       icon: QuoteIcon,
  //       command: (editor) => editor.chain().focus().toggleBlockquote().run(),
  //       isActive: (editor) => editor.isActive("blockquote"),
  //     },
  //   ];

  //   const bubbleToolbarOptions = [
  //     {
  //       name: "Bold",
  //       icon: BoldIcon,
  //       command: (editor) => editor.chain().focus().toggleBold().run(),
  //       isActive: (editor) => editor.isActive("bold"),
  //     },
  //     {
  //       name: "Italic",
  //       icon: ItalicIcon,
  //       command: (editor) => editor.chain().focus().toggleItalic().run(),
  //       isActive: (editor) => editor.isActive("italic"),
  //     },
  //     {
  //       name: "Strike",
  //       icon: StrikethroughIcon,
  //       command: (editor) => editor.chain().focus().toggleStrike().run(),
  //       isActive: (editor) => editor.isActive("strike"),
  //     },
  //   ];

  return (
    <Container className="flex-1 flex-col p-0 md:p-0">
      <section className="bg-background flex flex-col md:items-start gap-4 p-2 rounded-md">
        <Button onClick={handlePostImageUploade} variant="outline">
          Add cover image
        </Button>
        <Input
          className="w-full font-semibold text-xl md:text-2xl"
          placeholder="New title here..."
        />
        <div className="w-full border rounded-md p-2 flex flex-wrap gap-2">
          {/* {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-sm"
            >
              #{tag}
              <button
                onClick={() => removeTag(tag)}
                className="hover:text-red-500"
              >
                <XIcon className="h-3 w-3" />
              </button>
            </div>
          ))} */}
          <input
            type="text"
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter" || e.key === ",") {
            //     e.preventDefault();
            //     addTag(input);
            //     setInput("");
            //   }
            // }}
            placeholder="Add up to 4 tags..."
            className="outline-none bg-transparent text-sm flex-1 min-w-[100px]"
          />
        </div>
      </section>
      <section className="flex items-center justify-between my-2 px-4">
        <div className="flex items-center justify-center gap-2">
          {primaryToolbarOptions.map(({ icon: Icon, name }) => (
            <Button size="icon" variant="outline" key={name}>
              <Icon className="size-5" />
            </Button>
          ))}
        </div>
        <Button size="icon" variant="outline">
          <EllipsisVertical className="size-5" />
        </Button>
      </section>
      <section className="flex-1 bg-background rounded-md"></section>
    </Container>
  );
};

export default PostEditor;
