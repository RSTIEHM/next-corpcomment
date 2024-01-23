type HashTagItemProps = {
  company: string;
};

export default function HashTagItem({ company }: HashTagItemProps) {
  return (
    <li key={company}>
      <button>#{company}</button>
    </li>
  );
}
