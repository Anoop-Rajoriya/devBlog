import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
// --- DUMMY DATA ---
const tags = [
  { name: "JavaScript", emoji: "🟨" },
  { name: "TypeScript", emoji: "🔷" },
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "⏭️" },
  { name: "Node.js", emoji: "🌲" },
  { name: "CSS", emoji: "🎨" },
  { name: "HTML", emoji: "📄" },
  { name: "Python", emoji: "🐍" },
  { name: "TailwindCSS", emoji: "💨" },
  { name: "Git", emoji: "🔧" },
  { name: "GitHub", emoji: "🐙" },
  { name: "DevOps", emoji: "⚙️" },
  { name: "Linux", emoji: "🐧" },
  { name: "AI", emoji: "🧠" },
  { name: "Machine Learning", emoji: "🤖" },
  { name: "Web Development", emoji: "🌐" },
  { name: "Mobile Dev", emoji: "📱" },
  { name: "Firebase", emoji: "🔥" },
  { name: "SQL", emoji: "📊" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "Security", emoji: "🔒" },
  { name: "Careers", emoji: "💼" },
  { name: "Beginner", emoji: "🌱" },
  { name: "Productivity", emoji: "📈" },
  { name: "Tutorial", emoji: "📚" },
];

const Aside: React.FC<Props> = ({ className }) => {
  return (
    <aside className={cn("px-3", className)}>
      <h4 className="py-2 mt-2 text-sm font-medium text-muted-foreground">
        POPULAR TAGS
      </h4>
      <div className="flex flex-col items-start">
        {tags.map(({ emoji, name }) => (
          <Button
            key={name}
            variant="link"
            className="justify-start gap-3 text-base h-11"
          >
            <span className="text-xl">{emoji}</span>
            <span>{name}</span>
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
