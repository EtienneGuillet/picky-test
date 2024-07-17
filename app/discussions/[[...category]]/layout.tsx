import { ReactNode } from "react";
import SectionHeader from "../../../modules/layout/components/section-header";

type DiscussionsLayoutProps = {
  children: ReactNode;
};

function DiscussionsLayout({ children }: DiscussionsLayoutProps) {
  return (
    <>
      <SectionHeader title={"List of discussions"} />
      {children}
    </>
  );
}

export default DiscussionsLayout;
