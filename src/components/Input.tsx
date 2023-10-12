export default function Input({
  type,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  placeholder: string;
  value: any;
  onChange: any;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 border-1 border-gray-100 rounded-md"
      value={value}
      onChange={onChange}
    />
  );
}
