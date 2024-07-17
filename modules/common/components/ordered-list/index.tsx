type OrderedListProps = {
  items: string[];
};

function OrderedList({ items }: OrderedListProps) {
  return (
    <ol>
      {items.map((item, index) => (
        <li className="list-decimal list-inside" key={index}>
          {item}
        </li>
      ))}
    </ol>
  );
}

export default OrderedList;
