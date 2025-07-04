import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type LoaderProps = {
  size?: number; // default: 24
  className?: string;
  fullScreen?: boolean;
  label?: string;
};

const Loader = ({ size = 24, className, fullScreen = false, label }: LoaderProps) => {
  if (fullScreen) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <Loader2 className="animate-spin" size={size * 2} />
          {label && <span className="text-sm">{label}</span>}
        </div>
      </div>
    );
  }

  return (
    <Loader2
      className={cn("animate-spin text-muted-foreground", className)}
      size={size}
    />
  );
};

export default Loader;
