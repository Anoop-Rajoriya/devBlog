import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

function Loader({
  className,
  size = 10,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn(`flex items-center justify-center size-${size}`, className)}
    >
      <LoaderIcon className="animate-spin text-inherit w-full h-full" />
    </div>
  );
}

export default Loader;
