import Pagina from "./Pagina";
import Image from "next/image"
import loading from "../../../public/loading.gif"

export default function Carregando() {
  return (
    <Pagina className="justify-center items-center">
      <Image 
        priority
        src={loading}
        alt="loading"
        width={80}
        height={80}
      />
    </Pagina>
  )
}