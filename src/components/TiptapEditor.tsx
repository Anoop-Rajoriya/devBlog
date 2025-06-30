import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import { all, createLowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import TiptapToolbar from "./TiptapToolbar";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import py from "highlight.js/lib/languages/python";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";

const lowlight = createLowlight(all);
lowlight.register("js", js);
lowlight.register("ts", ts);
lowlight.register("py", py);
lowlight.register("css", css);
lowlight.register("html", html);

type TiptapEditorProps = {
  content?: string;
  onChange: (content: any) => void;
};

const extensions = [
  StarterKit.configure({
    codeBlock: false,
    heading: {
      HTMLAttributes: {
        class: "text-2xl",
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
  CodeBlockLowlight.configure({ lowlight }),
  Image.configure({
    HTMLAttributes: {
      inline: true,
      base64: true,
      class: "w-full max-w-sm overflow-hidden border-border rounded-md mx-auto",
    },
  }),
];

const TiptapEditor = ({ content, onChange }: TiptapEditorProps) => {
  const onUpdate = ({ editor }: { editor: Editor }) => {
    onChange(editor.getHTML());
  };

  const editor = useEditor({
    extensions,
    content,
    onUpdate,
    editorProps: {
      attributes: {
        class:
          "p-3 py-4 rounded-md border-border border-2 bg-card text-card-foreground outline-none focus-visible:border-ring",
      },
    },
  });

  return (
    <>
      <TiptapToolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default TiptapEditor;
