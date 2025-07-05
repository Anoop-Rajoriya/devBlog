import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Input } from "@/components/ui/input";
import Container from "../Container";
import TagsInput from "./TagsInput";
import ToolBar from "./ToolBar";
import ImageUploader from "./FileInput";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { useDispatch, useSelector } from "react-redux";
import { all, createLowlight } from "lowlight";
import { setPost, type StoreState } from "@/services/redux";
import js from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.css";

const lowlight = createLowlight(all);
lowlight.register("js", js);

const extensions = [
  StarterKit.configure({
    codeBlock: false,
    heading: {
      HTMLAttributes: {
        class: "text-2xl font-semibold",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "ml-4 list-disc",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "ml-4 list-decimal",
      },
    },
    blockquote: {
      HTMLAttributes: {
        class:
          "border-l-4 border-gray-400 pl-4 italic text-muted-foreground my-4",
      },
    },
    horizontalRule: {
      HTMLAttributes: {
        class: "mt-3 border-2 border-ring",
      },
    },
    code: {
      HTMLAttributes: {
        class: "bg-background px-2 rounded-sm",
      },
    },
  }),
  Placeholder.configure({ placeholder: "Write someting..." }),
  CodeBlockLowlight.configure({
    lowlight,
    defaultLanguage: "js",
    HTMLAttributes: {
      class: "hljs p-4 rounded-md",
    },
  }),
];

const Editor = () => {
  const { title, content, image, tags } = useSelector(
    (state: StoreState) => state.post
  );
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(setPost({ content: editor?.getHTML() }));
  };
  const editor = useEditor({
    extensions,
    content: content,
    onUpdate,
    editorProps: {
      attributes: {
        class:
          "p-3 py-4 flex-grow rounded-md border-border border-2 bg-card text-card-foreground outline-none focus-visible:border-ring",
      },
    },
  });

  return (
    <Container className="flex-1 gap-3 flex-col p-0 md:p-0">
      <section className="bg-background flex flex-col md:items-start gap-4 p-2 rounded-md">
        <ImageUploader
          value={image}
          onChange={(image) => dispatch(setPost({ image }))}
        />
        <Input
          className="border-0 focus-visible:ring-0 focus-visible:ring-transparent m-0 p-2 text-2xl md:text-2xl font-semibold shadow-none"
          placeholder="New title here..."
          value={title}
          onChange={({ target }) => dispatch(setPost({ title: target.value }))}
        />
        <TagsInput
          value={tags}
          onChange={(tags) => dispatch(setPost({ tags }))}
        />
      </section>
      <ToolBar editor={editor} />
      <EditorContent className="flex flex-1" editor={editor} />
    </Container>
  );
};

export default Editor;
