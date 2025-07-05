import { BubbleMenu, Editor } from "@tiptap/react";
import {
  List,
  ListOrdered,
  Code,
  Heading1,
  Minus,
  Quote,
  Pilcrow,
  MoreHorizontal,
  Bold,
  Italic,
  Strikethrough,
  ClipboardPaste,
  ClipboardCopy,
  Redo2,
  Undo2,
  Code2,
  BetweenHorizontalEnd,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TiptapToolbarProps = {
  editor: Editor | null;
};

const ToolBar: React.FC<TiptapToolbarProps> = ({ editor }) => {
  if (!editor) return null;

  const toolbarItems = [
  {
    name: "Paragraph",
    icon: Pilcrow,
    command: () => editor.chain().focus().setParagraph().run(),
    isActive: () => editor.isActive("paragraph"),
  },
  {
    name: "Heading",
    icon: Heading1,
    command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => editor.isActive("heading", { level: 1 }),
  },
  {
    name: "BulletList",
    icon: List,
    command: () => editor.chain().focus().toggleBulletList().run(),
    isActive: () => editor.isActive("bulletList"),
  },
  {
    name: "OrderedList",
    icon: ListOrdered,
    command: () => editor.chain().focus().toggleOrderedList().run(),
    isActive: () => editor.isActive("orderedList"),
  },
  {
    name: "Blockquote",
    icon: Quote,
    command: () => editor.chain().focus().toggleBlockquote().run(),
    isActive: () => editor.isActive("blockquote"),
  },
  {
    name: "CodeBlock",
    icon: Code2,
    command: () => editor.chain().focus().toggleCodeBlock().run(),
    isActive: () => editor.isActive("codeBlock"),
  },
  {
    name: "HorizontalRule",
    icon: Minus,
    command: () => editor.chain().focus().setHorizontalRule().run(),
    isActive: () => editor.isActive("horizontalRule"),
  },
  {
    name: "HardBreak",
    icon: BetweenHorizontalEnd,
    command: () => editor.chain().focus().setHardBreak().run(),
    isActive: () => editor.isActive("hardBreak"),
  },
  {
    name: "Undo",
    icon: Undo2,
    command: () => editor.chain().focus().undo().run(),
    isActive: () => false,
  },
  {
    name: "Redo",
    icon: Redo2,
    command: () => editor.chain().focus().redo().run(),
    isActive: () => false,
  },
  {
    name: "Copy",
    icon: ClipboardCopy,
    command: () => {
      const content = editor.getText();
      navigator.clipboard.writeText(content);
    },
    isActive: () => false,
  },
  {
    name: "Paste",
    icon: ClipboardPaste,
    command: async () => {
      const text = await navigator.clipboard.readText();
      editor.chain().focus().insertContent(text).run();
    },
    isActive: () => false,
  },
];

  const visibleItems = toolbarItems.slice(0, 6);
  const dropdownItems = toolbarItems.slice(6);

  return (
    <>
      <BubbleMenu className="bg-background p-2 rounded-md" editor={editor}>
        <Button
          variant={editor.isActive("bold") ? "default" : "outline"}
          size="icon"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold />
        </Button>
        <Button
          variant={editor.isActive("code") ? "default" : "outline"}
          size="icon"
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <Code />
        </Button>
        <Button
          variant={editor.isActive("italic") ? "default" : "outline"}
          size="icon"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic />
        </Button>
        <Button
          variant={editor.isActive("strike") ? "default" : "outline"}
          size="icon"
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough />
        </Button>
      </BubbleMenu>
      <div className="flex justify-between items-center gap-2 flex-wrap border p-2 rounded-md bg-background shadow-sm">
        <div className="flex flex-wrap gap-2">
          {visibleItems.map(({ name, isActive, command, icon: Icon }) => (
            <Button
              key={name}
              size="icon"
              variant={isActive() ? "default" : "ghost"}
              onClick={command}
              title={name}
            >
              <Icon className="h-4 w-4" />
            </Button>
          ))}
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {dropdownItems.map(({ name, command, isActive, icon: Icon }) => (
                <DropdownMenuItem key={name} onClick={command}>
                  <Icon className="h-4 w-4 mr-2" />
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default ToolBar;
