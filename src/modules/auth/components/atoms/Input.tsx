export default function Input(props: { name: string }) {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="">{props.name}</label>
      <input type="text" className="border rounded-md" />
    </div>
  );
}   