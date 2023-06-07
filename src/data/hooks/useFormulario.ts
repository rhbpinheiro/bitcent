import Transacao from "@/logica/core/financas/Transacao";
import { useState } from "react";

export default function useFormulario<T = any>(dadosIniciais: T) {
  const [dados, setDados] = useState<T>(dadosIniciais)

  function alterarAtributo(atributo: string, fun?: Function) {
    return (valorOuEvento: any) => {
      const v = valorOuEvento?.target?.value ?? valorOuEvento
      setDados({...dados, [atributo]: fun?.(v) ?? v })
    }
  }

  return{
    dados,
    alterarDados: setDados,
    alterarAtributo
  }
}