export default function FormContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="col-start-5 col-end-9 ">
      <div className="flex flex-col gap-3 bg-white p-5">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
