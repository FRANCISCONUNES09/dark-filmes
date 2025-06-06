export default function CustomInput({label, placeholder, type, onChange, value}){
    return (
        <div className="flex flex-col w-full gap-2 pl-2">
            <label className="text-[17px] font-bold">{label}</label>
            <input 
                className="w-full h-[45px] bg-[#141414] p-2 rounded-lg 
                border border-[#ffffff1a] outline-none focus:border-purple-600"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
             />
        </div>
    )
}