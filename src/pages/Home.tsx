import { Header, Aside, PostCard, Container } from "../components";

const dummyPosts = [
  {
    postImage:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdwdmtjlpqvn67do5p8oa.png",
    userImage: "https://i.pravatar.cc/150?img=1",
    userName: "Anoop Rajoriya",
    postUploadTime: "2025-07-03T14:30:00Z",
    postTitle: "Understanding Flexbox with Real-World Examples",
    postTags: ["css", "flexbox", "webdev"],
    postId: "post_001",
  },
  {
    userImage: "https://i.pravatar.cc/150?img=2",
    userName: "Priya Sharma",
    postUploadTime: "2025-07-02T09:15:00Z",
    postTitle: "Getting Started with React and Vite",
    postTags: ["react", "vite", "javascript"],
    postId: "post_002",
  },
  {
    userImage: "https://i.pravatar.cc/150?img=3",
    userName: "Rohan Mehta",
    postUploadTime: "2025-06-30T18:45:00Z",
    postTitle: "10 Useful Git Tips Every Developer Should Know",
    postTags: ["git", "tools", "productivity"],
    postId: "post_003",
  },
  {
    userImage: "https://i.pravatar.cc/150?img=4",
    userName: "Sara Khan",
    postUploadTime: "2025-07-01T11:00:00Z",
    postTitle: "How to Build a Markdown Editor with Tiptap",
    postTags: ["tiptap", "editor", "react"],
    postId: "post_004",
  },
  {
    userImage: "https://i.pravatar.cc/150?img=5",
    userName: "Dev Patel",
    postUploadTime: "2025-07-04T07:50:00Z",
    postTitle: "Deploying a Fullstack App with Appwrite & Vite",
    postTags: ["appwrite", "deployment", "vite"],
    postId: "post_005",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <Container className="">
        <Aside className="hidden md:block" />
        <Container className=" rounded-md">
          <div className="flex flex-col gap-3 w-full">
            {dummyPosts.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Home;
