import { useState } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

type TagInputProps = {
  value?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
};

const TagsInput = ({
  value = [],
  onChange,
  placeholder = "Add up to 4 tags",
}: TagInputProps) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      const newTag = input.trim();
      if (!value.includes(newTag)) {
        const updated = [...value, newTag];
        onChange?.(updated);
      }
      setInput("");
    }
  };

  const removeTag = (tag: string) => {
    const updated = value.filter((t) => t !== tag);
    onChange?.(updated);
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap items-center gap-2 border border-input rounded-md px-2 focus-within:ring-2 focus-within:ring-ring transition-all">
        {value.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-sm"
          >
            {tag}
            <button onClick={() => removeTag(tag)} type="button">
              <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        ))}
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-0 focus-visible:ring-0 focus-visible:ring-transparent p-0 m-0 flex-1 min-w-[100px]"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TagsInput;
