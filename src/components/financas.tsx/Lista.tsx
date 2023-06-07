import Transacao from '@/logica/core/financas/Transacao';
import Data from '@/logica/utils/data';
import Dinheiro from '@/logica/utils/dinheiro';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

interface ListaProps {
    transacoes: Transacao[];
    selecionarTransacao: (transacao: Transacao) => void;
}

export default function Lista({ transacoes, selecionarTransacao }: ListaProps) {
    function renderizarTipo(transacao: Transacao) {
        return (
            <span
                className={`flex justify-center items-center h-8 w-8
                sm:w-10 sm:h-10 rounded-full 
                ${transacao.tipo === 'receita' ? 'bg-green-500' : 'bg-red-500'}`}
            >
                {transacao.tipo === 'receita' ? (
                    <IconTrendingUp />
                ) : (
                    <IconTrendingDown />
                )}
            </span>
        );
    }

    function renderizarLinha(transacoes: Transacao, indice: number) {
        return (
            <div
                key={transacoes.id}
                className={`flex items-center gap-3 p-3 cursor-pointer 
        ${indice % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}`}
                onClick={() => selecionarTransacao?.(transacoes)}
            >
                {renderizarTipo(transacoes)}
                <span className="w-full md:w-1/2">{transacoes.descricao}</span>
                <span className="hidden md:inline flex-1">
                    {Data.ddmmyy.formatar(transacoes.data)}
                </span>
                <span>{Dinheiro.formatar(transacoes.valor)}</span>
            </div>
        );
    }
    return (
      <div className="flex flex-col border border-700 rounded-xl overflow-hidden">
        {transacoes.map(renderizarLinha)}
      </div>
    );
}
