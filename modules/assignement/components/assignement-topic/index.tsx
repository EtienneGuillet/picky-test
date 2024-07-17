import { ReactNode } from "react";

type AssignementTopicProps = {
  title: string;
  children?: ReactNode;
};

function AssignementTopic({ title, children }: AssignementTopicProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-medium">{title}</h3>
      {children}
    </div>
  );
}

export default AssignementTopic;
