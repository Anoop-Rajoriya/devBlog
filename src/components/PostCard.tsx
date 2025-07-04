import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { formatDistanceToNow } from "date-fns";

type Post = {
  postImage?: string;
  postTitle: String;
  postTags: String[];
  postId: string;
  postUploadTime: string;
  userName: string;
  userImage: string;
};

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Card className="w-full mx-auto mb-4 hover:shadow-md transition-shadow">
      {post?.postImage && (
        <CardHeader>
          <img src={post.postImage} alt={post.postTitle.split(" ")[0]} />
        </CardHeader>
      )}
      <CardContent className="p-4 flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.userImage} />
            <AvatarFallback>{post.userName[0]}</AvatarFallback>
          </Avatar>
          <div className="text-sm md:text-base text-muted-foreground">
            <p className="font-medium text-foreground">{post.userName}</p>
            <p>
              {formatDistanceToNow(new Date(post.postUploadTime), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>

        {/* Title */}
        <Link
          to={`/post/${post.postId}`}
          className="text-lg text-wrap md:text-2xl font-semibold text-foreground hover:underline"
        >
          {post.postTitle}
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.postTags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="md:text-base font-semibold"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
