type ListProps = {
  items: string[];
};

function List({ items }: ListProps) {
  return (
    <ol>
      {items.map((item, index) => (
        <li className="list-disc list-inside" key={index}>
          {item}
        </li>
      ))}
    </ol>
  );
}

export default List;
