import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { Icon } from "./ui/icon";

export function Alert({
  children,
  type,
}: {
  children: ReactNode;
  type?: "alert" | "info";
}) {
  return (
    <div
      className={cn(
        "prose prose-invert my-4 flex items-center gap-4 rounded-sm border border-white/10 bg-white/5 p-4 leading-5",
        type === "alert" && "border-red-700/50",
        type === "info" && "border-sky-500/50",
      )}
    >
      {type === "alert" && (
        <div>
          <Icon.alert className="h-8 w-8 text-red-700/50" />
        </div>
      )}
      {type === "info" && <Icon.info className="h-8 w-8 text-sky-500/50" />}
      <div className="prose-p:my-2">{children}</div>
    </div>
  );
}
