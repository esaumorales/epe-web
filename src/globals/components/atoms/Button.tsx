export default function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <button 
            className={`rounded-sm bg-[#0400FF] text-white px-4 py-2 hover:bg-blue-700 transition-colors ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    )
}