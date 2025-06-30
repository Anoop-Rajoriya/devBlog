import { Container } from "@/components";
import TiptapEditor from "@/components/TiptapEditor";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";

const postSchema = z.object({
  content: z.string().min(10, "Content must be at least 10 characters"),
});

function CreatePage() {
  const [content, setContent] = useState(
    `<h1>🧪 Testing Content for Tiptap Editor</h1>
    <pre><code class="language-js">console.log('Hello world');</code></pre>
    <pre><code class="language-python">print("Hello world")</code></pre>
    `
  );
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = () => {
    const result = postSchema.safeParse({ content });

    if (!result.success) {
      setError(result.error.issues[0].message);
    } else {
      setError(null);
      console.log("Submitted:", result.data);
    }
  };
  return (
    <Container className="flex-grow flex flex-col gap-2 py-0">
      <Button onClick={handleSubmit} className="font-semibold">
        Uploade Post
      </Button>
      {error && (
        <p className="text-destructive capitalize text-center p-2">{error}</p>
      )}
      <TiptapEditor content={content} onChange={setContent} />
    </Container>
  );
}

export default CreatePage;
