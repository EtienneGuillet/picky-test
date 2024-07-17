import { ReactNode } from "react";
import { clx } from "../../../../utils/clx";

type BadgeProps = {
  children: ReactNode;
  variant?: "badge" | "pill";
  className?: string;
};

function Badge({ children, variant = "badge", className }: BadgeProps) {
  return (
    <div
      className={clx(
        "w-fit px-[10px] py-[5px] rounded bg-gray-100 text-xs font-normal",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Badge;
