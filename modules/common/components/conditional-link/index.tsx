import { ReactNode } from "react";

type ConditionalLinkProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

function ConditionalLink({ children, href, className }: ConditionalLinkProps) {
  return href ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}

export default ConditionalLink;
