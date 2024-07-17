import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

function Content({ children }: ContentProps) {
  return <p className="text-gray-700 min-h-[54px]">{children}</p>;
}

export default Content;
