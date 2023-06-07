import { Button } from "@mantine/core";

interface MiniFormularioProps {
    titulo: string;
    descricao: string;
    children: any;
    msgRodape: string;
    podeSalvar: boolean;
    salvar: () => void;
}

export default function MiniFormulario({
    children,
    titulo,
    descricao,
    msgRodape,
    salvar, 
    podeSalvar,
}: MiniFormularioProps) {
    return (
        <div
            className={`flex flex-col overflow-hidden mt-5
    border border-zinc-800 rounded-lg`}
        >
            <div className="flex flex-col p-7">
                <div className="text-3xl font-black">{titulo}</div>
                <div className="mt-4 text-zinc-400">{descricao}</div>
                <div className="mt-3">{children}</div>
            </div>
            <div className="flex justify-end sm:justify-between items-center
              bg-black px-7 py-5
            ">
              <span className="hidden sm:inline text-zinc-400">{msgRodape}</span>
              <Button 
                className={podeSalvar ? 'bg-green-500' : 'bg-gray-800'}
                color={podeSalvar ? 'green' : 'gray'}
                onClick={() => podeSalvar ? salvar() : null}>
                Salvar
              </Button>
            </div>
        </div>
    );
}
