import { ReactNode } from "react";
import SectionHeader from "../../../modules/layout/components/section-header";

type DiscussionsLayoutProps = {
  children: ReactNode;
};

function DiscussionsLayout({ children }: DiscussionsLayoutProps) {
  return (
    <>
      <a className="hover:underline" href="/discussions">
        ← Go back to discussion list
      </a>
      <SectionHeader title={"Details of the discussion"} />
      {children}
    </>
  );
}

export default DiscussionsLayout;
