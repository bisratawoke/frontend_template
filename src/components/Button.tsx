export default function Button({
  type,
  value,
  onClick,
}: {
  type: string;
  value: string;
  onClick: any;
}) {
  return (
    <input
      type={type}
      className="bg-green-400 text-white p-2  border-1 border-white rounded-md"
      value={value}
      onClick={onClick}
    />
  );
}
