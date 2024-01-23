type HashTagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

export default function HashTagItem({
  onSelectCompany,
  company,
}: HashTagItemProps) {
  return (
    <li key={company}>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
