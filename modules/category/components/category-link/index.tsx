import { ReactNode } from "react";
import { clx } from "../../../../utils/clx";

type CategoryLinkProps = {
  children: ReactNode;
  href: string;
  selected?: boolean;
};

function CategoryLink({ children, href, selected }: CategoryLinkProps) {
  return (
    <a
      className={clx("hover:underline", {
        "font-semibold": selected,
      })}
      href={href}
    >
      {children}
    </a>
  );
}

export default CategoryLink;
