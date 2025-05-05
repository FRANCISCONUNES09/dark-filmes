import { LuFilm } from "react-icons/lu";

export default function Header({showButton = true}){
    return (
        <header className="w-full h-[50px] flex bg-[#0C0F15] justify-between pr-2 items-center">
            <div className="flex h-full gap-2 items-center justify-center pl-2">
            <LuFilm color="#9B87F5" size={25} />
            <h2 className="font-bold text-[18px] ">Dark Filmes</h2>
            </div>
           {showButton && (
                <button className="w-[150px] h-[60%] rounded-md 
                bg-[#9B87F5] font-bold hover:bg-[#9B87F5]/70 cursor-pointer">
                    Adicionar Filmes</button>
           )}
        </header>
    )
}