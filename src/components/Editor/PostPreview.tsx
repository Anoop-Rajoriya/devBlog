import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";
import type { StoreState } from "@/services/redux";
import { useEffect, useRef } from "react";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const PostPreview = () => {
  const { title, content, image, tags } = useSelector(
    (state: StoreState) => state.post
  );

  // implementing code highlighting
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current
        .querySelectorAll("pre code")
        .forEach((block) => hljs.highlightElement(block as HTMLElement));
    }
  }, [content]);

  return (
    <Card className="w-full max-w-2xl mx-auto border-none shadow-none p-3 md:p-4">
      {/* Cover Image */}
      {image && (
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-none">
          <img
            src={image}
            alt="post"
            className="object-cover w-full h-full rounded-md"
          />
        </AspectRatio>
      )}

      {/* Post Content */}
      <CardContent className="px-4 sm:px-8 space-y-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
          {title}
        </h1>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="lowercase text-sm font-normal px-2 py-1"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        <Separator />

        {/* Content */}
        <div
          ref={contentRef}
          className="prose prose-neutral dark:prose-invert max-w-none text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardContent>
    </Card>
  );
};

export default PostPreview;
