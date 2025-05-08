import CardFilm from "@/components/CardFilm";
import PageWrapper from "@/components/PageWrapper";

export default function Home(){
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7">
        <h1 className="text-[40px] text-[#9245EBFF] font-bold">Sua coleção de Filmes</h1>
        <p className="text-[20px] text-[#8a898c]">Acompanhe seus filmes favoritos. Adicione novos filmes à sua coleção.</p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center">
        <CardFilm/>
      </div>
    </PageWrapper>
  )
}