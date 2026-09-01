export default function ModuleCard({ title, onClick }: { title: string, onClick: () => void }) {
    return (
        <div onClick={onClick} className="flex flex-wrap gap-3 w-60 h-60  border rounded-md  items-center justify-center bg-[#369E94]  hover:bg-[#3E9B4B]">
            <h1 className="items-center justify-center text-center">{title}</h1>
        </div>
    )
}   