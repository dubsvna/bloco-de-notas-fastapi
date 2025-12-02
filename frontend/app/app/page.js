import Image from "next/image";
import NotaBox from "@/app/components/NotaBox";
import NotaForm from "@/app/components/NotaForm";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p className="flex justify-self-center aligh-self-center "> Bloco de Notas </p>
        <NotaBox />
    </div>
  );
}
