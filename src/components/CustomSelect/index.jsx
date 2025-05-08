export default function CustomSelect({label, options, onChange, value}){
    return (
        <div className="w-full flex flex-col gap-2">
           <label className="text-[17px] font-bold">{label}</label>
                <select 
                    value={value}
                    onChange={onChange}
                    className="w-full h-[45px] bg-[#141414] p-2 rounded-lg 
                    border border-[#ffffff1a] outline-none focus:border-purple-600">
                    <option value="">Selecione...</option>
                    {options.map((opcao) => {
                        return (
                            <option key={opcao} 
                                value={opcao}
                                >{opcao}
                            </option>
                        )
                    })}
                </select>
        </div>
    )
}