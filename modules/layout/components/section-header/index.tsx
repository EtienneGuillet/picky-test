import { clx } from "../../../../utils/clx";

type SectionHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={clx("py-2", className)}>
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p></p>}
    </div>
  );
}

export default SectionHeader;
