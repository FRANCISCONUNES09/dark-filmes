import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { FaArrowLeft } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import instance from "@/api/instance";

export default function Filme(){
    const router = useRouter() 
    const { id } = router.query
    const [filme, setFilmes] = useState({})
    
    useEffect(() => {
        async function getFilmeById(){
            const response = await instance.get(`/api/movies/${id}`)
            setFilmes(response.data)
        }

        if(id){
            getFilmeById()
        }

    }, [])
    


    return (
        <PageWrapper
            showHeader={false}
        >
            <div className="w-full h-full min-h-screen flex flex-col px-[350px] pt-12 items-start">
                <button
                    onClick={() => router.back()} 
                    className="px-5 py-2 text-[#8a898c] gap-2 flex items-center 
                    justify-center rounded-lg hover:bg-[#27282B] hover:text-[#8F7BD8]">
                    <FaArrowLeft />
                    <p>Voltar para lista de filmes</p>
                </button>
                <div className="w-full min-h-[90vh] flex">
                    <div className="w-[30%] h-full flex flex-col">
                        <div className="w-full h-[90%]">
                            <img 
                                className="w-full h-full roudend-lg object-cover"
                                src="https://upload.wikimedia.org/wikipedia/pt/c/c5/Fast_five_poster_04.jpg" 
                                alt="" 
                            />
                        </div>
                        <div className="w-full flex h-[10%] pt-4 justify-between">
                            <button className="w-[46%] h-full border border-[#9b87f533] rounded-md 
                                text-[#9245EBFF] 
                                hover:bg-[#9245EBFF]/20 flex items-center justify-center gap-2 py-2">
                                <PiNotePencil  size={20}/> Editar filme
                            </button>
                            <button className="w-[46%] h-full border border-[#EF444433] rounded-md 
                                text-[#EF4444] 
                                hover:bg-[#EF4444]/20 flex items-center justify-center gap-2 py-2">
                               <FaRegTrashAlt /> Excluir filme
                            </button>
                        </div>
                    </div>
                    <div className="w-[70%] pl-4 h-full flex flex-col">
                        <div className="w-full flex gap-2 items-baseline">
                            <h1 className="text-[35px] text-[#9245EBFF] font-bold">Velozes & Furiosos 5</h1>
                            <p className="text-[#8a898c] font-semibold text-[17px]">(2011)</p>
                        </div>
                        <div className="w-full gap-4 flex">
                            <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                                <p className="text-[17px]">10/10</p>
                            </div>
                            <div className="py-1 px-4 rounded-2xl bg-[#9245EBFF]/20 text-[#9245EBFF]">
                                <p className="text-[17px]">Ação</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px]">Diretor</h4>
                            <p className="text-[#8a898c]">Justin Lin</p>
                        </div>
                         <div className="w-full flex flex-col mt-8">
                            <h4 className="font-bold text-[20px]">Sinopse</h4>
                            <p className="text-[#8a898c]">Desde que o ex-policial Brian O'Conner e Mia Toretto libertaram Dom da prisão, eles viajam pelo mundo para fugir das autoridades. No Rio de Janeiro, são obrigados a fazer um último trabalho antes de ganhar sua liberdade definitiva. Brian e Dom montam uma equipe de elite de pilotos de carro para executar a tarefa, mas precisam enfrentar um empresário corrupto e também um obstinado agente federal norte-americano.</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}