type CountProps = {
  count: number;
};

export function TotalCount({ count }: CountProps) {
  return <p>Number of Exercises {count}</p>;
}
