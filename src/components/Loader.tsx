import { cn } from "@/lib/utils";

function Loader({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      loading...
    </div>
  );
}

export default Loader;
