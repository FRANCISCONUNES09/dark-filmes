export default function CardFilm(){
    return (
        <div className="w-[350px] h-[280px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] rounded-t-lg">
                <img className="w-full rounded-t-lg object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2R5bdHhYNO5a1GyWXgaE15BLUOxgL1W6B0g&s"
                    alt=""
                />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="text-[15px] font-bold">Velozes & Furiosos 5</p>
                <p className="text-[15px] text-[#8a898c]">Justin Lin</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">2011</p>
                    <div className="px-2 py-0 bg-[#9245EBFF]/10 text-[#9245EBFF] rounded-lg">Ação</div>
                </div>
            </div>
        </div>
    )
}